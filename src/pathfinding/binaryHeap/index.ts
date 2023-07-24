/**
 * @class BinaryHeap
 * 
 * A binary heap (priority queue) implementation.
 * The heap is a binary tree with the property that the value of each node
 * is greater than or equal to the values of its children (for a max heap).
 * This implementation uses a comparison function to determine the heap order.
 */
export class BinaryHeap<T> {
  private heap: T[];
  private compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.heap = [];
    this.compare = compare;
  }

  /**
   * @public
   * @function size
   * 
   * Get the number of elements in the binary heap.
   *
   * @returns {number} - The number of elements in the binary heap.
   */
  public size(): number {
    return this.heap.length;
  }

  /**
   * @public
   * @function isEmpty
   * 
   * Check if the binary heap is empty.
   *
   * @returns {boolean} - Returns true if the binary heap is empty, false otherwise.
   */
  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  /**
   * @public
   * @function insert
   * 
   * Insert an element into the binary heap.
   *
   * @param {T} item - The element to be inserted.
   * @returns {void}
   */
  public insert(item: T): void {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  /**
   * @public
   * @function extractMin
   * 
   * Extract the minimum element (top element) from the binary heap.
   *
   * @returns {T | undefined} - The minimum element, or undefined if the heap is empty.
   */
  public extractMin(): T | undefined {
    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last!;
      this.sinkDown(0);
    }

    return min;
  }

  /**
   * @public
   * @function update
   * 
   * Update the value of an element in the binary heap.
   * After updating, the heap property is maintained.
   *
   * @param {number} index - The index of the element to be updated.
   * @param {T} item - The new value of the element.
   * @returns {void}
   */
  public update(index: number, item: T): void {
    this.heap[index] = item;
    this.bubbleUp(index);
    this.sinkDown(index);
  }

  /**
   * @public
   * @function findIndex
   * 
   * Find the index of an element in the binary heap.
   *
   * @param {T} item - The element to find in the heap.
   * @returns {number} - The index of the element in the heap, or -1 if the element is not found.
   */
  public findIndex(item: T): number {
    for (let i = 0; i < this.heap.length; i++) {
      if (this.heap[i] === item) {
        return i;
      }
    }
    return -1;
  }

  private bubbleUp(index: number): void {
    const current = this.heap[index];

    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      const parent = this.heap[parentIndex];

      if (this.compare(current, parent) >= 0) {
        break;
      }

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = current;
  }

  private sinkDown(index: number): void {
    const current = this.heap[index];
    const length = this.heap.length;

    while (true) {
      let childIndex = (index << 1) + 1;
      if (childIndex >= length) {
        break;
      }

      let child = this.heap[childIndex];
      const rightChildIndex = childIndex + 1;

      if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], child) < 0) {
        childIndex = rightChildIndex;
        child = this.heap[childIndex];
      }

      if (this.compare(child, current) >= 0) {
        break;
      }

      this.heap[index] = child;
      index = childIndex;
    }

    this.heap[index] = current;
  }
}
