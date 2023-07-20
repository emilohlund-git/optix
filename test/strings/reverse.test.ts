import { StringUtils } from "../../src";

describe("StringUtils.reverseString", () => {
  it("should reverse a string with lowercase letters", () => {
    const originalString = "hello, world!";
    const reversedString = StringUtils.reverse(originalString);
    expect(reversedString).toEqual("!dlrow ,olleh");
  });

  it("should reverse a string with uppercase letters", () => {
    const originalString = "HELLO, WORLD!";
    const reversedString = StringUtils.reverse(originalString);
    expect(reversedString).toEqual("!DLROW ,OLLEH");
  });

  it("should reverse a string with mixed case letters", () => {
    const originalString = "Hello, WoRLd!";
    const reversedString = StringUtils.reverse(originalString);
    expect(reversedString).toEqual("!dLRoW ,olleH");
  });

  it("should reverse an empty string", () => {
    const originalString = "";
    const reversedString = StringUtils.reverse(originalString);
    expect(reversedString).toEqual("");
  });

  it("should reverse a single-character string", () => {
    const originalString = "a";
    const reversedString = StringUtils.reverse(originalString);
    expect(reversedString).toEqual("a");
  });
});
