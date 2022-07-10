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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    let queue = [root];
    let node;
    let leftChild;
    function repeat(queue) {
        if(queue.length === 0) return;
        node = queue.shift();
        if(node !== null){
            leftChild = node.left;
            node.left =  node.right;
            node.right = leftChild;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            repeat(queue);
        }
    }
    repeat(queue);
    return root;
};