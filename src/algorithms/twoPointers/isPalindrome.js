/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    if(string.length <= 1) return true;
    let i = 0;
    let j = string.length - 1;
    while(i <= j) {
        if(string[i] !== string[j]) return false;
        i+=1;
        j-=1;
    }
    return true;
};