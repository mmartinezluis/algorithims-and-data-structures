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
 * @return {boolean}
 */

// Pseudo code:
// Run breadth first search
// Store the nodes for each level of the tree in a map array
// Increase the level number by 1 when the array for the current level becomes empty
// The first time a leaf is detected, store the current level in a variable
// If at any given time after leaf dectection, if the current level is 2 more than 
//  the level of leaf detection, return false (tree is unbalanced);
//  otherwise, return true at end of recursion
// DOES NOT WORK FOR ALL CASES
 var isBalanced = function(root) {
     if(!root) return true;
     // initialize a map with level 1 of tree as containing the only node of level1 (the root node)
    let L = new Map([ 
        [1, [root] ]
    ]);   // "L" is the level map
    let node;
    let i = 1;  // "i" is the level number
    let anyLeaf = false;
    let boolean = true;

    function recursive() {
        node = L.get(i).shift();
        
        if(!node.left || !node.right) {
            anyLeaf = true;
            if(!L.has("leaf")) L.set("leaf", i)
        }

        if(anyLeaf && (i - L.get('leaf') >= 2)) return false;

        if(node.left) {
            L.has(i+1) ? L.get(i+1).push(node.left) : L.set(i+1, [node.left]);            
        };
        if(node.right) {
            L.has(i+1) ? L.get(i+1).push(node.right) : L.set(i+1, [node.right]);
        };
        // if done processing the current level (no more nodes in current level)
        // increase the level number;
        // and if the increased level is not defined because there were no nodes to
        // push to that level, then return (full recursion has concluded)
        if(!L.get(i).length){
            i++;
            if(!L.has(i)) return true;
        };

        recursive();
    }

    return recursive();

};