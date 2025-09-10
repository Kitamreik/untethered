import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Stripe public key
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

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

const CheckoutForm: React.FC<{ selectedPackage: Package; onPaymentSuccess: () => void }> = ({
  selectedPackage,
  onPaymentSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    // Call backend to create PaymentIntent
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packageId: selectedPackage.id }),
    });
    const paymentIntent = await response.json();

    const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: { card: elements.getElement(CardElement)! },
    });

    if (result.error) {
      alert(result.error.message);
      setLoading(false);
    } else if (result.paymentIntent?.status === "succeeded") {
      onPaymentSuccess();
      setLoading(false);

      // Log session in backend
      await fetch("/api/log-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId: selectedPackage.id }),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-center">{selectedPackage.name}</h3>
      <p className="text-center text-gray-600">
        Price: ${(selectedPackage.price / 100).toFixed(2)}
      </p>
      <CardElement className="p-4 border rounded-lg" />
      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full text-xl"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay & Book"}
      </Button>
    </form>
  );
};

const PackageBooking: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePaymentSuccess = () => setPaymentSuccess(true);

  const handleBookSession = async () => {
    if (!selectedDate) return;

    // Send selected session date to backend
    await fetch("/api/book-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        packageId: selectedPackage?.id,
        sessionDate: selectedDate.toISOString(),
      }),
    });

    alert("Session booked successfully!");
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

        {!selectedPackage && (
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 border rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition text-center"
                onClick={() => setSelectedPackage(pkg)}
              >
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-gray-600">${(pkg.price / 100).toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}

        {selectedPackage && !paymentSuccess && (
          <div className="mt-12">
            <Elements stripe={stripePromise}>
              <CheckoutForm selectedPackage={selectedPackage} onPaymentSuccess={handlePaymentSuccess} />
            </Elements>
          </div>
        )}

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
              Book Session
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageBooking;
