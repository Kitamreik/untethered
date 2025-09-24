import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
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

const CheckoutForm: React.FC<{
  selectedPackage: Package;
  onPaymentSuccess: () => void;
  onCancel: () => void;
}> = ({ selectedPackage, onPaymentSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`${API_BASE}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: selectedPackage.id,
          price: selectedPackage.price,
        }),
      });

      if (!response.ok) throw new Error("Failed to create PaymentIntent");

      const { clientSecret, id } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement)! },
      });
      setPaymentIntentId(id);

      if (result.error) {
        setErrorMessage(result.error.message ?? "Payment failed");
      } else if (result.paymentIntent?.status === "succeeded") {
        await fetch(`${API_BASE}/log-session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ packageId: selectedPackage.id }),
        });
        onPaymentSuccess();
      }
    } catch (err) {
      console.error("Payment error:", err);
      setErrorMessage("Something went wrong during payment.");
    } finally {
      setLoading(false);
    }
  };

  //Initial
  {/*
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-center">
        {selectedPackage.name}
      </h3>
      <p className="text-center text-gray-600">
        Price: ${(selectedPackage.price / 100).toFixed(2)}
      </p>

     
      <div className="p-3 border rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                "::placeholder": { color: "#a0aec0" },
              },
              invalid: { color: "#e53e3e" },
            },
          }}
        />
      </div>

      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <div className="flex gap-3">
        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="flex-1 text-xl"
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay & Book"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="flex-1"
          onClick={async () => {
            if (paymentIntentId) {
              await fetch(`${API_BASE}/cancel-payment-intent`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ paymentIntentId }),
              });
            }
            onCancel(); // resets package selection
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
  */}

  return (
    <section className="py-8 sm:py-12 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Wrapper */}
        <Carousel className="w-full">
          <CarouselContent>
            {/* Payment Form Slide */}
            <CarouselItem>
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md mx-auto space-y-4 bg-white shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-center">
                  {selectedPackage.name}
                </h3>
                <p className="text-center text-gray-600">
                  Price: ${(selectedPackage.price / 100).toFixed(2)}
                </p>
  
                {/* Stripe Card Element with proper styling */}
                <div className="p-3 border rounded-lg">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#32325d",
                          "::placeholder": { color: "#a0aec0" },
                        },
                        invalid: { color: "#e53e3e" },
                      },
                    }}
                  />
                </div>
  
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
  
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="flex-1 text-lg"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Pay & Book"}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="flex-1 text-lg"
                    onClick={async () => {
                      if (paymentIntentId) {
                        await fetch(`${API_BASE}/cancel-payment-intent`, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ paymentIntentId }),
                        });
                      }
                      onCancel(); // resets package selection
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CarouselItem>
  
            {/* Future offerings slide example (e.g. session booking UI, upsells) */}
            <CarouselItem>
              <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6 overflow-y-auto max-h-[450px]">
                <h3 className="text-xl font-semibold text-center mb-4">
                  Other Offerings
                </h3>
                <ul className="space-y-3">
                  {packages.map((pkg) => (
                    <li
                      key={pkg.id}
                      className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                    >
                      <span>{pkg.name}</span>
                      <span className="font-medium">
                        ${(pkg.price / 100).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          </CarouselContent>
  
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );

  //Refactored for Responsiveness

};

const PackageBooking: React.FC = () => {
  //Stripe and Routing
  // const stripe = useStripe();
  // const elements = useElements();
  // const navigate = useNavigate();

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
            <Elements stripe={stripePromise}>
              <CheckoutForm
                selectedPackage={selectedPackage}
                onPaymentSuccess={handlePaymentSuccess}
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