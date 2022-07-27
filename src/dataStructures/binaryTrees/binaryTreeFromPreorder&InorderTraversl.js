/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

var buildTree = function(preorder, inorder) {
    let preorderIndex = 0;
    let inorderMap = new Map();
    inorder.forEach( (elem, index) => inorderMap.set(elem, index));
    return recursive(preorder, 0, preorder.length - 1);

    function recursive(preorder, left, right) {
        if(left > right) return null;
        const rootValue = preorder[preorderIndex++];
        const root = new TreeNode(rootValue);
        root.left = recursive(preorder, left, inorderMap.get(rootValue) - 1);
        root.right = recursive(preorder, inorderMap.get(rootValue) + 1, right);
        return root;
    }
};


