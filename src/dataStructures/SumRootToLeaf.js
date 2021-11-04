/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//  * @param {TreeNode} root
//  * @return {number}
 


 var sumNumbers = function(root) {
    let compilation = [];
    function traverse(node, digits = ""){
        digits = digits + `${node.val}`;
        if(!node.left && !node.right){
            return compilation.push(digits);
        } 
        else if(node.left && !node.right){
            traverse(node.left, digits);
        }
        else if(!node.left && node.right){
            traverse(node.right, digits);
        }
        else {
            traverse(node.left, digits);
            traverse(node.right, digits);
        }
    }
    traverse(root);
    compilation = compilation.map( string =>  Number(string));
    return compilation.reduce((a,b) => a+b);
}

// tree = new BST();
// tree.insert(3)
// tree.insert(2)
// tree.insert(4);

// tree.sumNumbers()   --> expexted answer: 66