/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = intervals.slice().sort((a, b) => {
    if (a[0] - b[0] < 0) return -1;
    if (a[0] - b[0] >= 0) return 1;
    return 0;
  });
  let any_merge = true;
  while (any_merge) {
    let i = 1;
    let partial = [];
    let count_index = -1;
    while (i < result.length) {
      const x = result[i - 1];
      const y = result[i];
      any_merge = false;
      if (x[0] <= y[0]) {
        if (x[1] >= y[0]) {
          partial.push(combinneIntervals(x, y));
          any_merge = true;
          count_index++;
        }
      } else if (y[1] >= x[0]) {
        partial.push(combinneIntervals(y, x));
        any_merge = true;
        count_index++;
      }
      if (!any_merge) partial.push(result[i - 1]);
      i++;
    }
    result = partial;
  }
  return result;
};

function combinneIntervals(p, q) {
  return [p[0], q[1]];
}
