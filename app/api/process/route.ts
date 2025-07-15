import { scrapeTextFromURL } from "@/lib/scraper";
import { generateSummary } from "@/lib/summariser";
import { translateToUrdu } from "@/lib/translator";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    console.log("📥 Received URL:", url);
    const rawText = await scrapeTextFromURL(url);
    console.log("✅ Scraped text length:", rawText.length);

    const summary = generateSummary(rawText);
    const urdu = await translateToUrdu(summary); // ✅ fixed: added await

    const title = rawText.split('\n')[0]?.slice(0, 100) || "Untitled Blog";

    // Save to Supabase
    const { error } = await supabase.from("summaries").insert([
      { url, title, summary, urdu }
    ]);
    if (error) throw error;

    return NextResponse.json({ url, title, summary, urdu });

  } catch (err: unknown) {
    let message = "Unknown error";
    if (err instanceof Error) message = err.message;
    console.error("❌ API Error:", message);
    return NextResponse.json({ error: "Failed to process blog" }, { status: 500 });
  }
}
