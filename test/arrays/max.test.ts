import { maxArray } from '../../src';

describe('maxArray', () => {
  it('should return the max value of all numbers in the array', () => {
    expect(maxArray([1, 2, 3])).toBe(3);
    expect(maxArray([-1, 0, 1])).toBe(1);
    expect(maxArray([5, 10, 15, 20])).toBe(20);
  });

  it('should return 0 for an empty array', () => {
    expect(maxArray([])).toBe(0);
  });
});