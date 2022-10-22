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
        if(sCount[s[i]] !== undefined && count[s[i]] > sCount[s[i]]) return ""
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
        if(copyCount[s[i]] !== undefined && count[s[i]] > copyCount[s[i]]) return ""
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
    // console.log(i, j, s.slice(i,j+1))
    // console.log(k, m, s.slice(k,m+1))
    return j - i < m - k ? s.slice(i, j+1) : s.slice(k, m+1)
};


var minWindow = function(s, t) {
    let tCount = {};
    let total = 0;
    let s_total = 0;
    let sCount  = {};
    for(let char of t ) {
        tCount[char] = ++tCount[char] || 1;
        total++;
    }
    [i, j] = [0, 0];
    [x, y] = [0, Number.MAX_SAFE_INTEGER];
    while(i < s.length && j < s.length) {
        if(tCount[s[j]] !== undefined) {
            sCount[s[j]] = ++sCount[s[j]] || 1;
            s_total++;
            if(sCount[s[j]] === tCount[s[j]] && total === s_total) {
                if(y - x > j - i) {
                    y = j
                    x = i
                } 
            } else if(sCount[s[j]] > tCount[s[j]] || s_total > total) {
                sCount[s[i]] -= 1;
                i++;
                s_total--;
                while(tCount[s[i]] === undefined) {
                    i++;
                }
                if(sCount[s[i]] === tCount[s[i]] && total === s_total) {
                    if(y - x > j - i) {
                        y = j
                        x = i
                    } 
                }
            }  
        }
        j++;
        if(tCount[s[i]] === undefined) i++;
    }
    console.log(x, y)
    y === Number.MAX_SAFE_INTEGER ? "" : console.log(s.slice(x, y+1));
};

// Solution
var minWindow = function(s, t) {
    let tCount = {};
    let total = 0;
    let s_total = 0;
    let sCount  = {};
    for(let char of t ) {
        tCount[char] = ++tCount[char] || 1;
        // total++;
    }
    total = Object.keys(tCount).length
    let i = 0;
    [x, y] = [0, Number.MAX_SAFE_INTEGER];
    for(let j=0; j < s.length; j++) {
        if(tCount[s[j]] !== undefined) {
            sCount[s[j]] = ++sCount[s[j]] || 1;
            if(sCount[s[j]] === tCount[s[j]]) {
                s_total++;
            }
            while(s_total === total) {
                if(y - x > j - i) {
                    y = j
                    x = i
                } 
                if(tCount[s[i]] ) {
                    sCount[s[i]] -= 1;
                    if(sCount[s[i]] < tCount[s[i]]) s_total--;
                }   
                i++;
            }
        }
    }
    // console.log(x,y)
    return y === Number.MAX_SAFE_INTEGER ? "" : s.slice(x, y+1)
}

let s = "ADOBECODEBANC" 
let t = "ABC"
// s="a"
// t="a"
s="cabwefgewcwaefgcf"
t="cae"
// s="ab"
// t="b"
minWindow(s,t)