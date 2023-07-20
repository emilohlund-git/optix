import { titleCase } from "../../src";

describe("StringUtils.titleCase", () => {
  it("should convert a string to title case with lowercase letters", () => {
    const originalString = "hello, world!";
    const titleCasedString = titleCase(originalString);
    expect(titleCasedString).toEqual("Hello, World!");
  });

  it("should convert a string to title case with uppercase letters", () => {
    const originalString = "HELLO, WORLD!";
    const titleCasedString = titleCase(originalString);
    expect(titleCasedString).toEqual("Hello, World!");
  });

  it("should convert a string to title case with mixed case letters", () => {
    const originalString = "Hello, WoRLd!";
    const titleCasedString = titleCase(originalString);
    expect(titleCasedString).toEqual("Hello, World!");
  });

  it("should convert an empty string to an empty title-cased string", () => {
    const originalString = "";
    const titleCasedString = titleCase(originalString);
    expect(titleCasedString).toEqual("");
  });

  it("should convert a string with single-character words to title case", () => {
    const originalString = "a b c d e";
    const titleCasedString = titleCase(originalString);
    expect(titleCasedString).toEqual("A B C D E");
  });
});
