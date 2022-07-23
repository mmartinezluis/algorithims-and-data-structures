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
 var goodNodes = function(root) {
    let max = root.val;
    let count = 1;

    const traverse = function(node, max) {
        if(node.left) {
            if(node.left.val >= max) {
                count++;
                traverse(node.left, node.left.val);
            } else traverse(node.left, max);
        }
        
        if(node.right) {
            if(node.right.val >= max) {
                count++; 
                traverse(node.right, node.right.val);
            } else traverse(node.right, max);
        }
    }
    traverse(root, max);
    return count;
};

// Faster solution and lower memory
var goodNodes = function(root) {
    let count =0;
    function traverse(node, max) {
        if(node.val >= max) count++;
        if(node.left) traverse(node.left, Math.max(node.val, max));
        if(node.right) traverse(node.right, Math.max(node.val, max));
    }
    traverse(root, Number.MIN_SAFE_INTEGER);
    return count;
}