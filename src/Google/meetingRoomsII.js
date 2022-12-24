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
