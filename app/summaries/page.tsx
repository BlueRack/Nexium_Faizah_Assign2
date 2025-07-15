
import Link from "next/link";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    async function fetchSummaries() {
      const res = await fetch('/api/summaries');
      const data = await res.json();
      setSummaries(data);
      setLoading(false);
    }
    fetchSummaries();
  }, []);

  if (loading) return <p className="text-white text-center mt-10">Loading summaries...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
          📚 All Blog Summaries
        </h1>

        <div className="space-y-6">
          {summaries.map((item) => (
            <div key={item.id} className="p-6 bg-white/10 border border-pink-600 rounded-xl text-white shadow-md">
              <Link href={`/summaries/${item.id}`}>
                <h2 className="text-xl font-semibold text-pink-400 hover:underline">{item.title}</h2>
              </Link>
              <p className="text-sm text-gray-400 mb-2">🔗 <a href={item.url} target="_blank" className="underline">{item.url}</a></p>
              <p className="text-white line-clamp-3">{item.summary}</p>
              <details className="mt-2 cursor-pointer">
                <summary className="text-fuchsia-400">🔍 View Urdu</summary>
                <p className="text-white mt-2">{item.urdu}</p>
              </details>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/" className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-white rounded-full hover:brightness-110 transition">
            🔙 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
