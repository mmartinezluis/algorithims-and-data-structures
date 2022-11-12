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
 var goodNodes = function(root) {
    let count = 0;
    function dfs(node,max) {
        max = Math.max(node.val, max);
        if(node.val >= max) count++;
        if(node.left) dfs(node.left, max);
        if(node.right) dfs(node.right, max);
    }
    dfs(root, root.val);
    return count;
 }