/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  return recursive(num);

  function recursive(num) {
    if (num === 0) return count;
    count++;
    if (num % 2 === 0) return recursive(num / 2);
    return recursive(num - 1);
  }
};
