/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let start = intervals[0][0];
  let end = intervals[0][1];

  for (let i = 1; intervals.length; i++) {
    const curInterval = intervals[i];
    if (curInterval[0] <= end) {
      end = Math.max(curInterval[i], end);
    } else {
      res.push([start, end]);
    }
  }
};
