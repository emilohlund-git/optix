import { ArrayUtils } from "../../src";

describe('chunkArray', () => {
  it('should split the array into chunks of the specified size', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkedArray = ArrayUtils.chunk(originalArray, 3);
    expect(chunkedArray).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  it('should handle a smaller chunk size than the array length', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkedArray = ArrayUtils.chunk(originalArray, 2);
    expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('should handle a chunk size larger than the array length', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const chunkedArray = ArrayUtils.chunk(originalArray, 10);
    expect(chunkedArray).toEqual([[1, 2, 3, 4, 5]]);
  });

  it('should handle an empty array', () => {
    const originalArray: number[] = [];
    const chunkedArray = ArrayUtils.chunk(originalArray, 3);
    expect(chunkedArray).toEqual([]);
  });

  it('should throw an error if the chunk size is not a positive number', () => {
    const originalArray = [1, 2, 3, 4, 5];
    expect(() => ArrayUtils.chunk(originalArray, 0)).toThrow('Size must be a positive number.');
    expect(() => ArrayUtils.chunk(originalArray, -3)).toThrow('Size must be a positive number.');
  });
});
