class PriorityQueue  {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort(a,b => a.priority - b.priority)
    }
}

class WeightedGraph {
    constructor(){
        this.adjacencylist = {};
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

    shortestPath(start, end){
       let nodes = new PriorityQueue();
       let distances = {};
       let previous = {};
       let smallest;
       let path;

       this.adjacencylist.keys.forEach( vertex => {
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        });

        while(nodes.values.length){
            let smallest = nodes.dequeue().val;
            if(smallest === end) {
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in thsi.adjacencylist[smallest]){
                    let nextNode = this.adjacencylist[smallest][neighbor];
                }
                let candidate = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.node;
                if(candidate < distances[nextNeighbor]){
                    distances(nextNeighbor) = candidate;
                    previous[nextNeighbor] = smallest;
                    nodes.enqueue(nextNeighbor, candidate);
                }
            }
        }
        return path.concat(smallest).reverse();
    }

}