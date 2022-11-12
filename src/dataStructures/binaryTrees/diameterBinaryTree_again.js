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
    dfs(root);
    return diameter;
    
    function dfs(node) {
        if(!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        const localDiameter = left + right;
        diameter = Math.max(diameter, localDiameter);
        return 1 + Math.max(left, right);
    }
 }