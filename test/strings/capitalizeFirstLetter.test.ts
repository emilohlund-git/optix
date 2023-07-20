import { StringUtils } from "../../src";

describe("capitalizeFirstLetter", () => {
  test('should capitalize the first letter of the word', () => {
    expect(StringUtils.capitalize('hello')).toBe('Hello');
  });

  test('should return empty string if input is empty', () => {
    expect(StringUtils.capitalize('')).toBe('');
  });
});