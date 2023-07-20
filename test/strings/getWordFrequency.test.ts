import { StringUtils } from "../../src";

describe("StringUtils.getWordFrequency", () => {
  it("should correctly calculate word frequency for a simple sentence", () => {
    const sentence = "The quick brown fox jumps over the lazy dog";
    const expectedOutput = {
      "quick": 1,
      "brown": 1,
      "fox": 1,
      "jumps": 1,
      "over": 1,
      "the": 2,
      "lazy": 1,
      "dog": 1,
    };

    const result = StringUtils.frequency(sentence);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle multiple occurrences of the same word", () => {
    const sentence = "The quick brown fox jumps over the lazy dog. The dog is very lazy.";
    const expectedOutput = {
      "quick": 1,
      "brown": 1,
      "fox": 1,
      "jumps": 1,
      "over": 1,
      "the": 3,
      "lazy": 2,
      "dog": 2,
      "is": 1,
      "very": 1,
    };

    const result = StringUtils.frequency(sentence);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty input string", () => {
    const sentence = "";
    const expectedOutput = {};

    const result = StringUtils.frequency(sentence);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle input string with only whitespaces", () => {
    const sentence = "   ";
    const expectedOutput = {};

    const result = StringUtils.frequency(sentence);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle input string with special characters", () => {
    const sentence = "Hello, world! Hello, world!";
    const expectedOutput = {
      "hello": 2,
      "world": 2,
    };

    const result = StringUtils.frequency(sentence);
    expect(result).toEqual(expectedOutput);
  });
});
