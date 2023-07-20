import { StringUtils } from "../../src";

describe("StringUtils.extractSubstringsByPattern", () => {
  it('should extract all substrings from a string that match a given pattern', () => {
    const inputString = "The quick brown fox jumps over the lazy dog";
    const pattern = /\w{2}/g;
    const expectedOutput = ["Th", "qu", "ic", "br", "ow", "fo", "ju", "mp", "ov", "er", "th", "la", "zy", "do"];

    const result = StringUtils.extract(inputString, pattern);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array when no substrings match the pattern', () => {
    const inputString = 'Hello World, I\'m ella.';
    const pattern = /[xy]{2}/g;
    const expectedOutput: string[] = [];

    const result = StringUtils.extract(inputString, pattern);
    expect(result).toEqual(expectedOutput);
  });

  it('should extract all occurrences of digits in the string', () => {
    const inputString = 'abc123def456';
    const pattern = /\d+/g;
    const expectedOutput = ['123', '456'];

    const result = StringUtils.extract(inputString, pattern);
    expect(result).toEqual(expectedOutput);
  });
});