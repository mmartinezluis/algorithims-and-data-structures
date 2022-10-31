/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let map = {};
    let max = 0;
    for(let right=0; right < s.length; right++) {
        if(map[s[right]] !== undefined) {
            left = Math.max( map[s[right]] + 1, left);
        }
        max = Math.max(max, right - left + 1);
        map[s[right]] = right;
    }
    console.log(map, max)
    return max;
 }

s="dgpqdtud"
s= "pwwkew"
s="abcdbah"
lengthOfLongestSubstring(s);