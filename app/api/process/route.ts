import { scrapeTextFromURL } from "@/lib/scraper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const url = body.url;

    console.log("📥 Received URL:", url);

    if (!url) {
      console.log("❌ No URL received");
      return NextResponse.json({ error: "URL missing" }, { status: 400 });
    }

    const blogText = await scrapeTextFromURL(url);
    console.log("✅ Scraped text length:", blogText.length);

    return NextResponse.json({ blogText });
  } catch (error: any) {
    console.error("🔥 API Crash:", error.message);
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}
