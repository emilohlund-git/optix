import { ArrayUtils } from '../../src';

describe('minArray', () => {
  it('should return the min value of all numbers in the array', () => {
    expect(ArrayUtils.min([1, 2, 3])).toBe(1);
    expect(ArrayUtils.min([-1, 0, 1])).toBe(-1);
    expect(ArrayUtils.min([5, 10, 15, 20])).toBe(5);
  });

  it('should return 0 for an empty array', () => {
    expect(ArrayUtils.min([])).toBe(0);
  });
});