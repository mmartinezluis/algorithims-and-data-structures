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
    if(p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    if(p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    return root;
};

// Iterative solution
var lowestCommonAncestor = function(root, p, q) {
    let node = root;
    while(node !== null) {
        if(p.val > node.val && q.val > node.val) {
            node = node.right;
        } else if(p.val < node.val && q.val < node.val) {
            node = node.left;
        }
        else return node;
    }
}