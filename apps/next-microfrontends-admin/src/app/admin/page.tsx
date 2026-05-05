import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-lg text-gray-600">Welcome to the admin dashboard</p>
        <div className="flex gap-4">
          <Link
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            href="/"
          >
            Go to Home 13ß
          </Link>
        </div>
      </main>
    </div>
  );
}
