
// Lgoic:
// Let us create a function that, given a node (vertex), traverses the node 
// and updates a global path object. This function should explore (traverse) one path 
// at a time. If the path being explored ends in a dead end (a node that has no children)
// the function should eliminate the dead end node from the path map as well as the
// node that led to the dead end node. If while traversing a path we return to a 
// previously traversed node, the function should stop by returning true (meaning
// we encountered a node that was already in our path map.) If this is so, it means
// that the given graph is cyclic.

var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();
    let visited = new Set();
    let visiting = new Set();
    
    for(let [v,e] of prerequisites) {
        if(!graph.has(v)) graph.set(v, [e]);
        else graph.get(v).push(e);
    }
    
    for(let [v,e] of graph) {
        if(dfs(v)) return false;
    }
    return true;
    
    function dfs(vertex) {
        visiting.add(vertex);
        let edges = graph.get(vertex);
        
        if(edges) {
            for(let edge of edges) {
                if(visited.has(edge)) continue;
                if(visiting.has(edge)) return true;
                if(dfs(edge)) return true;
            }
        }
        visiting.delete(vertex);
        visited.add(vertex);
        return false;
    }
};