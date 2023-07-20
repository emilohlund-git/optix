import { capitalizeFirstLetter } from "../../src";

describe("capitalizeFirstLetter", () => {
  test('should capitalize the first letter of the word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  test('should return empty string if input is empty', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});