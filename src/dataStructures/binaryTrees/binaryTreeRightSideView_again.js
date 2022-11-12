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
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    while(queue.length) {
        const levelNodes = queue.length;
        for(let i=0; i < levelNodes; i++) {
            const current = queue.shift();
            if(i+1 === levelNodes) result.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    return result;
 }