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
 var maxDepth = function(root) {
    if(root === null) return 0;
    let counter = 1;

    (function repeat(node, tempCount){
        counter = Math.max(counter, tempCount);
        if(node.left !== null) repeat(node.left, tempCount + 1);
        if(node.right !== null) repeat(node.right, tempCount + 1);
    })(root, 1)

    return counter;
};