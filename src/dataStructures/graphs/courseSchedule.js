// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */

 class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2){
        this.addVertex(v1)
        this.addVertex(v2)
        if(
            !this.adjacencyList[1].includes(v2) &&
            !this.adjacencyList[2].includes(v1)
        ) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        } else {
            return false;
        }
    }
    
}

var canFinish = function(numCourses, prerequisites) {
    let nodes = {};
    let queue = [];
    let graph = new Graph();
    for(pair of prerequisites){
        if(graph.addEdge(pari[0], pari[1]) === false) return false;
    }
    return true;
}



