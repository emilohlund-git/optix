import { tokenizeSentence } from "../tokenize";

/**
   * @namespace StringUtils
   * 
   * Find the frequency distribution of words in a sentence.
   *
   * @param {string} sentence - The input sentence to process.
   * @returns {Record<string, number>} An object containing the frequency distribution of words.
   *
   * @example
   * const sentence = "The quick brown fox jumps over the lazy dog";
   * const frequencyDistribution = StringUtils.getWordFrequency(sentence);
   * console.log(frequencyDistribution);
   * // Output: { ""quick": 1, "brown": 1, "fox": 1, "jumps": 1, "over": 1, "the": 2, "lazy": 1, "dog": 1 }
   */
export function getWordFrequency(sentence: string): Record<string, number> {
  const words = tokenizeSentence(sentence);
  const frequencyDistribution: Record<string, number> = {};

  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    frequencyDistribution[lowercaseWord] = frequencyDistribution[lowercaseWord]
      ? frequencyDistribution[lowercaseWord] + 1
      : 1;
  }

  return frequencyDistribution;
}