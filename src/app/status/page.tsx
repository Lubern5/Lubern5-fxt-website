export const dynamic = "force-dynamic"; // ensure SSR on each request

export default async function StatusPage() {
  // Example SSR dynamic content (no auth needed here)
  const now = new Date().toLocaleString();

  // (Optional) If you add a public /health route, you could:
  // const res = await fetch(process.env.NEXT_PUBLIC_HEALTH_URL!, { cache: "no-store" });
  // const health = await res.json();

  return (
    <main style={{ padding: 24 }}>
      <h1>System Status</h1>
      <p>Server-rendered at: <strong>{now}</strong></p>
      {/* <pre>{JSON.stringify(health, null, 2)}</pre> */}
    </main>
  );
}
