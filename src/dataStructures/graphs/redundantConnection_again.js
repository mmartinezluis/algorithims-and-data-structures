/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// Problem: detect cycle in cyclic undirected graph

// Using DFS Double path finder; array graph
 var findRedundantConnection = function(edges) {
    const max_nodes = 1000;
    const graph = new Array(max_nodes+1).fill(0).map(el => []);
    let visited;
    for(let [u,v] of edges) {
        visited = {};
        if(graph[u].length && graph[v].length && dfs(u,v)) {
            return [u,v];
        }
        graph[u].push(v);
        graph[v].push(u);
    }

    function dfs(source, target) {
        if(!visited[source]) {
            visited[source] = true;
            if(source === target) return true;
            for(let neighbor of graph[source]) {
                if(dfs(neighbor, target)) return true;
            }
        }
    }
 }


// Using DFS Double path finder; adjacency list graph
 var findRedundantConnection = function(edges) {
    let graph = new Map();
    let seen;
    for(let [u,v] of edges) {
        seen = {};
        if(graph.get(u)?.length && graph.get(v)?.length && dfs(u,v)) {
            return [u,v];
        }
        graph.has(u) ? graph.get(u).push(v) : graph.set(u, [v]);
        graph.has(v) ? graph.get(v).push(u) : graph.set(v, [u]);
    }

    function dfs(source, target) {
        if(!seen[source]) {
            seen[source] = true;
            if(source === target) return true;
            for(let neighbor of graph.get(source)) {
                if(dfs(neighbor, target)) return true;
            }
        }
    }
 }


// Using Disjoint Set Union (DSU)
var findRedundantConnection = function(edges) {
    const max_nodes = 1000
    const dsu = new DSU(max_nodes + 1);
    for(let [u,v] of edges) {
        if(!dsu.union(u,v)) {
            console.log(u,v)
            return [u,v]
        }
    }
}

function DSU(n) {
    this.parent = new Array(n).fill(0).map((el, index) => index);
    this.rank = new Array(n).fill(1);
}

DSU.prototype.find = function(x) {
    if(this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
}

DSU.prototype.union = function(x,y) {
    x = this.find(x);
    y = this.find(y);
    if(x === y) return false;
    if(this.rank[x] > this.rank[y]) {
        this.parent[y] = x;
        this.rank[x] += 1;
    } else if(this.rank[y] > this.rank[x]) {
        this.parent[x] = y;
        this.rank[y] += 1;
    } else {
        this.parent[x] = y;
        this.rank[y] += 1;
    }
    return true;
}


let edges = [
    [1,2], [3,4], [5,6], [7,8], [2,4], [2,5], [1,3], [6,8], [5,7]
]

findRedundantConnection(edges)
