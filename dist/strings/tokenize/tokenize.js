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
    var _a;
    const words = (_a = sentence.match(/[A-Za-z0-9]+/g)) !== null && _a !== void 0 ? _a : [];
    return words;
}
exports.tokenizeSentence = tokenizeSentence;
//# sourceMappingURL=tokenize.js.map