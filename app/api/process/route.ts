import { scrapeTextFromURL } from "@/lib/scraper";
import { generateSummary } from "@/lib/summariser";
import { translateToUrdu } from "@/lib/translator";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    const rawText = await scrapeTextFromURL(url);

    const summary = generateSummary(rawText);
    const urdu = translateToUrdu(summary);
    const title = rawText.split('\n')[0].slice(0, 100); // fake title

    await supabase.from("summaries").insert([
      {
        url,
        title,
        summary,
        urdu,
      }
    ]);

    return NextResponse.json({ url, title, summary, urdu });
  } catch (err: unknown) {
    let message = "Unknown error";
    if (err instanceof Error) {
      message = err.message;
    }
    console.error("❌ API Error:", message);
    return NextResponse.json({ error: "Failed to process blog" }, { status: 500 });
  }
}
