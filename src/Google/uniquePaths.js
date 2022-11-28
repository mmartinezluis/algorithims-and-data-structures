/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Dynamic programming solution
var uniquePaths = function(m, n) {
    let grid = new Array(m).fill(0).map(() => new Array(n).fill(1));
    for(let row = 1; row < grid.length; row++) {
        for(let col = 1; col < grid[0].length; col++) {
            grid[row][col] = grid[row-1][col] + grid[row][col -1];
        }
    }
    return grid[m-1][n-1];
}

// This solution works, but it is not fast enough
var uniquePaths = function(m, n) {
    let directions = [
        [0,1], [1,0]
    ]
    let pathsCount = 0;
    dfs(0,0);
    return pathsCount;

    function dfs(x,y) {
        console.log(x,y)
        if(x === m -1 && y === n -1) {
            pathsCount++;
             
        }
        for(let dir of directions) {
            const i = x + dir[0];
            const j = y + dir[1];
            if(i > m-1 || j > n-1) continue;
            dfs(i,j);
        }
    }
};

uniquePaths(3,7)
