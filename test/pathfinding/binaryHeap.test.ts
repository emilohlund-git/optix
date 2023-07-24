import { BinaryHeap } from '../../src/pathfinding/binaryHeap';

// Helper function to create a compare function for number types
function compareNumbers(a: number, b: number): number {
  return a - b;
}

describe('BinaryHeap vs Map Performance Comparison', () => {
  const numIterations = 10000; // Number of insertions and extractions for testing

  // Test BinaryHeap insertion and extraction performance
  test('BinaryHeap Insertion and Extraction', () => {
    const binaryHeap = new BinaryHeap<number>(compareNumbers);

    // Measure insertion time
    console.time('BinaryHeap Insertion');
    for (let i = 0; i < numIterations; i++) {
      binaryHeap.insert(Math.random());
    }
    console.timeEnd('BinaryHeap Insertion');

    // Measure extraction time
    console.time('BinaryHeap Extraction');
    for (let i = 0; i < numIterations; i++) {
      binaryHeap.extractMin();
    }
    console.timeEnd('BinaryHeap Extraction');
  });

  // Test Map insertion and extraction performance
  test('Map Insertion and Extraction', () => {
    const map = new Map<number, number>();

    // Measure insertion time
    console.time('Map Insertion');
    for (let i = 0; i < numIterations; i++) {
      map.set(i, Math.random());
    }
    console.timeEnd('Map Insertion');

    // Measure extraction time
    console.time('Map Extraction');
    for (let i = 0; i < numIterations; i++) {
      map.delete(i);
    }
    console.timeEnd('Map Extraction');
  });
});
