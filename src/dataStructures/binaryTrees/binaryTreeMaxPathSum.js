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
 var maxPathSum = function(root) {
    let sum = Number.MIN_SAFE_INTEGER;
    function heightSum(node) {
        if(!node) return 0;
        const leftSum = heightSum(node.left);
        const rightSum = heightSum(node.right);

        sum = Math.max(sum, leftSum + rightSum);
        return node.val + Math.max(leftSum, rightSum);
    }
    heightSum(root);
    return sum;
};