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
    let path= new Map();
    let visited = new Set();
    let current;
    let queue;
    let answer;
    for(let i = edges.length - 1; i >= 0; i--) {
        const start = edges[i][0];
        queue = [start];
        path.set(start, start);
        while(queue.length) {
            current = queue.shift();
            const neighbors = adjList.get(current);
            for(let neighbor of neighbors) {
                if(neighbor === start && path.get(current) === start) continue;
                if(neighbor === start) {
                 answer = edges[i];
                }
                if(visited.has(neighbor)) continue;
                if(!path.has(neighbor)) queue.push(neighbor);
                path.set(neighbor, current);
            }
            visited.add(current);
        }
        if(answer) return answer;
        visited = new Set();
        path = new Map;
    }

};

const parent = {
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5
}

let edges = [
    [1,2], [3,4], [5,6], [7,8], [2,4], [2,5], [1,3], [6,8], [5,7]
]

var findRedundantConnection2 = function(edges) {
    function find(x) {
        if(parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x]
    }
    let parent = {};
    let weight ={};
    let result = [];
    for(let i=0; i < edges.length; i++) {
        const u = edges[i][0];
        const v = edges[i][1];
        if(parent[u] == undefined && parent[v] == undefined) {
            parent[u] = u;
            weight[u] = 1;
            parent[v] = u;
        } else if (parent[u] === parent[v]) {
            result.push(edges[i]);
        } else if(parent[u] === undefined) {
            parent[u] = parent[v];
            find(u);
            weight[v]++;
        } else if(parent[v] === undefined) {
            parent[v] = parent[u];
            find(v);
            weight[u]++;
        } else {
            weight[u] >= weight[v] ? parent[v] = parent[u] : parent[u] = parent[v]
        }
    }

}

findRedundantConnection2(edges);