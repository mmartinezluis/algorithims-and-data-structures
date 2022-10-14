/**
 * @param {string} s
 * @return {number}
 */
//  var lengthOfLongestSubstring = function(s) {
//     if(s.length === 0) return 0;
//     let max = 0;
//     let count = 0;
//     let seen = {};
//     let poointer = 0;
//     for(let i=0; i < s.length; i++) {
//         if(seen[s[i]]) {
//             count = 1;
//             seen = {};
//             seen[s[i]] = true;
//             continue;
//         }
//         if(!seen[s[i]]) {
//             seen[s[i]] = true;
//             count++;
//             max = Math.max(max, count);
//         }
//     }
//     console.log(max);
//     return max;
// };

var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let seen = {};
    let max = 0;
    for(let j=0; j < s.length; j++) {
        if(seen[s[j]] !== undefined) {
            i = Math.max(seen[s[j]]+1, i);
        } 
        max = Math.max(max, j - i +1);
        seen[s[j]] = j;
    }
    console.log(max)
    return max;
}
// s="tmmzuxt"
// s="tmm"
// let s = "abcabcbb";
// s= "pwwkew"
// s="bbbababb"
// s="dvddf"
// s="dgpqdtu"
// s="dgpqddtu"
s="dgpqdtud"

lengthOfLongestSubstring(s);