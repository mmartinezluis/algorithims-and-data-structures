/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Strategy: use breadth-first=search

 var findOrder = function(numCourses, prerequisites) {
    if(!prerequisites.length) return [...Array(numCourses).keys()];
    let graph = new Map();
    prerequisites.forEach(pre => {
        if(!graph.has(pre[1])) graph.set(pre[1], [pre[0]]);
        else graph.get(pre[1]).push(pre[0]);
    }) 
    let queue = [];
    let visited = {};
    let results = new Set();
    for(let vertex of [...graph.keys()]) {
        if(bfs(vertex)) return [];
        visited = {};
    }
    return [...results.keys()];

    function bfs(vertex) {
        queue = [vertex];
        while(queue.length) {
            const current = queue.shift();
            results.add(current);
            if(!graph.has(current)) continue;    
            if(visited[current]) return true;
            visited[current] = true;
            for(let neighbor of graph.get(current)) {
                queue.push(neighbor);
            }
        }
        return false;
    }
}

