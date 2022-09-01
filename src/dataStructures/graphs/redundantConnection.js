/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// strategy: find a vertex with a cycle; start inspecting from last eddge in edges array
 var findRedundantConnection = function(edges) {
    const adjList = new Map();
    function addEdge(edge) {
        const v1 = edge[0];
        const v2 = edge[1];
        if(!adjList.has(v1)) adjList.set(v1, []);
        if(!adjList.has(v2)) adjList.set(v2, []);
        adjList.get(v1).push(v2);
        adjList.get(v2).push(v1);
    }
    for(let edge of edges) {
        addEdge(edge);
    }
    let path= {};
    let visited = {};
    let current;
    let queue;
    for(let i = edges.length - 1; i >= 0; i--) {
        const start = edges[i][0];
        queue = [start];
        path[start] = start;
        while(queue.length) {
            current = queue.shift();
            const neighbors = adjList.get(current)
            for(let neighbor of neighbors) {
                if(neighbor === start && path[neighbor] === start) continue;
                if(neighbor === start) return edges[i];
                if(visited[neighbor]) continue;
                if(path[neighbor] === undefined) queue.push(neighbor);
                path[neighbor] = current;
            }
            visited[current] = true;
        }
        visited = {};
        path = {};
    }

};