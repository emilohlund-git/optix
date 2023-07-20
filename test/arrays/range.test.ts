import { rangeArray } from '../../src';

describe('rangeArray', () => {
  it('should return all values between the set min and max values', () => {
    expect(rangeArray(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return [0] for the range 0 to 0', () => {
    expect(rangeArray(0, 0)).toEqual([0]);
  });
});