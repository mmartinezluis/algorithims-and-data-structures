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
 * @return {boolean}
 */
// Strategy: run a dfs in-order traversal and 
// excecute conditional statements
 var isValidBST = function(root) {
    function dfs(node) {
        if(!node) return true;
        if(node.left && node.left.val >= node.val) return false;
        if(node.right && node.right.val <= node.val) return false;
        return dfs(node.left) && dfs(node.right);
    }
    return dfs(root);
 }