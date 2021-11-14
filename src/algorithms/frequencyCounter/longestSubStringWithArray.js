function lengthOfLongestSubstring(str) {
    let currentString = [];
    let longestSubstring = 0;

    for(let i=0; i < str.length; i++) {

        const currentCharacterPosition = currentString.indexOf(str[i])
        if(currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }
        currentString.push(str[i]);
        longestSubstring = Math.max(longestSubstring, currentString.length)
    }
    return longestSubstring;
}

let string = "g"
lengthOfLongestSubstring(string)