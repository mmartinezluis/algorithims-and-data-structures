/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// Iterative solution
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
};

// Recursive solution; new array
var reverseString = function (s, arr = []) {
  if (s.length === 1) {
    console.log(arr);
    return arr;
  }
  arr.push(s.pop());
  return reverseString(s, arr);
};

// Recursive solution
var reverseString = function (s) {
  if (s.length === 1) return s[0];
  return [...reverseString(s.slice(1)), s[0]];
};

let s = ["h", "e", "l", "l", "o"];
reverseString(s);

// Recursive solution
var reverseString = function (s) {
  helper(s, 0, s.length - 1);
};

function helper(arr, l, r) {
  if (l >= r) return;
  [arr[l], arr[r]] = [arr[l], arr[r]];
  helper(arr, l + 1, r - 1);
}
