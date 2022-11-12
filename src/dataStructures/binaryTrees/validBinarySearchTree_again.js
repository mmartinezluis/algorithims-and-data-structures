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
 var isValidBST = function(root) {
    return valid(root, undefined, undefined);
    function valid(node, lowerBound, upperBound)  {
        if(!node) return true;
        if(node.val <= lowerBound || node.val >= upperBound) return false;
        return valid(node.left, lowerBound, node.val) && valid(node.right, node.val, upperBound);
    }
 }


//  dfs in-order traveral solution
var isValidBST = function(root) {
    let prev = Number.MIN_SAFE_INTEGER;
    function dfs(node) {
        if(!node) return true;
        if(!dfs(node.left)) return false;
        if(prev >= node.val) return false;
        prev = node.val;
        return dfs(node.right);
    }
    return dfs(root);
 }