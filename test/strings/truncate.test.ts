import { StringUtils } from "../../src";

describe("truncateString", () => {
  it("should truncate a string longer than the maximum length and append an ellipsis", () => {
    const originalString = "This is a long sentence that needs to be truncated.";
    const maxLength = 20;
    const truncatedString = StringUtils.truncate(originalString, maxLength);
    const expectedOutput = "This is a long sente...";
    expect(truncatedString).toEqual(expectedOutput);
  });

  it("should not truncate a string shorter than the maximum length", () => {
    const originalString = "Short sentence.";
    const maxLength = 20;
    const truncatedString = StringUtils.truncate(originalString, maxLength);
    expect(truncatedString).toEqual(originalString);
  });

  it("should not append an ellipsis if the string length is equal to the maximum length", () => {
    const originalString = "Exactly 10";
    const maxLength = 10;
    const truncatedString = StringUtils.truncate(originalString, maxLength);
    expect(truncatedString).toEqual(originalString);
  });

  it("should handle empty input string", () => {
    const originalString = "";
    const maxLength = 5;
    const truncatedString = StringUtils.truncate(originalString, maxLength);
    expect(truncatedString).toEqual("");
  });

  it("should handle maximum length of 0", () => {
    const originalString = "Any text";
    const maxLength = 0;
    const truncatedString = StringUtils.truncate(originalString, maxLength);
    expect(truncatedString).toEqual("...");
  });

  it("should handle negative maximum length", () => {
    const originalString = "Any text";
    const maxLength = -5;
    const truncatedString = StringUtils.truncate(originalString, maxLength);
    expect(truncatedString).toEqual("Any...");
  });
});
