import React, { useEffect, useState } from "react";

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

const AdminDashboard: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const purchaseRes = await fetch(`${API_BASE}/admin/purchases`);
        const sessionRes = await fetch(`${API_BASE}/admin/sessions`);

        if (!purchaseRes.ok || !sessionRes.ok) {
          throw new Error("Failed to fetch admin data");
        }

        const purchaseData = await purchaseRes.json();
        const sessionData = await sessionRes.json();

        setPurchases(purchaseData);
        setSessions(sessionData);
      } catch (err) {
        console.error("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading admin data...</p>;

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Admin Dashboard
        </h2>

        {/* Purchases Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Purchased Packages</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">User Email</th>
                  <th className="px-4 py-2 border">Package</th>
                  <th className="px-4 py-2 border">Amount ($)</th>
                  <th className="px-4 py-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((p) => (
                  <tr key={p.id} className="text-center">
                    <td className="px-4 py-2 border">{p.userEmail}</td>
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

        {/* Sessions Table */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Booked Sessions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">User Email</th>
                  <th className="px-4 py-2 border">Package</th>
                  <th className="px-4 py-2 border">Session Date</th>
                  <th className="px-4 py-2 border">Booked At</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s) => (
                  <tr key={s.id} className="text-center">
                    <td className="px-4 py-2 border">{s.userEmail}</td>
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
      </div>
    </section>
  );
};

export default AdminDashboard;
