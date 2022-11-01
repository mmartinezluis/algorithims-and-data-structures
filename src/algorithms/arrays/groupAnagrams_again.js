/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let map = new Map();
    for(let str of strs) {
        let codes = new Array(26).fill(0);
        for(let char of str) {
            codes[char.charCodeAt(0) - 97] += 1;
        }
        codes = codes.join();
        map.has(codes) ? map.get(codes).push(str) : map.set(codes, [str]);
    }
    return [...map.values()];
 }

strs = ["eat","tea","tan","ate","nat","bat"]
strs = ["bdddddddddd","bbbbbbbbbbc"]
groupAnagrams(strs)