// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();          
    let exploring = new Set();
    let visited = new Set();
    
    for(let [child, parent] of prerequisites) {
        if(graph.has(parent)) graph.get(parent).push(child)
        else graph.set(parent, [child])
    }
    
    for(let [child, parent] of graph) {
        if(dfs(child)) return false;
    }
    return true;
    
    function dfs(node) {
        exploring.add(node);
        let neighbors = graph.get(node);
        if(neighbors){
            for(let neighbor of neighbors){
                if(visited.has(neighbor)) continue;
                if(exploring.has(neighbor)) return true;
                if(dfs(neighbor)) return true;
            }   
        }
        exploring.delete(node);
        visited.add(node);
        return false;   
    }
};



