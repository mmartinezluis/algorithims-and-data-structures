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
    let previousSum;
    let path = [];

    function heightSum(node) {
        if(!node) return 0;
        const leftSum = Math.max(heightSum(node.left), 0);
        const rightSum = Math.max(heightSum(node.right), 0);
        
        previousSum = sum;
        sum = Math.max(sum, leftSum + rightSum + node.val);
        if(previousSum !== sum) path.push(node.val)
        return node.val + Math.max(leftSum, rightSum);
    }
    
    heightSum(root);
    return sum;
};

