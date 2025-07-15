'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function BlogForm() {
  const [url, setUrl] = useState("");

  return (
    <div className="max-w-2xl mx-auto space-y-4 p-6 bg-black/20 backdrop-blur rounded-xl shadow-lg border border-blue-800">
      <h2 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
        🌐 Enter Blog URL
      </h2>
      <p className="text-sm text-gray-300">
        Provide a valid blog URL to start the AI-powered analysis
      </p>
      <div className="flex gap-2 items-center">
        <Input
          className="bg-black/40 border border-blue-500 text-white placeholder:text-gray-400"
          placeholder="https://example.com/blog-post"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Sparkles className="h-4 w-4 mr-2" /> Analyze
        </Button>
      </div>
    </div>
  );
}
