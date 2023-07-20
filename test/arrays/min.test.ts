import { minArray } from '../../src';

describe('minArray', () => {
  it('should return the min value of all numbers in the array', () => {
    expect(minArray([1, 2, 3])).toBe(1);
    expect(minArray([-1, 0, 1])).toBe(-1);
    expect(minArray([5, 10, 15, 20])).toBe(5);
  });

  it('should return 0 for an empty array', () => {
    expect(minArray([])).toBe(0);
  });
});