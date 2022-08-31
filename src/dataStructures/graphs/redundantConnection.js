/**
 * @param {number[][]} edges
 * @return {number[]}
 */

 var findRedundantConnection = function(edges) {
    
    this.adjList = new Map();
    
    function addEdge(edge) {
        const v1 = edge[0];
        const v2 = edge[1];
        if(!this.adjList.has(v1)) this.adjList.set(v1, []);
        if(!this.adjList.has(v2)) this.adjList.set(v2, []);
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    for(let edge of edges) {
        addEdge(edge);
    }

    for(let vertex in this.adjList) {
        const neighbors = this.adjList[vertex];
        if(neighbors.length > 1) {
            for(let neighbor of neighbors) {
                if(this.adjList[neighbor].length > 1) return [vertex, neighbor];
            }
        }
    }

};