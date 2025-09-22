import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const API_BASE = import.meta.env.VITE_API_BASE as string;

interface IntakeForm {
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
    name: "",
    email: "",
    phone: "",
    services: "",
    tier: "",
    questions: "",
  });

  const [submissions, setSubmissions] = useState<IntakeForm[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sessionDate, setSessionDate] = useState<string | null>(null);

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
      const response = await fetch(`${API_BASE}/admin/intake`, {
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
      setFormData({ name: "", email: "", phone: "", services: "", tier: "", questions: "" });
      navigate("/confirmation");
    } catch (err) {
      console.error("Error submitting intake form:", err);
    }
  };

  // Fetch existing submissions
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_BASE}/intake`);
      const data = await res.json();
      setSubmissions(data);
    };
    fetchData();
  }, []);

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
          </CardContent>
        </Card>

        {/* Table of submissions */}
        {submissions.length > 0 && (
          <div className="mt-12 overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Services</th>
                  <th className="px-4 py-2 border">Tier</th>
                  <th className="px-4 py-2 border">Questions</th>
                </tr>
              </thead>
              <tbody>
              {submissions.map((entry) => (
                <tr key={entry.email} className="text-center">
                  <td className="px-4 py-2 border">{entry.name}</td>
                  <td className="px-4 py-2 border">{entry.email}</td>
                  <td className="px-4 py-2 border">{entry.phone}</td>
                  <td className="px-4 py-2 border">{entry.services}</td>
                  <td className="px-4 py-2 border">{entry.tier}</td>
                  <td className="px-4 py-2 border">{entry.questions}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default FormSection;
