export async function translateToUrdu(text: string): Promise<string> {
  const CHUNK_SIZE = 500;
  const chunks = [];

  for (let i = 0; i < text.length; i += CHUNK_SIZE) {
    const chunk = text.slice(i, i + CHUNK_SIZE);
    const encoded = encodeURIComponent(chunk);

    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encoded}&langpair=en|ur`
    );

    if (!res.ok) throw new Error("Translation API failed");

    const data = await res.json();
    chunks.push(data.responseData.translatedText);
  }

  return chunks.join(" ");
}
