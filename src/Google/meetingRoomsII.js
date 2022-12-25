/**
 * @param {number[][]} intervals
 * @return {number}
 */
// Strategy:
// Sort the intervals by starting time;
// If two subsequent intervals overlap, it means will need an additional room
// But before checking for overlapping, we need to check whether there is a
// room already available from a previous interval.
// To keep track of available rooms, we use a hasmap, setting the interval
// end time as the key, and the end time frequency as the value;
// To keep the order of the earliest available time we use a min heap;
// When the frequency of an end time is depleted, we remove the min value
// from the min heap
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
    const min = heap.values[0];
    if (min <= current[0]) {
      available_at.set(min, available_at.get(min) - 1);
      if (!available_at.get(min)) heap.extractMin();
    } else if (i === 0 || intervals[i - 1][1] > intervals[i][0]) {
      count++;
    }
    if (available_at.has(current[1])) {
      available_at.set(current[1], available_at.get(current[1]) + 1);
    } else {
      available_at.set(current[1], 1);
      heap.add(current[1]);
    }
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
      if (node > this.values[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extractMin() {
    const target = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return target;
  }

  bubbleDown() {
    let index = 0;
    while (index < this.values.length - 1) {
      let swapIndex;
      const node = this.values[index];
      const childIndex = 2 * index + 1;
      const child1 = this.values[childIndex];
      const child2 = this.values[childIndex + 1];
      if (child1 && node > child1) swapIndex = childIndex;
      if (child2 && child2 < child1 && node > child2)
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
