/**
 * @param {number[][]} edges
 * @return {number[]}
 */

 var findRedundantConnection = function(edges) {
    
    this.adjList = {};

    function addVertex(vertex) {
        if(!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    function addEdge(edge) {
        const v1 = edge[0];
        const v2 = edge[1];
        if(!this.adjList[v1]) this.adjList[v1] = [];
        if(!this.adjList[v2]) this.adjList[v2] = [];
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }
};