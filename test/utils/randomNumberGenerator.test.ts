import { InternalUtils } from "../../src";

describe('InternalUtils.RNG', () => {
  test('should generate a random integer within the specified range', () => {
    const min = 0;
    const max = 100;

    const randomInteger = InternalUtils.RNG.integer(min, max);

    expect(randomInteger).toBeGreaterThanOrEqual(min);
    expect(randomInteger).toBeLessThanOrEqual(max);
  });

  test('should generate different random integers for different calls with the same range', () => {
    const min = 0;
    const max = 100;

    const randomInteger1 = InternalUtils.RNG.integer(min, max);
    const randomInteger2 = InternalUtils.RNG.integer(min, max);

    expect(randomInteger1).not.toEqual(randomInteger2);
  });

  test('should generate a random floating-point number within the specified range', () => {
    const min = 0.5;
    const max = 1.5;

    const randomFloat = InternalUtils.RNG.float(min, max);

    expect(randomFloat).toBeGreaterThanOrEqual(min);
    expect(randomFloat).toBeLessThanOrEqual(max);
  });

  test('should generate different random floating-point numbers for different calls with the same range', () => {
    const min = 0.5;
    const max = 1.5;

    const randomFloat1 = InternalUtils.RNG.float(min, max);
    const randomFloat2 = InternalUtils.RNG.float(min, max);

    expect(randomFloat1).not.toEqual(randomFloat2);
  });

  test('should pick a random element from the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const randomElement = InternalUtils.RNG.element(array);

    expect(array).toContain(randomElement);
  });

  test('should pick different random elements for different calls with the same array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const randomElement1 = InternalUtils.RNG.element(array);
    const randomElement2 = InternalUtils.RNG.element(array);

    expect(randomElement1).not.toEqual(randomElement2);
  });

  test('should generate a valid UUID', () => {
    const uuid = InternalUtils.RNG.UUID();
    expect(typeof uuid).toBe('string');
    expect(uuid).toMatch(/^\w{8}-\w{4}-4\w{3}-[89ab]\w{3}-\w{12}$/); // Check if UUID matches the pattern.
  });

  test('should generate different UUIDs for different calls', () => {
    const uuid1 = InternalUtils.RNG.UUID();
    const uuid2 = InternalUtils.RNG.UUID();
    expect(uuid1).not.toEqual(uuid2);
  });

  test("should generate a random coordinate within the specified range", () => {
    const minX = 0;
    const maxX = 100;
    const minY = -50;
    const maxY = 50;

    const coordinate = InternalUtils.RNG.coordinates(minX, maxX, minY, maxY);

    expect(coordinate).toHaveProperty("x");
    expect(coordinate.x).toBeGreaterThanOrEqual(minX);
    expect(coordinate.x).toBeLessThanOrEqual(maxX);

    expect(coordinate).toHaveProperty("y");
    expect(coordinate.y).toBeGreaterThanOrEqual(minY);
    expect(coordinate.y).toBeLessThanOrEqual(maxY);
  });

  test("should generate different coordinates for different calls", () => {
    const minX = 0;
    const maxX = 100;
    const minY = -50;
    const maxY = 50;

    const coordinate1 = InternalUtils.RNG.coordinates(minX, maxX, minY, maxY);
    const coordinate2 = InternalUtils.RNG.coordinates(minX, maxX, minY, maxY);

    expect(coordinate1).not.toEqual(coordinate2);
  });
})