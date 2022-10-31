/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let map = {};
    let max = 0;
    for(let right=0; right < s.length; right++) {
        if(map[s[right] === undefined]) {
            map[s[right]] = right;
        } else {
            left = Math.max(map[s[right]+1, left]);
            map[s[right]] = right;
        }
        max = Math.max(max, right - left);
    }
    return max;
 }