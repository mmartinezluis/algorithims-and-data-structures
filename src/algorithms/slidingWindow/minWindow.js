/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if(t.length > s.length) return "";
    let count = {};
    for(let char of t) {
        count[char] = ++count[char] || 1;
    }
    let sCount = {};
    for(let char of s) {
        sCount[char] = ++sCount[char] || 1;
    }
    let i = 0;
    let j = s.length-1;
    let copyCount = {...sCount};
    while(i <= j) {
        // starting from the left
        if(sCount[s[i]] > count[s[i]]) {
            sCount[s[i]] -= 1;
            i++;
        } else if(count[s[i]] === undefined) {
            i++;
        } else if(sCount[s[j]] > count[s[j]]) {
            sCount[s[j]] -= 1;
            j--;
        } else if(count[s[j]] === undefined) {
            j--;
        } else break;
    }
    let k=0;;
    let m=s.length-1;
    while(i <= j) {
        // starting from the right
        if(copyCount[s[m]] > count[s[m]]) {
            copyCount[s[m]] -= 1;
            m--;
        } else if(count[s[m]] === undefined) {
            m--;
        } else if(copyCount[s[k]] > count[s[k]]) {
            copyCount[s[k]] -= 1;
            k++;
        } else if(count[s[k]] === undefined) {
            k++;
        } else break;
    }
    console.log(i, j, s.slice(i,j+1))
    console.log(k, m, s.slice(k,m+1))
    return j - i < m - k ? s.slice(i, j+1) : s.slice(k, m+1)
};

let s = "ADOBECODEBANC" 
let t = "ABC"
// s="a"
// t="a"
minWindow(s,t)