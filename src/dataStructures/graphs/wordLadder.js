/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// Strategy: initialize an empty queue and push the begin word, and
// a token string that will signal level order traversals (that is, one level down the tree at a time).
// The givens of the problem could be visualized as a tree,
// which head is the begin word, and a path or paths that may or many not
// contain the endword. The goal is to traverse the tree until finding the endword,
// if at all present. 
// Construct a hash containing the words list as keys and "true" boolean as values;
// Construct an array containing the lower case English  alphabet;
// While queue is not empty, dequeue, then perform permutations on deque word
// changing the letter at index i from "a" to "z" (26 permutations at index i)
// , where 0 <= i <= deque word.length;
// compare permutation to endword or pass it to hash map to see if there is a match;
// if permutations is equal to endword, we are done; if match from map, push match to queue, and delete match from map.
// When processing the token, if queue is not empty, push another token;
// Increase the final counter variable to return by 1 after during toekn processing

// Thsi oslution works, but it is non-optimal
 var ladderLength = function(beginWord, endWord, wordList) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const token = "TOKEN"
    let queue = [beginWord, token];
    let sequenceCount = 1;
    let map = {};
    for(let word of wordList) {
        map[word] = true;
    }

    if(!map[endWord]) return 0;
    delete map[beginWord];
    let permutation;

    while(queue.length) {
        const current = queue.shift();
        if(current === token) {
            sequenceCount += 1;
            if(queue.length) {
                queue.push(token);
            }
            continue;
        }
        
        const splitted = new Array(current.length).fill(0).map((el, index) => current[index]);

        for(let i = 0; i < splitted.length; i++) {
            permutation = splitted.slice();
            for(let j =0; j < alphabet.length; j++) {
                permutation[i] = alphabet[j];
                const permuString = permutation.join('');
                if(permuString !== current) {
                    if(permuString === endWord) {
                        sequenceCount += 1;
                        console.log(sequenceCount)
                        return sequenceCount;
                    } else if(map[permuString]) {
                        queue.push(permuString);
                        delete map[permuString];
                    }
                }
            }
        }
    }
    console.log(sequenceCount)
    return 0;
};


var ladderLength = function(beginWord, endWord, wordList) {
    let map = {};
    const normalLength = beginWord.length;
    let visited = {};
    wordList.push(beginWord);
    let isInList = false;
    for(let word of wordList) {
        for(let i = 0; i < normalLength; i++) {
            const pattern = word.slice(-normalLength, i) + "*" + word.slice(i+1);
            map[pattern] ? map[pattern].push(word) : map[pattern] = [word];
        }
        if(word === endWord) isInList = true;
    }
    if(!isInList) return 0;
    let levelCount = 1;
    let queue = [beginWord];
    visited[beginWord] = true;

    while(queue.length) {
        const levelNodes = queue.length;
        for(let i=0; i < levelNodes; i++) {
            const current = queue.shift();
            if(current === endWord) {
                return levelCount;
            }
            for(let j =0; j < normalLength; j++) {
                const pattern = current.slice(-normalLength, j) + "*" + current.slice(j+1);
                for(let neighbor of map[pattern]) {
                    if(!visited[neighbor]) {
                        queue.push(neighbor);
                        visited[neighbor] = true;
                    }
                }
            }
        }
        levelCount += 1;
    }
    
    return 0;
}


let begin_word = "hit"
let end_word = "cog"
let word_list = ["hot","dot","dog","lot","log","cog"]

// begin_word = "lost"
// end_word = "miss"
// word_list= ["most","mist","miss","lost","fist","fish"]

// begin_word = "leet"
// end_word = "code"
// word_list = ["lest","leet","lose","code","lode","robe","lost"]

ladderLength(begin_word, end_word, word_list);