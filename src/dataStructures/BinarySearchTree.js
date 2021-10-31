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

    find(value){
        if(!this.root) return undefined;
        let start = this.root;
        while(true){
            if(value === start.value) return start;
            if(value < start.value){
                if(!start.left) return undefined;
                start = start.left;
            } else {
                if(!start.right) return undefined;
                start = start.right;
            }
        }
    }

    // find(val){
    //     if(!this.root) return null;
    //     let current = this.root,
    //         found = false;
    //     while(current && !found){
    //         if(val < current.val){
    //             current = current.left;
    //         }
    //         else if(val > current.val){
    //             current= current.right;
    //         }
    //         else {
    //             found = true;
    //         }
    //     }
    //     if(!found) return false;
    //     return current;
    // }

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

    remove(value){
        const removeNode = (node, value) =>{
 //            If the first node input passed to removeNode is empty means
 //            that no tree was passed; return null; cannot remove from an empty tree
             if(!node) return null;
 //             If the current node's value matched the given value, proceed
             if(value === node.value) {
 //                 if the matching node is a leaf (no children), simply eliminate the node;
                 if(!node.left && !node.right) return null;
 //                 If the mathcing node has a right child only, return the right child; the child will replace the matching node;
                 if(!node.left) return node.right;
 //                 If the mathcing node has a left child, return the left child; the child will replace the matching node;
                 if(!node.right) return node.left;
 //                  Else if the matching node has two children, store the right subtree of the mathcing node in a variable (temp)                
                 let temp = node.right;
 //                 Iterate through the right subtre until finding the minimum value (located on the left brach)
 //                 that is, find the minimum successor of the matching node;
                 while(!temp.left){
                     temp = temp.left;
                 }
 //                 Replace the value of the to be removed node with the value of the minimum successor (temp);
                 node.value = temp.value;
 //                 Update the right subtree of the to be romved node by deleting the temp node (which at this time is a repeated value in the binary search tree) 
                 node.right = removeNode(node.right, temp.value)
 //            If the current node's value is less than the desired value
             } else if(value < node.value){
 //                 Call 'removeNode' on the current node's left node; 
 //                         if this node matches the desired value: [
 //                                         if the node has no children, the node will be deleted
 //                                         If the node has one child, it will be replaced with its child;
 //                                         If the node has two children, it's VALUE will be raplaced with the value of the minimum successor; then the minimum successor will be deleted from the tree;
 //                                      ]
 //                         Otherwise (the node doesn't match with value) call 'removeNode' on the left child or the right child depending on value being less than or greater than the node's value
                 node.left = removeNode(node.left, value);
 //                  This 'node' is the root node!!! tricky!!!!! The return line is not executed until all iterations are completed 
 //                      on the left child of the root node!!!!!
                 return node;
             } else {
 //                 Same logit as for "value < node.value"
                 node.right = removeNode(node.right, value);
                 return node;
             }
         }
 //      Update the tree by calling 'removeNode' on the tree to remove the desired node with the given 'value'
         this.root = removeNode(this.root, value)
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