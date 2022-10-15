/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let count = {};
    let ans = 0;
    let i = 0;
    let max_frequency = 0;
    for(let j=0; j < s.length; j++) {
        count[s[j]] = ++count[s[j]] || 1;
        max_frequency = Math.max(max_frequency, count[s[j]]);

        if(((j - i + 1) - max_frequency) > k) {
            count[s[i]] -= 1;
            i += 1;
        }
        ans = Math.max(ans, j - i + 1);
    }
    return ans;
};









