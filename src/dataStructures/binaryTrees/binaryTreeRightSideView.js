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
    let q = [root];
    let node;
    while(q.length) {
        const levelNodes = q.length;
        for(let i=0; i < levelNodes; i++) {
            node = q.shift();
            if(node.right) q.push(node.right);
            if(node.left) q.push(node.left);
            if(i === levelNodes -1) {
                result.push(node.val);
            }
        }
    }
    return result;
    
};