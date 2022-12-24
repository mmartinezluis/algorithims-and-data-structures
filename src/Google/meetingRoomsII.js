/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  intervals = intervals.sort((a, b) => {
    if (a[0] - b[0] < 0) return -1;
    if (a[0] - b[0] > 0) return 1;
    return 0;
  });
  let heap = new MinBinaryHeap();
  let count = 0;
  let available_at = new Map();
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    if (available_at.get(current[0])) {
      available_at.set(current[0], available_at.get(current[0] - 1));
    } else if (i === 0 || intervals[i - 1][1] > intervals[i][0]) {
      count++;
    }
    available_at.has(current[1])
      ? available_at.set(current[1], available_at.get(current[1]) + 1)
      : available_at.set(current[1], 1);
  }
  return count;
};

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  add(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      const node = this.values[index];
      const parentIndex = Math.floor((index - 1) / 2);
      if (node.key > this.values[parentIndex].key) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extractMin() {
    const target = this.values[0].key;
    this.values[0].freq--;
    if (!this.values[0].freq) {
      const end = this.values.pop();
      if (this.values.length) {
        this.values[0] = end;
        this.bubbleDown();
      }
    }
    return target;
  }

  bubbleDown() {
    let index = 0;
    while (index < this.values.length) {
      let swapIndex;
      const node = this.values[index];
      const childIndex = 2 * index + 1;
      const child1 = this.values[childIndex];
      const child2 = this.values[childIndex + 1];
      if (child1 && node.key > child1.key) swapIndex = childIndex;
      if (child2 && child2.key < child1.key && node.key > child2.key)
        swapIndex = childIndex + 1;
      if (!swapIndex) break;
      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
}
