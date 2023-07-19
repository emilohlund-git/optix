import { sumArray } from '../src/index';

describe('sumArray', () => {
  it('should return the sum of numbers in the array', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([-1, 0, 1])).toBe(0);
    expect(sumArray([5, 10, 15, 20])).toBe(50);
  });

  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });
});