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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// This solution works, but it is not optimal
 var isSubtree = function(root, subRoot) {
    if(!root && !subRoot) return true;
    if((!root && subRoot) || (root & !subRoot)) return false;
    if(isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isSameTree(p, q) {
    if(p === null && q === null) {
        return true;
    } else if(p !== null && q !== null) {
        if(p.val === q.val) {
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        } else return false;
    } else return false;
}

// A bit improved
var isSubtree = function(root, subRoot) {
    if(!root) return false;
    if(isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isSameTree(p, q) {
    if(!p && !q )return true;
    if(!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}