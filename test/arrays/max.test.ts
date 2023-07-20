import { ArrayUtils } from '../../src';

describe('maxArray', () => {
  it('should return the max value of all numbers in the array', () => {
    expect(ArrayUtils.max([1, 2, 3])).toBe(3);
    expect(ArrayUtils.max([-1, 0, 1])).toBe(1);
    expect(ArrayUtils.max([5, 10, 15, 20])).toBe(20);
  });

  it('should return 0 for an empty array', () => {
    expect(ArrayUtils.max([])).toBe(0);
  });
});