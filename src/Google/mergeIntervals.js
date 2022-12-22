/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => {
    if (a[0] - b[0] < 0) return -1;
    if (a[0] - b[0] >= 0) return 1;
    return 0;
  });
  let answer = [];
  intervals.forEach((interval) => {
    const last = answer.length - 1;
    if (!answer.length || answer[last][1] < interval[0]) {
      answer.push(interval);
    } else {
      answer[last][1] = Math.max(answer[last][1], interval[1]);
    }
  });
  return answer;
};
