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

    find(val){
        if(!this.root) return null;
        let current = this.root,
            found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            }
            else if(val > current.val){
                current= current.right;
            }
            else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }

    // Breadth-first-search; collects all nodes horizontally;
    BFS(){
        let node = this.root,
            queue = [],
            data = [];
            queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    //    Depth-first search         Preorder
    // Visit the node first, then visit the left side, then the left side and the right side of left brahch
    // then visit the right branch, then the left side of the brahch, then the right side
    DFSPreorder(){
        let node = this.root;
        let result = [];
        function traverse(node){
            result.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(node)
        return result;
    }

// Start on left branch: Visit the bottom left leaf, then the right leaf, then the parent;
// When done with left branch, do the same with right branch;
// Finally add the root of the tree
    DFSPostOrder(){
        let node = this.root;
        let result = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right);
            result.push(node.val);
        }
        traverse(node);
        return result;
    }

    // Start on left branch: visit the bottom left leaf; then the parent, then the right leaf
    // when done with left branch, push the root node;
    // proceed with right branch as with the left branch
    DFSInOrder(){
        let node = this.root,
            data = [];
        function traverse(node){
            node.left && traverse(node.left);
            data.push(node);
            node.right && traverse(node.right);
        }
        traverse(node);
        return data;
    }
}



// tree;
// tree.DFS()
// tree.BFS()

//          Binary Tree
//             10
//      5              13
//  2       7      11      16

// tree.find(13);
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