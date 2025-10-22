"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { get } from "aws-amplify/api";
import { useEffect, useState } from "react";

type Appointment = {
  appointmentId: string;
  userEmail: string;
  service: string;
  date: string;
  status: string;
};

function Dashboard({ signOut, user }: any) {
  const [appts, setAppts] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // ✅ Amplify REST API call
        const { body } = await get({
          apiName: "fxtApi",
          path: "/appointments",
        }).response;

        // ✅ Safely parse and type the JSON response
        const data = ((await body.json()) as { items?: Appointment[] }) || {
          items: [],
        };

        setAppts(data.items ?? []);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.username}</p>

      <button
        onClick={signOut}
        className="appointment-btn"
        style={{
          margin: "12px 0 24px",
          backgroundColor: "#b71c1c",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "10px 18px",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Sign Out
      </button>

      {loading ? (
        <p>Loading your appointments…</p>
      ) : appts.length ? (
        <ul>
          {appts.map((a) => (
            <li
              key={a.appointmentId}
              style={{
                marginBottom: "10px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "6px",
              }}
            >
              <strong>{a.service}</strong> — {a.date} —{" "}
              <em>{a.status}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments yet.</p>
      )}
    </main>
  );
}

export default withAuthenticator(Dashboard);
