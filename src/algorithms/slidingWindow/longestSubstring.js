/**
 * @param {string} s
 * @return {number}
 */
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