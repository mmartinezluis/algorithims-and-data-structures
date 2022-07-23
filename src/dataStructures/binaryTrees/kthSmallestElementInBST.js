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
 var kthSmallest = function(root, k) {
    let counter = 0;
    let element;
    function DFS(node) {
        if(node.left) DFS(node.left);
        counter++;
        if(counter === k) {
           element = node.val;
           return
        }
        if(node.right) DFS(node.right);
    }
    DFS(root);
    return element;
};