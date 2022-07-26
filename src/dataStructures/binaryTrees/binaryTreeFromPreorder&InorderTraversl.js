/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
class Node {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

 var buildTree = function(preorder, inorder) {
    let root = new Node(preorder[0]);
    let inorderMap = new Map();
    inorder.forEach( (elem, index) => inorderMap.set(elem, index));
    
    function recursive(root, begin, end) {
        const rootIndex = inorderMap.get(root.val);
        const leftRoot = rootIndex === begin ? null : new Node(preorder[begin+1]);
        const rightRoot = rootIndex === end ? null : new Node(preorder[leftRoot ? rootIndex+1 : begin+1]);
        if(leftRoot) {
            root.left = leftRoot;
            recursive(root.left, begin+1, rootIndex);
        }
        if(rightRoot) {
            root.right = rightRoot;
            recursive(root.right, rootIndex+1, end);
        }
    }
    recursive(root, 0, preorder.length -1 );
    return root;
};

var buildTree = function(preorder, inorder) {
    let preorderIndex = 0;
    let inorderMap = new Map();
    inorder.forEach( (elem, index) => inorderMap.set(elem, index));
    return recursive(preorder, 0, preorder.length - 1);

    function recursive(preorder, left, right) {
        if(left > right) return null;
        const rootValue = preorder[preorderIndex++];
        const root = new Node(rootValue);
        root.left = recursive(preorder, left, inorderMap.get(rootValue) - 1);
        root.right = recursive(preorder, inorderMap.get(rootValue) + 1, right);
        return root;
    }
};


