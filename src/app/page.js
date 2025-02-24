"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser({ email: currentUser });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Auth</h1>
      <p className="text-lg text-gray-700">A simple authentication system.</p>

      {user ? (
        <>
          <p className="mt-4 text-green-600 font-semibold">
            Logged in as {user.email}
          </p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded transition hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Link href="/pages/dashboard" className="mt-4 text-blue-500 hover:underline">
            Go to Dashboard →
          </Link>
        </>
      ) : (
        <div className="mt-6 flex space-x-4">
          <Link href="/pages/login" className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-600">
            Login
          </Link>
          <Link href="/pages/signup" className="bg-green-500 text-white px-4 py-2 rounded transition hover:bg-green-600">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}