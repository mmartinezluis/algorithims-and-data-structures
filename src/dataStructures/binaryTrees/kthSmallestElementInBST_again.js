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
 * @param {number} k
 * @return {number}
 */
// Strategy: run a dfs in-order traversal algorithm;
// return the k - 1 element from traversal output
 var kthSmallest = function(root, k) {
    let result = [];
    function dfs(node) {
        if(node.left) dfs(node.left);
        result.push(node.val);
        if(node.right) dfs(node.right);
    }
    dfs(root);
    return result[k-1];
    
 }