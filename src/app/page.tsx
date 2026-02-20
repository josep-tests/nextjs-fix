export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Next.js Vuln Test App</h1>
      <p className="mt-4 text-lg text-gray-600">
        Running next@14.1.0 — vulnerable to CVE-2024-34351 (SSRF in Server
        Actions)
      </p>
    </main>
  );
}
