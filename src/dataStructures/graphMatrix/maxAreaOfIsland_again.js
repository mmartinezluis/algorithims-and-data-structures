/**
 * @param {number[][]} grid
 * @return {number}
 */
// Strategy: interate through the input grid;
// for each cell, run a dfs algorithm if cell is land;
// The dfs algorithm should return 0 if input coordinates
// are out of bound or represent water;
// otherwise, it should return 1 plus dfs calls in all
// four directions
// Since dfs returns an integer, use Math max and a variable (maxArea)
// to keep track of max value returned by dfs grid calls
// To avoid inifinte loop; either use a visited grid or
// change visited lands to water in input grid
// Return maxArea variable
 var maxAreaOfIsland = function(grid) {
    let nr = grid.length;
    let nc = grid[0].length;
    let maxArea = 0;

    for(let i=0; i < nr; i++) {
        for(let j=0; j < nc; j++) {
            if(grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i,j))
            }
        }
    }
    console.log(maxArea)
    return maxArea;

    function dfs(i,j) {
        if(i < 0 || i >= nr || j < 0 || j >= nc || grid[i][j] === 0) {
            return 0;
        }
        grid[i][j] = 0;
        return 1 + dfs(i, j+1) + dfs(i+1,j) + dfs(i,j-1) + dfs(i-1,j);
    }
 }

 let grid = [
    [1,1,1,1,0],
    [0,0,0,0,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
  ]

  maxAreaOfIsland(grid)