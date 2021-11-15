
// 82% faster; 39% less memory
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let highestLength = 0;
    let uniqueCharacters = new Map();
    let deleteAt = 0;
    if(k === 0) return 0;
    for(let i =0; i < s.length; i++) {
        if(!uniqueCharacters.has(s[i]) && uniqueCharacters.size === k){
            let toBeDeleted = [...uniqueCharacters].sort((a,b) => a[1] - b[1])   // Sort the entries of the map by value ascending
            deleteAt = toBeDeleted[0][1]                                            // retrieve the value of the character witht the lowest value in the map
            uniqueCharacters.delete(toBeDeleted[0][0]);                         // remove the entry that has the lowest value
        }
        uniqueCharacters.set(s[i], i+1);
        highestLength = Math.max(highestLength, i+1 - (deleteAt))
    }    
    return highestLength;  
};