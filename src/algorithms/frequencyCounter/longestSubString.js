function longestSubstring(string) {
    let start = 0;
    let seen = {}; 
    let longest = 0;
    for(let i=0; i<string.length; i++) {
        let char = string[i]
        if(seen[char]){
            start = Math.max(start, seen[char])
        }        
        longest = Math.max(longest, i - start + 1);
        seen[char] = i +1;
    }
    return longest;
}

let string = "baau"
longestSubstring(string)