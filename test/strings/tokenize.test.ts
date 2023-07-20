import { StringUtils } from "../../src";

describe("tokenizeSentence", () => {
  it("should tokenize a sentence with letters and spaces", () => {
    const sentence = "The quick brown fox jumps over the lazy dog";
    const words = StringUtils.tokenize(sentence);
    const expectedOutput = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
    expect(words).toEqual(expectedOutput);
  });

  it("should tokenize a sentence with special characters", () => {
    const sentence = "Hello, world! How are you?";
    const words = StringUtils.tokenize(sentence);
    const expectedOutput = ["Hello", "world", "How", "are", "you"];
    expect(words).toEqual(expectedOutput);
  });

  it("should tokenize a sentence with numbers", () => {
    const sentence = "The year is 2023";
    const words = StringUtils.tokenize(sentence);
    const expectedOutput = ["The", "year", "is", "2023"];
    expect(words).toEqual(expectedOutput);
  });

  it("should tokenize an empty sentence into an empty array", () => {
    const sentence = "";
    const words = StringUtils.tokenize(sentence);
    expect(words).toEqual([]);
  });

  it("should tokenize a sentence with only spaces", () => {
    const sentence = "   ";
    const words = StringUtils.tokenize(sentence);
    expect(words).toEqual([]);
  });
});
