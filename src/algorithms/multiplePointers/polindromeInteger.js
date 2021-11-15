var isPalindrome = function(x) {
    if(x < 0) return false;
    let temp = x.toString();
    let n = temp.length-1;
    for(let i=0; i < n/2; i++) {
        if(temp[i] !== temp[n-i]) return false;
    }
    return true;
};