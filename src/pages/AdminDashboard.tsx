import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Load API base from environment variable
const API_BASE = import.meta.env.VITE_API_BASE as string;

interface Purchase {
  id: string;
  userEmail: string;
  packageName: string;
  amount: number;
  createdAt: string;
}

interface Session {
  id: string;
  userEmail: string;
  packageName: string;
  sessionDate: string;
  createdAt: string;
}

interface Intake {
  _id: string;
  name: string;
  email: string;
  phone: string;
  services: string;
  tier: string;
  questions: string;
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  //Stripe
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  //Form Intake
  const [submissions, setSubmissions] = useState<Intake[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Helper
        const fetchWithAuth = async (url: string) => {
          const res = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              "x-admin-api-key": import.meta.env.VITE_ADMIN_API_KEY || "",
            },
          });
          if (!res.ok) {
            const text = await res.text();
            throw new Error(`Request to ${url} failed: ${res.status} ${text}`);
          }
          return res.json();
        }
        //Helper

        //Fetch all endpoints in parallel
         
        const [purchases, sessions, submissions] = await Promise.all([
          fetchWithAuth(`${API_BASE}/admin/purchases`),
          fetchWithAuth(`${API_BASE}/admin/sessions`),
          fetchWithAuth(`${API_BASE}/admin/intakes`),
        ]);

        setPurchases(purchases);
        setSessions(sessions);
        setSubmissions(submissions);
        
      } catch (err) {
        console.error("Error fetching admin data:", err);
        setError(err.message || "Failed to fetch admin data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading admin data...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  //Refactored for responsiveness
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Admin Dashboard
        </h2>
        <span>
          <h3 className="text-2xl font-semibold mb-4">Intake Form Entries</h3>
            <ul>
            {submissions.map((s) => (
              <li key={s._id} className="border-b py-2">
                <p><strong>{s.name}</strong> — {s.email}</p>
                <p>{s.services} ({s.tier})</p>
              </li>
            ))}
          </ul>
        </span>
        {/* Carousel Wrapper */}
        <Carousel className="w-full">
          <CarouselContent>
            {/* Purchases Table Slide */}
            <CarouselItem>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4">Purchased Packages</h3>
                <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[400px] border rounded-lg">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                      <tr>
                        <th className="px-4 py-2 border text-sm sm:text-base">User Email</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Package</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Amount ($)</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchases.map((p) => (
                        <tr key={p.id} className="text-center hover:bg-gray-50">
                          <td className="px-4 py-2 border break-words">{p.userEmail}</td>
                          <td className="px-4 py-2 border">{p.packageName}</td>
                          <td className="px-4 py-2 border">{(p.amount / 100).toFixed(2)}</td>
                          <td className="px-4 py-2 border">
                            {new Date(p.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CarouselItem>
  
            {/* Sessions Table Slide */}
            <CarouselItem>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4">Booked Sessions</h3>
                <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[400px] border rounded-lg">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                      <tr>
                        <th className="px-4 py-2 border text-sm sm:text-base">User Email</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Package</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Session Date</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Booked At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map((s) => (
                        <tr key={s.id} className="text-center hover:bg-gray-50">
                          <td className="px-4 py-2 border break-words">{s.userEmail}</td>
                          <td className="px-4 py-2 border">{s.packageName}</td>
                          <td className="px-4 py-2 border">
                            {new Date(s.sessionDate).toLocaleString()}
                          </td>
                          <td className="px-4 py-2 border">
                            {new Date(s.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
  
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
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
    </section>
  );
  
  
};

export default AdminDashboard;
