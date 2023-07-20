import { StringUtils } from "../../src";

describe('StringUtils.containsWhitespace', () => {
  test('should return true', () => {
    expect(StringUtils.containsWhitespace(' ')).toBe(true);
  });

  test('should be false', () => {
    expect(StringUtils.containsWhitespace('testing')).toBe(false);
  });
});