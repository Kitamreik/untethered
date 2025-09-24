import React, { useState, useEffect } from "react";
const API_BASE = import.meta.env.VITE_API_BASE as string;

interface IntakeForm {
  name: string;
  email: string;
  phone: string;
  services: string;
  tier: string;
  questions: string;
}

interface FormDashboardProps {
  submissions: IntakeForm[];
}

const FormDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<IntakeForm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/intakes`);
        const data = await res.json();
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching intake data:", err);
      }
    };
    fetchData();
  }, []);
    return (
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Inquiry Form Dashboard
            </h2>
    
            {/* Intake Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Intake Inquiries</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Phone Number</th>
                      <th className="px-4 py-2 border">Services Required</th>
                      <th className="px-4 py-2 border">Tier Selection</th>
                      <th className="px-4 py-2 border">Initial Questions</th>
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
            </div>
          </div>
        </section>
      );
}

export default FormDashboard;