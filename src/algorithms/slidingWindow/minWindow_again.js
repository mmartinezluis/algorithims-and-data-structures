/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// Strategy: fill a hash map out of the t string 
// counting the number of characters for each character;
// initialize a left pointer at index zero for s string/
// run a for loop for s string, and use loop index as right pointer
// grwo a sliding window until reaching the target from t string
// (you'll need a has map for the s string and a counter variable)
// the, while the t string condition is met, shrink the window 
// from the left.
// Done
// keep a min variable to return the indeces of min substring
 var minWindow = function(s, t) {
    let tMap = {};
    let sMap = {};
    let t_total = 0;
    let s_total = 0;
    for(let char of t) {
        if(tMap[char] === undefined) t_total++;
        tMap[char] = ++tMap[char] || 1;
    }
    let i = 0;
    let x = 0; 
    let y = Number.MAX_SAFE_INTEGER;
    for(let j=0; j < s.length; j++) {
        if(tMap[s[j]] !== undefined) {
            sMap[s[j]] = ++sMap[s[j]] || 1;
            if(sMap[s[j]] === tMap[s[j]]) {
                s_total++;
            }
        }
        // console.log(j)
        while(t_total === s_total) {
            if( y - x > j - i) {
                y=j;
                x=i;
            }
            if(tMap[s[i]] !== undefined) {
                sMap[s[i]] -= 1;
                if(sMap[s[i]] + 1 === tMap[s[i]]) {
                    s_total--;
                }
            }
            i++;
        }
    }
    // console.log(s_total)
    console.log(y === Number.MAX_SAFE_INTEGER ? "" : s.slice(x, y+1))
    return y === Number.MAX_SAFE_INTEGER ? "" : s.slice(x, y+1)
 }

let s = "ADOBECODEBANC" 
let t = "ABC"
s="a"
t="a"
// s="cabwefgewcwaefgcf"
// t="cae"
// s="ab"
// t="b"
minWindow(s,t)