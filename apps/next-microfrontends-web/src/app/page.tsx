import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <main className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-gray-900">Welcome Home</h1>
        <p className="text-xl text-gray-600">
          This is the main web application homepage
        </p>
        <div className="flex gap-4">
          <Link
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            href="/admin"
          >
            Go to Admin
          </Link>
        </div>
      </main>
    </div>
  );
}
