/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const bluePrint = [...Array(26)].map(() => []);
  for (let i = 0; i < s.length; i++) {
    bluePrint[s.charCodeAt(i) - 97].push(i);
  }

  let lastIndex = -1;
  let count = 0;
  let pointer;
  for (let word of words) {
    const lastPosition = new Map();
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const index = word.charCodeAt(i) - 97;
      if (
        !bluePrint[index].length ||
        bluePrint[index][word.length - 1] <= lastIndex
      )
        break;
      pointer = lastPosition.has(letter) ? lastPosition.get(letter) : 0;
      while (bluePrint[index][pointer] < lastIndex) pointer++;
      lastIndex = bluePrint[index][pointer];
      if (i === word.length - 1) count++;
      lastPosition.set(letter, pointer);
    }
    lastIndex = -1;
  }
  console.log(count);
  return count;
};

let s = "abcde";
let words = ["a", "bb", "acd"];
numMatchingSubseq(s, words);
