/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
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
        
        const string = counter.toString();
        
        if(map.has(string)){
            // map.set(string, [...map.get(string), word])
            map.get(string).push(word)
        } else {
            map.set(string, [word])
        }
        counter = new Array(26).fill(0)
    }
    
    return [...map.values()]
};

