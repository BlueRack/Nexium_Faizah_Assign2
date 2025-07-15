// lib/translator.ts

const dictionary: Record<string, string> = {
  "React": "ریئیکٹ",
  "blog": "بلاگ",
  "summary": "خلاصہ",
  "article": "مضمون",
  "important": "اہم",
  "guide": "رہنما",
  "how to": "کیسے کریں",
  "tips": "مشورے",
  "you should": "آپ کو چاہیے",
};

export function translateToUrdu(text: string): string {
  let translated = text;

  for (const [english, urdu] of Object.entries(dictionary)) {
    const regex = new RegExp(english, "gi");
    translated = translated.replace(regex, urdu);
  }

  return translated;
}
