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

var numberOfSteps = function (num) {
  if (num === 0) return 0;

  if (num % 2 === 0) {
    const steps = numberOfSteps(num / 2);
    return 1 + steps;
  } else {
    const steps = numberOfSteps(num - 1);
    return 1 + steps;
  }
};

numberOfSteps(14);
