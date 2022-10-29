/**
 * @param {character[][]} grid
 * @return {number}
 */
// Strategy: goal is to count the number of islands (vertical + horizontal
// areas of land (cells with value of 1)).
// Contruct a visited grid to keep track of visited land cells.
// Iterate upon the input grid, and for each cell run a DFS algorithm
// if cell is land (and has not been visited)).
// After exiting DFS, increment an islands count variable by one. 
// Return the inslands count.
 var numIslands = function(grid) {
    let nr = grid.length;
    let nc = grid[0].length;
    let count = 0;
    let visited = new Array(nr).fill([]).map(el => new Array(nc).fill(false));
    let directions = [
        [0,1], [1,0], [0,-1], [-1,0]
    ]
    for(let i=0; i < nr; i++) {
        for(let j=0; j < nc; j++) {
            if(grid[i][j] === '1' && !visited[i][j]) {
                dfs(i,j);
                count++;
            }
        }
    }
    
    return count;

    function dfs(i,j) {
        visited[i][j] = true;
        for(let dir of directions) {
            const x = i + dir[0];
            const y = j + dir[1];
            if(x >= 0 && x < nr && y >= 0 && y < nc && grid[x][y] === '1' && !visited[x][y]) {
                dfs(x,y);
            }
        }
    }

 }

 let: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  numIslands(grid)