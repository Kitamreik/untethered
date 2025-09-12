import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
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

const packages: Package[] = [
  { id: "pkg1", name: "Single Session", price: 5000 },
  { id: "pkg2", name: "5 Sessions Package", price: 22500 },
  { id: "pkg3", name: "10 Sessions Package", price: 40000 },
];

const CheckoutForm: React.FC<{
  selectedPackage: Package;
  onPaymentSuccess: () => void;
  onCancel: () => void;
}> = ({ selectedPackage, onPaymentSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement)! },
      });

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

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
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
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};


const PackageBooking: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

        {/* Package selection */}
        {!selectedPackage && (
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 border rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition text-center"
                onClick={() => setSelectedPackage(pkg)}
              >
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-gray-600">
                  ${(pkg.price / 100).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
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
