// /**
//  * @param {string} s
//  * @return {number}
//  */
 var lengthOfLongestSubstringTwoDistinct = function(s) {
    let currentString = [];
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

        currentString.push(s[i]);
        uniqueCharacters.set(s[i], i+1);
        highestLength = Math.max(highestLength, currentString.length - deleteAt)
    }    
    return highestLength;
};