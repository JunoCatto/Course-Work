import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <p>
          This is the dashboard. Nothing to see, go <Link href="/">home</Link>.
        </p>
      </div>
    </main>
  );
}
