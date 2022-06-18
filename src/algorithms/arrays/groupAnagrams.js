groupAnagrams = function(strs) {
    if(strs.length === 1) return [strs[0]];
    
    let result = [],
        currentBucket = [],
        index = 0
    
    while(strs.length){
        const comparator = strs[0]
        ++index;
        if(isAnagram(comparator, strs[index])){
            currentBucket.push(strs.splice(index,1)[0]);
            index--;
        }
        
        if(index == strs.length-1){
            if(currentBucket.length) {
                currentBucket.push(strs.splice(0,1)[0]);
                result.push(currentBucket);
            } else {
                result.push(strs.splice(0,1));
            }
            if(strs.length === 1) result.push(strs.splice(0,1));
            index = 0;
            currentBucket = [];
        }
    }
    // console.log(result)
    return result;
};

function isAnagram(first, second){
    let mapping1 = {};
    for(let i=0; i < first.length; i++){
        mapping1[first[i]] = ++first[i] || 1;
    }
    
    let mapping2 = {};
    for(let i=0; i < second.length; i++){
        mapping2[second[i]] = ++second[i] || 1;
    }
    
    for(let key in mapping1){
        if(mapping1[key] !== mapping2[key]) return false
    }
    
    return true;
}


strs = ["eat","tea","tan","ate","nat","bat"]

groupAnagrams(strs)

// let hi = () => console.log("hello")
// hi()
