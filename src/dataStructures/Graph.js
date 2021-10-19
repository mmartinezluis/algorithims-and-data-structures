class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertext(vertex){
        if(!this.adjacencyList[vertext]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
        if(
            !this.adjacencyList[vertex1]?.includes(vertex2) && 
            !this.adjacencyList[vertex2]?.includes(vertex1)
        ){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacentList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex];
    }
}

// let g = new Graph()
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")

// g.addEdge("A","B")
// g.addEdge("A","C")
// g.addEdge("B","D")
// g.addEdge("C","E")
// g.addEdge("D","E")
// g.addEdge("D","F")
// g.addEdge("E","F")
// g