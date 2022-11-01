/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sArray = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; i++) {
        sArray[s.charCodeAt(i) - 97]++;
        sArray[t.charCodeAt(i) - 97]--;
    }
    for(let j=0; j < 26; j++) {
        if(sArray[j] !== 0) return false;
    }
    return true;
 }