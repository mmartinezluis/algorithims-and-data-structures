
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

// Strategy: the height of the nodes provides the information for collecting 
// the leaves of the tree one cycle at a time. Nodes with height 1 will be
// the leaves of the tree; then nodes with height two will be the leaves of
// the tree if nodes with height one are removed (nodes with height two are the next leaves)
// Hence, determine the height of each node and collect the nodes with same height in 
// a hash map; return the values of the hash map.
 var findLeaves = function(root) {
    let map = new Map();
    height(root);
    console.log([...map.values()]);
    return [...map.values()];

    function height(node) {
        if(!node) return 0;
        const nodeHeight =  1 + Math.max(height(node.left), height(node.right));
        map.has(nodeHeight) ? map.get(nodeHeight).push(node.val) : map.set(nodeHeight, [node.val]);
        return nodeHeight;
     }
 }


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

findLeaves(root);



 var findLeaves = function(root) {
    let results = [];
    let queue = [root];
    
    while(queue.length) {
        const length = queue.length;
        let temp = [];
        for(let i = 0; i < length; i++) {
            const current = queue.shift();
            if(!current.left && !current.right) {
                results.push([current.val]);
                continue;
            }
            temp.push(current.val)
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            
        }
        results.push(temp);
    }
    console.log(results)
    
 }



 var findLeaves = function(root) {
    let results = [];
    // let temp = [];
    const token = "token";
    dfs(root.left) 
    dfs(root.right)
    // results.push([root.val])

    function dfs(node) {
        if(!node) return false;
        const left = dfs(node.left);
        const right= dfs(node.right);
        if(!left && !right) {
            results.push(node.val);
            return true;
        }
        node.left = null;
        node.right = null;
        // if(temp[temp.length-1] === token) {
        //     // results.push(temp);
        //     // temp = [];
        //     temp.push(token);
        // }
        
        results.push(node.val)
        results.push(token)
        return true;
    }
    console.log(results);
};

