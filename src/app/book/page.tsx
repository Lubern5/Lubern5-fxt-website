"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { post } from "aws-amplify/api"; // ✅ Correct import for REST calls
import { useState } from "react";

function BookPage({ user }: any) {
  const [service, setService] = useState("Washer Repair");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");

    try {
      // ✅ Correct Amplify REST call
      await post({
        apiName: "fxtApi",
        path: "/appointments",
        options: {
          body: {
            service,
            date,
            userEmail: user?.attributes?.email || user?.username,
          },
        },
      }).response;

      setStatus("saved");
      setDate("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      setStatus("error");
    }
  };

  return (
    <main style={{ padding: 24, maxWidth: 560 }}>
      <h1>Book an Appointment</h1>
      <form onSubmit={submit} style={{ display: "grid", gap: 12, marginTop: 12 }}>
        <label>
          Service
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option>Washer Repair</option>
            <option>Dryer Repair</option>
            <option>Oven & Stove Repair</option>
            <option>Refrigerator Repair</option>
            <option>Dishwasher Repair</option>
          </select>
        </label>

        <label>
          Preferred Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <button
          className="appointment-btn"
          type="submit"
          disabled={status === "saving"}
        >
          {status === "saving" ? "Booking..." : "Book Appointment"}
        </button>

        {status === "saved" && <p>✅ Appointment booked!</p>}
        {status === "error" && <p>❌ Something went wrong.</p>}
      </form>
    </main>
  );
}

export default withAuthenticator(BookPage);
