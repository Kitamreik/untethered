import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate, Link } from "react-router-dom";
import {
  PaymentElement,
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Load Stripe publishable key from env
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string
);

// Backend API base URL from env
const API_BASE = import.meta.env.VITE_API_BASE as string;

interface Package {
  id: string;
  name: string;
  price: number; // in cents
}

// Grouped packages by tier
const supportingPackages: Package[] = [
  { id: "pkg1", name: "Supporting Tier: 4 Sessions Package", price: 35000 },
  { id: "pkg2", name: "Supporting Tier: 8 Sessions Package", price: 68600 },
  { id: "pkg3", name: "Supporting Tier: 12 Sessions Package", price: 108000 },
];

const sustainingPackages: Package[] = [
  { id: "pkg4", name: "Sustaining Tier: 4 Sessions Package", price: 42500 },
  { id: "pkg5", name: "Sustaining Tier: 8 Sessions Package", price: 83300 },
  { id: "pkg6", name: "Sustaining Tier: 12 Sessions Package", price: 122400 },
];

const impactPackages: Package[] = [
  { id: "pkg7", name: "Impact Tier: 4 Sessions Package", price: 50000 },
  { id: "pkg8", name: "Impact Tier: 8 Sessions Package", price: 98000 },
  { id: "pkg9", name: "Impact Tier: 12 Sessions Package", price: 144000 },
];

// Accordion Tier Section
const TierAccordion: React.FC<{
  title: string;
  packages: Package[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (pkg: Package) => void;
}> = ({ title, packages, isOpen, onToggle, onSelect }) => (
  <div className="mb-4 border rounded-lg overflow-hidden shadow-sm">
    <button
      type="button"
      className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
      onClick={onToggle}
    >
      <span className="font-semibold text-lg">{title}</span>
      <span className="text-xl">{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && (
      <div className="p-6 flex flex-col md:flex-row justify-center gap-6 bg-white">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="p-4 border rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition text-center w-full md:w-64"
            onClick={() => onSelect(pkg)}
          >
            <h4 className="text-lg font-semibold">{pkg.name}</h4>
            <p className="mt-2 text-gray-600">${(pkg.price / 100).toFixed(2)}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  
);

//Refactored
const CheckoutForm: React.FC<{
  selectedPackage: Package;
  onPaymentSuccess: () => void;
  onCancel: () => void;
  clientSecret: string;
}> = ({ selectedPackage, onPaymentSuccess, onCancel, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // setLoading(true);
    setErrorMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url: window.location.origin + "/confirmation",
        },
      });

      if (error) {
        console.error("Payment error:", error.message);
        setErrorMessage(error.message || "Payment failed");
        // setLoading(false);
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        // Log booking in MongoDB
        await fetch(`${API_BASE}/log-session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            packageId: selectedPackage.id,
            price: selectedPackage.price,
            paymentIntentId: paymentIntent.id,
          }),
        });

        onPaymentSuccess();
        navigate("/confirmation");
      }
    } catch (err) {
      console.error("Payment error:", err);
      setErrorMessage("Something went wrong during payment.");
    } finally {
      // setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <PaymentElement />
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {/* {loading ? "Processing..." : "Pay"} */}
          Pay
        </button>
      </form>
  );
};


const PackageBooking: React.FC = () => {
  //Stripe and Routing
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Keep track of which tier is open
  const [openTier, setOpenTier] = useState<"supporting" | "sustaining" | "impact" | null>(null);

  const handlePaymentSuccess = () => setPaymentSuccess(true);

  const handleBookSession = async () => {
    if (!selectedDate || !selectedPackage) return;

    await fetch(`${API_BASE}/book-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        packageId: selectedPackage.id,
        sessionDate: selectedDate.toISOString(),
      }),
    });

    alert("✅ Session booked successfully!");
  };

  useEffect(() => {
    const createPaymentIntent = async () => {
    try {
      const res = await fetch(`${API_BASE}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000, currency: "usd" }),
      })
      if (!res.ok) {
        throw new Error(`Error creating PaymentIntent: ${res.statusText}`);
      }

      const data = await res.json();
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.error("Failed to fetch PaymentIntent:", err);
    }
  }
  createPaymentIntent();
  }, []);

  // if (!clientSecret) {
  //   return <p>Loading checkout...</p>;
  // }

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Purchase Package & Book Session
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>

        {/* Package selection accordions */}
        {!selectedPackage && (
          <>
            <TierAccordion
              title="Supporting Tier"
              packages={supportingPackages}
              isOpen={openTier === "supporting"}
              onToggle={() => setOpenTier(openTier === "supporting" ? null : "supporting")}
              onSelect={setSelectedPackage}
            />
            <TierAccordion
              title="Sustaining Tier"
              packages={sustainingPackages}
              isOpen={openTier === "sustaining"}
              onToggle={() => setOpenTier(openTier === "sustaining" ? null : "sustaining")}
              onSelect={setSelectedPackage}
            />
            <TierAccordion
              title="Impact Tier"
              packages={impactPackages}
              isOpen={openTier === "impact"}
              onToggle={() => setOpenTier(openTier === "impact" ? null : "impact")}
              onSelect={setSelectedPackage}
            />
          </>
        )}

        {/* Payment form */}
        {selectedPackage && !paymentSuccess && (
          <div className="mt-12">
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm
                selectedPackage={selectedPackage}
                onPaymentSuccess={handlePaymentSuccess}
                clientSecret={ clientSecret }
                onCancel={() => setSelectedPackage(null)}
              />
            </Elements>
          </div>
        )}

        {/* Session booking */}
        {paymentSuccess && (
          <div className="mt-12 text-center space-y-4">
            <h3 className="text-xl font-semibold">Select a Session Date</h3>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date) => setSelectedDate(date)}
              showTimeSelect
              minDate={new Date()}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="border rounded-lg p-3 w-full max-w-sm mx-auto"
            />
            <Button
              variant="cta"
              size="lg"
              className="mt-4"
              onClick={handleBookSession}
              disabled={!selectedDate}
            >
              <CalendarIcon className="w-5 h-5 mr-2" />
              Book Session
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageBooking;