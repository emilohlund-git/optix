import { sortArray } from '../../src/arrays';

describe('sortArray', () => {
  it('should return a sorted copy of an array of numbers in ascending order', () => {
    expect(sortArray([1, 3, 2, -1])).toEqual([-1, 1, 2, 3]);
    expect(sortArray([-1, 0, 1])).toEqual([-1, 0, 1]);
    expect(sortArray([5, 20, 10, 15])).toEqual([5, 10, 15, 20]);
  });

  it('should return a sorted copy of an array of strings in ascending order', () => {
    expect(sortArray(['adam', 'ceasar', 'borat', 'august'])).toEqual(['adam', 'august', 'borat', 'ceasar']);
    expect(sortArray(['banana', 'orange', 'peach', 'coconut'])).toEqual(['banana', 'coconut', 'orange', 'peach']);
  });

  it('should return a sorted copy of an array of numbers in descending order', () => {
    expect(sortArray([1, 3, 2, -1], 'DESC')).toEqual([3, 2, 1, -1]);
    expect(sortArray([-1, 0, 1], 'DESC')).toEqual([1, 0, -1]);
    expect(sortArray([5, 20, 10, 15], 'DESC')).toEqual([20, 15, 10, 5]);
  });

  it('should return a sorted copy of an array of strings in descending order', () => {
    expect(sortArray(['adam', 'ceasar', 'borat', 'august'], 'DESC')).toEqual(['ceasar', 'borat', 'august', 'adam']);
    expect(sortArray(['banana', 'orange', 'peach', 'coconut'], 'DESC')).toEqual(['peach', 'orange', 'coconut', 'banana']);
  });

  it('should return an empty array', () => {
    expect(sortArray([])).toEqual([]);
  });
});