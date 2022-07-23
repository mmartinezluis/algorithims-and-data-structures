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
 * @return {number[][]}
 */

// Recursive solution
 var levelOrder = function(root) {
     if(!root) return [];
     let L = 1;
     let map = new Map([
         [L, [root]]
     ])
     let result = new Map;
     let node;

     function BSF() {
         node = map.get(L).shift();
         result.has(L) ? result.get(L).push(node.val) : result.set(L, [node.val]);
         if(node.left) map.has(L + 1) ? map.get(L + 1).push(node.left) : map.set(L + 1, [node.left]);
         if(node.right) map.has(L + 1) ? map.get(L + 1).push(node.right) : map.set(L + 1, [node.right]);

         if(!map.get(L).length) {
             L++;
             if(!map.has(L)) return [...result.values()]
         }
         return BSF();
     }
     return BSF(); 
};

// Iterative solution
var levelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let result = [];
    let node;
    while(q.length) {
        const levelNodes = q.length;
        const temp = [];
        for(let i=0; i < levelNodes; i++) {
            node = q.shift();
            temp.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        result.push(temp);
    }
    return result;
}