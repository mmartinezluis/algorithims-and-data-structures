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
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    longestPath(root);
    return diameter
}

function longestPath(node) {
    if(!node) return 0;
    const leftPath = longestPath(node.left);
    const rightPath = longestPath(node.right);

    diameter = Math.max(diameter, leftPath + rightPath);
    return 1 + Math.max(leftPath, rightPath);
}


var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    let counter = 0;
    let branchCounter = 0;
    (function repeat(node, tempCount) {
        counter = Math.max(counter, tempCount)
        if(node.left !== null && node.right !== null) {
            branchCounter = Math.max(nodeMaxDepth(node.left) + nodeMaxDepth(node.right), branchCounter);
        }
        if(node.left) repeat(node.left, tempCount + 1);
        if(node.right) repeat(node.right, tempCount + 1);
    })(root, 0)
    return Math.max(counter, branchCounter);
};


function nodeMaxDepth(node) {
    let counter = 1;
     (function recursive(node, tempCount){
        counter = Math.max(counter, tempCount);
        if(node.left) recursive(node.left, tempCount + 1);
        if(node.right) recursive(node.right, tempCount + 1);
     })(node, counter)
     return counter;
}
function nodeMaxDepth(node) {
    if(!node) return 0;
    return 1 + Math.max(nodeMaxDepth(node.left), nodeMaxDepth(node.rigth))
}