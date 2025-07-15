// app/summaries/[id]/page.tsx
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function SummaryDetailPage({ params }: Props) {
  const { data, error } = await supabase
    .from("summaries")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !data) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8 bg-white/5 backdrop-blur p-8 rounded-2xl border border-fuchsia-700 shadow-2xl">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
          {data.title}
        </h1>

        <div className="text-sm text-gray-300 text-center">
          🔗{" "}
          <a
            href={data.url}
            target="_blank"
            className="underline hover:text-fuchsia-400 transition"
          >
            {data.url}
          </a>
        </div>

        <h2 className="text-xl font-semibold text-pink-400 mt-6">📄 AI Summary:</h2>
        <p className="bg-white/10 text-white p-4 rounded-lg border border-fuchsia-600 leading-relaxed shadow-inner">
          {data.summary}
        </p>

        <h2 className="text-xl font-semibold text-purple-400 mt-6">🌐 Urdu Translation:</h2>
        <p className="bg-white/10 text-white p-4 rounded-lg border border-purple-600 leading-relaxed shadow-inner font-urdu">
          {data.urdu}
        </p>

        <div className="text-center">
          <Link
            href="/summaries"
            className="inline-block mt-6 px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 transition text-white"
          >
            🔙 Back to Summaries
          </Link>
        </div>
      </div>
    </div>
  );
}
