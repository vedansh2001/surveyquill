"use client"; 

import { useRouter } from "next/navigation"; 

export default function Dashboard() {
  const router = useRouter();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Dashboard</h2>
      <p className="text-gray-700 mb-2">Welcome to your private space</p>

        <>
          <p className="text-green-600 font-semibold text-lg">Hello!</p>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition"
          >
            Dashboard
          </button>
        </>
    </div>
  );
}
