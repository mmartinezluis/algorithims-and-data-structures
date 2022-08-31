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

    const keys = [...this.adjList.keys()];

    // for(let i = keys.length - 1; i >= 0; i--) {
    //     const neighbors = this.adjList.get(keys[i]);
    //     if(neighbors.length > 1) {
    //         for(let neighbor of neighbors) {
    //             if(this.adjList.get(neighbor).length > 1) return [keys[i], neighbor];
    //         }
    //     }
    // }
    for(let i = edges.length - 1; i >= 0; i--) {
        const neighbors = this.adjList.get(edges[i][0]);
        if(neighbors.length > 1) {
            if(this.adjList.get(edges[i][1]).length > 1) return edges[i];
        }
    }

};