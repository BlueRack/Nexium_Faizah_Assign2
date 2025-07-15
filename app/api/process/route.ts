import { scrapeTextFromURL } from "@/lib/scraper";
import { generateSummary } from "@/lib/summariser";
import { translateToUrdu } from "@/lib/translator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    const rawText = await scrapeTextFromURL(url);

    const summary = generateSummary(rawText);
    const urdu = translateToUrdu(summary);
    const title = rawText.split('\n')[0].slice(0, 100); // fake title

    return NextResponse.json({ url, title, summary, urdu });
  } catch (err: any) {
    console.error("❌ API Error:", err.message);
    return NextResponse.json({ error: "Failed to process blog" }, { status: 500 });
  }
}
