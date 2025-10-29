import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Our Company</h1>
      <p className="text-lg text-gray-600 mb-8">
        Building innovative solutions for tomorrow.
      </p>
      <Link
        href="/blog"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Visit Our Blog
      </Link>
    </main>
  );
}
