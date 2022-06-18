/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let hashOne = {};
    let hashTwo = {};
    for(let i=0; i < s.length; i++){
        const letterOne = s[i];
        const letterTwo = t[i];
        hashOne[letterOne] = ++hashOne[letterOne] || 1;
        hashTwo[letterTwo] = ++hashTwo[letterTwo] || 1;
    }
    let current = Object.keys(hashOne);
    for(let i=0; i < Object.keys(hashOne).length; i++){
        if(hashOne[current[i]] !== hashTwo[current[i]]) return false;
    }
    return true;
};