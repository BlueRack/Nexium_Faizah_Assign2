'use client';
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("summaryData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <p className="text-white text-center mt-10">Loading summary...</p>;

  return (
    <div className="max-w-2xl mx-auto space-y-4 p-6 text-white">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
        {data.title}
      </h1>

      <p className="text-sm text-gray-400">🔗 Source: {data.url}</p>

      <h2 className="text-xl font-semibold text-pink-400 mt-6">📄 AI Summary:</h2>
      <p className="bg-white/5 p-4 rounded-md border border-fuchsia-600">{data.summary}</p>

      <h2 className="text-xl font-semibold text-purple-400 mt-6">🌐 Urdu Translation:</h2>
      <p className="bg-white/5 p-4 rounded-md border border-purple-600">{data.urdu}</p>

      <a href="/" className="inline-block mt-6 px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 transition text-white">
        🔙 Go Back
      </a>
    </div>
  );
}
