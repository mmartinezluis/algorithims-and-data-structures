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
// Recursive solution
 var isSubtree = function(root, subRoot) {
    if(!root) return false;
    if(sameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
 }


// Using BSF, intitially
 var isSubtree = function(root, subRoot) {
    let queue = [root];
    while(queue.length) {
        const node = queue.shift();
        if(node.val === subRoot.val && dfs(node, subRoot)) return true;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return false;
 }

 function sameTree(p, q) {
    if(!p && !q) return true;
    if(!p || !q || p.val !== q.val) return false;
    return sameTree(p.left, q.left) && sameTree(p.right, q.right);
 }