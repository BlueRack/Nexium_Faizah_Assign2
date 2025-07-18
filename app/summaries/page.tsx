'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

type SummaryItem = {
  id: string;
  url: string;
  title: string;
  summary: string;
  urdu: string;
  created_at: string;
};

export default function SummariesPage() {
  const [summaries, setSummaries] = useState<SummaryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchSummaries() {
      const res = await fetch('/api/summaries');
      const data = await res.json();
      setSummaries(data);
      setLoading(false);
    }
    fetchSummaries();
  }, []);

  const filtered = summaries.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.summary.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-white text-center mt-10">Loading summaries...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
          All Blog Summaries
        </h1>

        <input
          type="text"
          placeholder="🔍 Search summaries..."
          className="w-full mb-8 p-3 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-6">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400">No summaries found.</p>
          ) : (
            filtered.map((item) => (
              <div key={item.id} className="p-6 bg-white/10 border border-pink-600 rounded-xl text-white shadow-md">
                <h2 className="text-xl font-semibold text-pink-400">{item.title}</h2>
                <p className="text-sm text-gray-400 mb-2">
                  🔗 <a href={item.url} target="_blank" className="underline">{item.url}</a>
                </p>
                <p className="text-white">{item.summary}</p>
                <details className="mt-2 cursor-pointer">
                  <summary className="text-fuchsia-400">🔍 View Urdu</summary>
                  <p className="text-white mt-2">{item.urdu}</p>
                </details>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-white rounded-full hover:brightness-110 transition inline-block text-center"
          >
            🔙 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}