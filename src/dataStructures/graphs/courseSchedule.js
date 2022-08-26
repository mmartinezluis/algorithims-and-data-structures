// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */

var can_finish = function(num_courses, prerequisites) {
    let graph = new Map();

    prerequisites.forEach(pre => {
        if(!graph.has(pre[1])) graph.set(pre[1], [pre[0]])
        else graph.get(pre[1]).push(pre[0]);
    }) 
    let visited = {};
    for(let vertex of [...graph.keys()]) {
        if(dfs(vertex, graph, visited)) {
            console.log("I'm returning FALSE")
            return false;
        }
        visited = {};
    }
    console.log("I'm returning TRUE")
    return true;
}

function dfs(vertex, graph, visited) {
    if(!graph.has(vertex)) return false;
    visited[vertex] = true;
    console.log(vertex)
    for(let neighbor of graph.get(vertex)) {
        if(visited[neighbor]) {
            console.log("Before returning true in loop", neighbor)
            return true;
        }
        if(dfs(neighbor, graph, visited)) return true;
    }
    return false;
}

// const prerequisites = [
//     ['B','A'],
//     ['C','A'],
//     ['B','C'],
//     ['D','C'],
//     ['E','D'],
//     ['E','C']
// ]
const prerequisites = [
    ['B','A'],
    ['C','A'],
    ['B','C'],
    ['D','C'],
    ['E','D'],
    ['C','E']
]

can_finish(0, prerequisites)


var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();          
    let exploring = new Set();
    let visited = new Set();
    
    for(let [child, parent] of prerequisites) {
        if(graph.has(parent)) graph.get(parent).push(child)
        else graph.set(parent, [child])
    }
    
    for(let [child, parent] of graph) {
        if(dfs(child)) return false;
    }
    return true;
    
    function dfs(node) {
        exploring.add(node);
        let neighbors = graph.get(node);
        if(neighbors){
            for(let neighbor of neighbors){
                if(visited.has(neighbor)) continue;
                if(exploring.has(neighbor)) return true;
                if(dfs(neighbor)) return true;
            }   
        }
        exploring.delete(node);
        visited.add(node);
        return false;   
    }
};



