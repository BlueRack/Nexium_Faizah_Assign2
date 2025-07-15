'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function BlogForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleAnalyse = async () => {
    if (!url) return;

    setLoading(true);
    setStatus("🧠 Analysing website...");

    try {
      const res = await fetch('/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch content");
      }

      setStatus("📄 Extracting content...");
      const data = await res.json();

      console.log("Scraped Text:", data.blogText);

      // Simulate upcoming steps (summary + translation)
      setTimeout(() => {
        setStatus("📝 Generating summary...");
        setTimeout(() => {
          setStatus("🌐 Translating to Urdu...");
          setTimeout(() => {
            setStatus("✅ Done!");
          }, 1500);
        }, 1500);
      }, 1000);
    } catch (err) {
      console.error("Error during analysis:", err);
      setStatus("❌ Error during analysis");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 p-6 bg-white/5 backdrop-blur rounded-xl shadow-lg border border-purple-800">
      <h2 className="text-xl font-semibold text-pink-400 flex items-center gap-2">
        🔗 Enter Blog URL
      </h2>
      <p className="text-sm text-gray-300">
        Paste the link to a blog post you want summarised
      </p>

      <div className="flex gap-2 items-center">
        <Input
          className="bg-white/10 border border-pink-500 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-pink-400"
          placeholder="https://example.com/blog-post"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 text-white hover:brightness-110 transition-all shadow-md"
          onClick={handleAnalyse}
          disabled={loading}
        >
          {loading ? "Processing..." : (
            <>
              <Sparkles className="h-4 w-4 mr-2" /> Analyse
            </>
          )}
        </Button>
      </div>

      {status && (
        <p className="text-sm mt-4 text-fuchsia-400">
          {status}
        </p>
      )}
    </div>
  );
}
