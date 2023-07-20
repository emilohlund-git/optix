import { ArrayUtils } from "../../src";

describe("shuffleArray", () => {
  it("should shuffle an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const shuffledNumbers = ArrayUtils.shuffle(numbers);

    expect(shuffledNumbers).toHaveLength(numbers.length);
    expect(shuffledNumbers).toContain(1);
    expect(shuffledNumbers).toContain(2);
    expect(shuffledNumbers).toContain(3);
    expect(shuffledNumbers).toContain(4);
    expect(shuffledNumbers).toContain(5);

    expect(shuffledNumbers).not.toEqual(numbers);
  });

  it("should shuffle an array of strings", () => {
    const names = ["Alice", "Bob", "Charlie", "David"];
    const shuffledNames = ArrayUtils.shuffle(names);

    expect(shuffledNames).toHaveLength(names.length);
    expect(shuffledNames).toContain("Alice");
    expect(shuffledNames).toContain("Bob");
    expect(shuffledNames).toContain("Charlie");
    expect(shuffledNames).toContain("David");
  });

  it("should not modify the original array", () => {
    const originalArray = [10, 20, 30, 40, 50];
    const copiedArray = [...originalArray];
    ArrayUtils.shuffle(originalArray);

    expect(originalArray).toEqual(copiedArray);
  });
});