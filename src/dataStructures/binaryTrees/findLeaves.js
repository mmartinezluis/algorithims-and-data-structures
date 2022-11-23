
 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var findLeaves = function(root) {
    let results = [];
    dfs(root.left);
    dfs(root.right);
    results.push([node.val])

    function dfs(node) {
        if(!node) return false;
        const left = dfs(node.left);
        const right= dfs(node.right);
        if(!left && !right) results.push(node.val);
        node.left = null;
        node.right = null;
        return true;
    }
    console.log(results);
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

findLeaves(root);