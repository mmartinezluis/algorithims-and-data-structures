/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// Using DFS, directed cyclic graph ; cycle dection algorithm

const WHITE = 1;
const GRAY = 2;
const BLACK = 3;

// strategy: initially map all nodes to WHITE (use a hash or an array)
// then construct the graph (the graph is directed)
// then run DFS on all nodes that are WHITE
// Upon visiting a node, mark it as GRAY, and iterate over its neighbors
// if neighbor is WHITE, run DFS on it; if neighbor is GRAY ( this could be true after several DFS calls),
// then it means a path started from that node and connected back to the node (directed graph)
// this means there is a cyce for that node; use boolean to indicate there is a cycle
// at bttom of dfs function, mark processed node as BLACK, and push node to results array
var findOrder = function (numCourses, prerequisites) {
  const color = new Array(numCourses).fill(WHITE);
  let any_cycle = false;
  const graph = new Map();
  const order = [];

  for (let [dest, source] of prerequisites) {
    graph.has(source)
      ? graph.get(source).push(dest)
      : graph.set(source, [dest]);
  }

  for (let i = 0; i < numCourses; i++) {
    if (color[i] === WHITE) dfs(i);
  }

  let answer = [];
  if (!any_cycle) {
    for (let i = 0; i < numCourses; i++) {
      answer[i] = order[numCourses - i - 1];
    }
  }
  // console.log(answer, order)
  return answer;

  function dfs(node) {
    color[node] = GRAY;
    for (let neighbor of graph.get(node) || []) {
      if (color[neighbor] === WHITE) {
        dfs(neighbor);
      } else if (color[neighbor] === GRAY) {
        any_cycle = true;
      }
    }
    color[node] = BLACK;
    order.push(node);
  }
};

let num_courses = 4;
let prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];
findOrder(num_courses, prerequisites);

// Another solution
var findOrder = function (numCourses, prerequisites) {
  let graph = new Map();
  let order = [];
  const [visit, cycle] = [new Set(), new Set()];

  for (let [dest, src] of prerequisites) {
    graph.has(src) ? graph.get(src).push(dest) : graph.set(src, [dest]);
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) === false) return [];
  }

  let final = [];
  for (let i = 0; i < numCourses; i++) {
    final[i] = order[numCourses - i - 1];
  }

  return final;

  function dfs(crs) {
    if (cycle.has(crs)) return false;
    if (visit.has(crs)) return true;
    cycle.add(crs);
    for (let neighbor of graph.get(crs) || []) {
      if (dfs(neighbor) == false) return false;
    }
    cycle.delete(crs);
    visit.add(crs);
    order.push(crs);
    return true;
  }
};
