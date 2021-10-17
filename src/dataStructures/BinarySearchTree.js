class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(val){
        let node = new Node(val)
        if(!this.root){
          this.root= node;
          return this;  
        } 
        let current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val > current.val){
                if(current.right === null){
                    current.right = node;
                    return this;
                }
                else current = current.right;
            } 
            else if(val < current.val){
                if(current.left === null){
                    current.left = node;
                    return this;
                }
                else current = current.left;
            }
        }
    }
}
// tree;
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(14);
// tree.root.left = new Node(7);