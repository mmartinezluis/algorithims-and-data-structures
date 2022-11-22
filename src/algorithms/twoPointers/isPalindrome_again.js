/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s= s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let i = 0;
    let j = s.length-1;
    while(i < j) {
        if(s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
 }