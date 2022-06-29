/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    if(strs.length === 1) return [[strs[0]]]  
    
    let result = []
    let currentBucket = []
    let index = 0
    
    while(strs.length){
        const comparator = strs[0];
        index++;
        if(isAnagram(comparator, strs[index])){
            currentBucket.push(strs.splice(index,1)[0]);
            index--; 
        }
        if(index === strs.length-1){
            if(currentBucket.length) {
                currentBucket.push(strs.splice(0,1)[0]);
                result.push(currentBucket);
            } else {
                result.push(strs.splice(0,1));
            }
            if(strs.length === 1) {
                result.push(strs.splice(0,1));
            }
            index = 0;
            currentBucket = [];
        }
    }
    return result;
};


function isAnagram(first, second){
    if(first.length !== second.length) return false;
    let mapping1 = {};
    let mapping2 = {};
    for(let i=0; i < first.length; i++){
        mapping1[first[i]] = ++mapping1[first[i]] || 1;
        mapping2[second[i]] = ++mapping2[second[i]] || 1;
    }

    for(let key in mapping1){
        if(mapping1[key] !== mapping2[key]) return false
    }
    
    return true;
}

groupAnagrams = function(strs) {
if(strs.length === 0) return [];
if(strs.length === 1 && strs[0].length === 0) return [[""]]

const alphabet = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,'m':12,'n':13,'o':14,'p':15,'q':16,'r':17,'s':18,'t':19,'u':20,'v':21,'w':22,'x':23,'y':24,'z':25}
let counter = new Array(26).fill(0)
let map = new Map();

let word;

for(let i=0; i<strs.length; i++){
    
    word = strs[i];

    for(let j=0; j < word.length; j++){
        counter[alphabet[word[j]]]+= 1;
    }
    
    const string = counter.join("");
    
    if(map.get(string)){
        map.set(string, [...map.get(string), word])
    } else {
        map.set(string, [word])
    }
    counter = new Array(26).fill(0)
}

return [...map.values()]
}