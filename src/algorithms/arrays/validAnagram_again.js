/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sArray = new Array(26).fill(0);
    let tArray = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        sArray[s.charCodeAt(i) - 96]++;
        tArray[t.charCodeAt(i) - 96]++;
    }
    for(let j=0; j < 26; j++) {
        if(sArray[j] !== tArray[j]) return false;
    }
    return true;
 }