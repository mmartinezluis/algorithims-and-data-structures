/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Strategy: this is a directed graph cycle detectin problem
// Either, use a DFS white, black, gray nodes algorithm
// or use Khan's algorithm for topplogica sort

// Using Khan's algorithm
 var canFinish = function(numCourses, prerequisites) {
    let queue = [];
    let graph = new Map();
    let indegree = new Array(numCourses).fill(0);

    for(let [u,v] of prerequisites) {
        graph.has(v) ? graph.get(v).push(u) : graph.set(v, [u]);
        indegree[u] += 1;
    }

    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }
    let result =[];
    while(queue.length) {
        const course = queue.shift();
        for(let neighbor of graph.get(course)) {
            indegree[neighbor] -= 1;
            if(indegree[neighbor] === 0) queue.push(neighbor);
        }
        result.push(course);
    }
    console.log(result.length === numCourses)
    return result.length === numCourses ? true : false;
};



let numCourses = 2 
let prerequisites = [[1,0],[0,1]]

canFinish(numCourses, prerequisites)

// Using DFS
var canFinish = function(numCourses, prerequisites) {
    
};
