/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    return inOrderDFS(root, p.val, q.val);
    function inOrderDFS(node, p, q) {
        if(node.val > p && node.val > q && node.left) return inOrderDFS(node.left, p, q);
        if(node.val < p && node.val < q && node.right) return inOrderDFS(node.right, p, q);
        return node;
    }
 }