/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    let current = root;
    let leftBranch = [];
    let rightBranch = [];
    let result = [];
    
    function traverse(node){
        result.push(node);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        return result;
    }
    
    if(current){
        if(current.left) leftBranch = traverse(current.left);
        result = [];
        if(current.right) rightBranch = traverse(current.right);
        current.left = null;
    }
    
    leftBranch.forEach(node => {
        node.left = null
        current.right = node;
        current = current.right;
    })
    rightBranch.forEach(node => {
        node.left = null;
        current.right = node;
        current = current.right;
    })

};

// To do:
// Further: flatten the tree in place with constant space complexity.