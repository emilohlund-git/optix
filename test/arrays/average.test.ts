import { ArrayUtils } from '../../src';

describe('averageArray', () => {
  it('should return the average value of all numbers in the array', () => {
    expect(ArrayUtils.average([1, 2, 3])).toBe(2);
    expect(ArrayUtils.average([-1, 0, 1])).toBe(0);
    expect(ArrayUtils.average([5, 10, 15, 20])).toBe(12.5);
  });

  it('should return 0 for an empty array', () => {
    expect(ArrayUtils.average([])).toBe(0);
  });
});