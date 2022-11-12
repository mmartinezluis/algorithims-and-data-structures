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
// Recursive solution
 var lowestCommonAncestor = function(root, p, q) {
    return dfs(root, p.val, q.val);
    function dfs(node, p, q) {
        if(node.val > p && node.val > q && node.left) return dfs(node.left, p, q);
        if(node.val < p && node.val < q && node.right) return dfs(node.right, p, q);
        return node;
    }
 }

// Iterative solution
 var lowestCommonAncestor = function(root, p, q) {
    let node = root;
    p = p.val;
    q = q.val;
    while(node !== null) {
        if(node.val > p && node.val > q){node = node.left;}
        else if(node.val < p && node.val < q){node = node.right;}
        else return node;
    }
 }