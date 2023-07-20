import { ArrayUtils } from '../../src';

describe('sumArray', () => {
  it('should return the sum of numbers in the array', () => {
    expect(ArrayUtils.sum([1, 2, 3])).toBe(6);
    expect(ArrayUtils.sum([-1, 0, 1])).toBe(0);
    expect(ArrayUtils.sum([5, 10, 15, 20])).toBe(50);
  });

  it('should return 0 for an empty array', () => {
    expect(ArrayUtils.sum([])).toBe(0);
  });
});