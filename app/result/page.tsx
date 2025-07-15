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

  if (!data) return (
    <p className="text-white text-center mt-10 animate-pulse">
      Loading your result...
    </p>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8 bg-white/5 backdrop-blur p-8 rounded-2xl border border-fuchsia-700 shadow-2xl">
        
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
          🧠 AI Blog Summary
        </h1>

        <div className="text-sm text-gray-300 text-center">
          🔗 <a href={data.url} target="_blank" className="underline hover:text-fuchsia-400 transition">{data.url}</a>
        </div>

        <h2 className="text-2xl font-semibold text-pink-400">📄 AI Summary:</h2>
        <p className="text-white bg-white/10 p-4 rounded-lg border border-fuchsia-600 shadow-inner leading-relaxed">
          {data.summary}
        </p>

        <h2 className="text-2xl font-semibold text-purple-400">🌐 Urdu Translation:</h2>
        <p className="text-white bg-white/10 p-4 rounded-lg border border-purple-600 shadow-inner leading-relaxed font-urdu">
          {data.urdu}
        </p>

        <div className="text-center mt-6">
          <a href="/" className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 text-white font-medium rounded-full hover:brightness-110 transition">
            🔙 Go Back
          </a>
        </div>
      </div>
    </div>
  );
}
