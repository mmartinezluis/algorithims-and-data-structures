/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Stategy: 
 var characterReplacement = function(s, k) { 
    const map = {};
    let maxFrequency = 0;
    let left=0;
    let right =0;
    let maxLength = 0;
    while(right < s.length) {
        map[s[right]] = ++map[s[right]] || 1;
        maxFrequency = Math.max(maxFrequency, map[s[right]]);
        const size = right - left + 1;
        if((size - maxFrequency) > k) {
            map[s[left]] -= 1;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1)
        right++;
    }
    console.log(maxLength);
    return maxLength;
 }

s = "pssstttt";
k=3;
characterReplacement(s,k)
