class Node {
    constructor(c){
        this.c = c;
        this.isWord = false;
        this.children ={}
    }
}


class Trie {
    constructor(){
        this.root = new Node(0);
    }    
   
    insert(word){
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let char = word[i];
            if(!curr.children[char]) curr.children[char] = new Node(char)
            curr = curr.children[char];
        }
        curr.isWord = true;
    }

    search(word) {
        let node = this.getNode(word);
        return node !== null && node.isWord;
    }

    startsWith(prefix) {
        return this.getNode(prefix) !== null;
    }


    getNode(word){
        let curr = this.root;
        for(let i =0; i< word.length; i++){
            let char = word[i];
            if(curr.children[char] === undefined) return null;
            curr = curr.children[char];
        }
        return curr;
    }

}


// let trie = new Trie;
// trie;
// trie.insert("word")
// trie.insert("wolof")
// trie.search("wolof")
// trie.startsWith("word")
