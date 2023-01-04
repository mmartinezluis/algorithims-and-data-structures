/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const bluePrint = new Array(26).fill([]);
  for (let i = 0; i < s.length; i++) {
    bluePrint[s.charCodeAt(i) - 97].push(i);
  }

  let lastIndex = -1;
  let count = 0;
  for (let word of words) {
    const copy = [...bluePrint];
    for (let i = 0; i < word.length; i++) {
      const indeces = copy[word.charCodeAt(i) - 97];
      if (!indeces.length || indeces[word.length - 1] < lastIndex) break;
      while (indeces[0] < lastIndex) indeces.shift();
      lastIndex = indeces.shift();
      if (i === word.length - 1) count++;
    }
  }
  return count;
};
