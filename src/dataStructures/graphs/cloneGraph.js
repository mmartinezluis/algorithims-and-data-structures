/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// This solution was obtained from 2q039rio4awengr
//https://leetcode.com/problems/clone-graph/discuss/1553975/Javascript-solution-stack-and-map


var cloneGraph = function(node) {
    if(!node) return 
    let root = new Node(node.val);
    let map = new Map([
        [node.val, root]
    ]);
    let stack = [node];
    
    while(stack.length){
        const originalNode = stack.pop();
        
        const copy = map.get(originalNode.val);
        
        for(const neighbor of originalNode.neighbors){            
            if(!map.has(neighbor.val)){
                stack.push(neighbor)
                // create a new node in the map
                const neighborCopy = new Node(neighbor.val);
                map.set(neighbor.val, neighborCopy);
                copy.neighbors.push(neighborCopy);
            }
            else copy.neighbors.push(map.get(neighbor.val));
        }
    }
    return root;
};


var cloneGraph = function(node) {
    let map = new Map();
    let main = new Node(node.val);
    map.set(node.val, main);
    function dfs(node, main) {
        node.neighbors.forEach(neighbor => {
            if(!map.has(neighbor.val)) {
                const newNode = new Node(neighbor.val);
                main.neighbors.push(newNode);
                map.set(neighbor.val, newNode);
                dfs(neighbor, newNode)
            } else main.neighbors.push(map.get(neighbor.val))
        })
    }
    dfs(node, main);
    return main
}