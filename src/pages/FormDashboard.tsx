import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
const FormDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<IntakeForm[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/admin/all-intakes`, {
          headers: {
            "x-admin-api-key": import.meta.env.VITE_ADMIN_API_KEY || "",
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Failed to fetch intakes: ${res.status} ${text}`);
        }

        const data: IntakeForm[] = await res.json();
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching intake data:", err);
        setError(err.message || "Failed to fetch intake data");
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (id: string) => {
    setError(null);
    setSuccessMsg(null);

    if (!confirm("Are you sure you want to delete this entry?")) return;

    try {
      const res = await fetch(`${API_BASE}/admin/all-intakes/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-api-key": import.meta.env.VITE_ADMIN_API_KEY || "",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Delete failed: ${res.status} ${text}`);
      }

      // Remove deleted entry from state
      setSubmissions((prev) => prev.filter((submissions) => submissions._id !== id));
      setSuccessMsg("Entry deleted successfully.");
    } catch (err) {
      console.error("Delete error:", err);
      setError(err.message || "Failed to delete entry");
    }
  };

  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Inquiry Form Dashboard
        </h2>

        {successMsg && (
          <div className="mb-4 text-green-700 bg-green-50 p-3 rounded">{successMsg}</div>
        )}

        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Services</th>
                  <th className="px-4 py-2 border">Tier</th>
                  <th className="px-4 py-2 border">Questions</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((entry) => (
                  <tr key={entry._id} className="text-center">
                    <td className="px-4 py-2 border">{entry.name}</td>
                    <td className="px-4 py-2 border">{entry.email}</td>
                    <td className="px-4 py-2 border">{entry.phone ?? "-"}</td>
                    <td className="px-4 py-2 border">{entry.services ?? "-"}</td>
                    <td className="px-4 py-2 border">{entry.tier ?? "-"}</td>
                    <td className="px-4 py-2 border">{entry.questions ?? "-"}</td>
                    <td className="px-4 py-2 border">
                      <Button
                        type="button"
                        variant="cta"
                        size="sm"
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(entry._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FormDashboard;