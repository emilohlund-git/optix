"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizeSentence = void 0;
/**
   * @namespace StringUtils
   *
   * Tokenize a sentence into words.
   *
   * @param {string} sentence - The input sentence to tokenize.
   * @returns {string[]} An array of words in the sentence.
   *
   * @example
   * const sentence = "The quick brown fox jumps over the lazy dog";
   * const words = StringUtils.tokenizeSentence(sentence);
   * console.log(words);
   * // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
   */
function tokenizeSentence(sentence) {
    const words = sentence.match(/[A-Za-z0-9]+/g) ?? [];
    return words;
}
exports.tokenizeSentence = tokenizeSentence;
