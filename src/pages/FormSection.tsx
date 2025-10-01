import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE as string;

interface IntakeForm {
  _id: string;
  name: string;
  email: string;
  phone: string;
  services: string;
  tier: string;
  questions: string;
}

const FormSection: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IntakeForm>({
    _id: "",
    name: "",
    email: "",
    phone: "",
    services: "",
    tier: "",
    questions: "",
  });

  const [submissions, setSubmissions] = useState<IntakeForm[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/admin/intakes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        // Handle backend error (non-200 responses)
        const errorText = await response.text();
        console.error("Server error:", errorText);
        setErrorMessage("Something went wrong. Please try again later.");
        return;
      }

      const saved = await response.json();
      setSubmissions([...submissions, saved]); // update UI
      setFormData({_id: "", name: "", email: "", phone: "", services: "", tier: "", questions: "" });
      navigate("/confirmation-page");
    } catch (err) {
      console.error("Error submitting intake form:", err);
    }
  };

  // Fetch existing submissions
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_BASE}/admin/all-intakes`, {
        headers: {
          "x-admin-api-key": import.meta.env.VITE_ADMIN_API_KEY || "",
        },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch intakes: ${res.statusText}`);
      }

      const data = await res.json();
      setSubmissions(data);
    };
    fetchData();
  }, []);

  if (errorMessage) return <p style={{ color: "red" }}>{errorMessage}</p>;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Client Intake
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>

        <Card className="max-w-4xl mx-auto shadow-soft hover:shadow-warm transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 text-lg leading-relaxed">
            <input
                type="text"
                name="_id"
                placeholder="Please enter an ID code in the format of 00#. Ex. 002"
                value={formData._id}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="What is your name?"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="What is your email?"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="What is your phone number?"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <input
                type="text"
                name="services"
                placeholder="What services do you need?"
                value={formData.services}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              {/* added */}
              {/* <input
                type="datetime-local"
                value={formData.day}
                onChange={(e) => setSessionDate(e.target.value)}
              /> */}
              {/* added */}
              <select
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select a tier...</option>
                <option value="basic">Supporting</option>
                <option value="standard">Sustaining</option>
                <option value="premium">Impact</option>
              </select>
              <textarea
                name="questions"
                placeholder="Do you have any initial questions for me?"
                value={formData.questions}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Submit
              </Button>
            </form>
             <hr />
            <br />
            <div className="mb-8 p-8 md:p-12 text-center">
            
              <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80"
              >
                  Back to Home
              </Link>
            
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FormSection;
