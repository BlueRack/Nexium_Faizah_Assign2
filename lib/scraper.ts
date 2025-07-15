import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeTextFromURL(url: string): Promise<string> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    const $ = cheerio.load(response.data);
    const articleText = $('article').text();
    const paragraphText = $('p').text();

    const text = articleText.length > 300 ? articleText : paragraphText;

    return text.replace(/\s+/g, ' ').trim();
  } catch (error: any) {
    console.error("❌ Scraper Error:", error.message);
    throw new Error("Failed to scrape content from URL");
  }
}
