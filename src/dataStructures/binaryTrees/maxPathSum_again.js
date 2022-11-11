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
// Incorrect; leave for analysis
 var maxPathSum = function(root) {
    if(!root) return Number.MIN_SAFE_INTEGER;
    const left = Math.max(Number.MIN_SAFE_INTEGER, maxPathSum(root.left));
    const right = Math.max(Number.MIN_SAFE_INTEGER, maxPathSum(root.right));
    const maxBranch = Math.max(left, right);
    if(!left && !right) return root.val;
    if(root.val < 0) return Math.max(root.val, maxBranch);
    return Math.max(maxBranch + root.val, left + right + root.val);
 }

var maxPathSum = function(root) {
    let maxSum =  Number.MIN_SAFE_INTEGER;
    dfs(root)
    return maxSum;

    function dfs(node) {
        if(!node) return 0;
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        const partialSum = node.val + left + right;
        maxSum = Math.max(maxSum, partialSum);
        return node.val + Math.max(left, right);
    }
}