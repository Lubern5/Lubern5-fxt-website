"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function LoginPage({ signOut, user }: any) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Welcome, {user?.username}</h1>
      <p>You’re logged in to FXT Appliance Repair.</p>
      <button onClick={signOut} className="appointment-btn" style={{ marginTop: 16 }}>
        Sign Out
      </button>
    </main>
  );
}

export default withAuthenticator(LoginPage);
