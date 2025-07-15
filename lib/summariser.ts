export function generateSummary(text: string): string {
  const sentences = text.split('.').map(s => s.trim()).filter(Boolean);

  const keywordScores = ["ai", "react", "blog", "tips", "guide", "important", "you should", "how to"];

  const scored = sentences.map(sentence => {
    const score = keywordScores.reduce((acc, keyword) =>
      acc + (sentence.toLowerCase().includes(keyword) ? 1 : 0), 0
    );
    return { sentence, score };
  });

  const topSentences = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.sentence);

  return topSentences.join('. ') + '.';
}
