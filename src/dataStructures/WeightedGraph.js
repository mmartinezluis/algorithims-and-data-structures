class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = {};

    }
    addEdge(v1, v2, weight){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            if(
                !this.adjacencyList[v1].include(v2) &&
                !this.adjacencyList[v2].include(v1)
            ) {
                this.adjacencyList[v1].push({node: v2, weight})
                this.adjacencyList[v2].push({node: v1, weight})
            }
        }
    }
}