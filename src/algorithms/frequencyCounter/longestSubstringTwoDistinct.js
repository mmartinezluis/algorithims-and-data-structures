// /**
//  * @param {string} s
//  * @return {number}
//  */

// 72% faster; 24% less memory
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let highestLength = 0;
    let uniqueCharacters = new Map();
    let deleteAt =0;
    for(let i =0; i < s.length; i++) {
        if(!uniqueCharacters.has(s[i]) && uniqueCharacters.size === 2){
            let toBeDeleted; 
            let firstKey = Array.from(uniqueCharacters.keys())[0];
            let secondKey = Array.from(uniqueCharacters.keys())[1];

            toBeDeleted = firstKey !== s[i-1] ? firstKey : secondKey
            deleteAt = uniqueCharacters.get(toBeDeleted);            
            uniqueCharacters.delete(toBeDeleted);
        }
        uniqueCharacters.set(s[i], i+1);
        highestLength = Math.max(highestLength, i+1 - deleteAt)
    }    
    return highestLength;
};