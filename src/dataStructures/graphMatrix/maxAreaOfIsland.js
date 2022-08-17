/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let max_area = 0;
    let nr = grid.length;
    let nc = grid[0].length;
    for(let i=0; i< grid.length; i++) {
        for(let j=0; j < grid[0].length; j++) {
            max_area = Math.max(dfs(i,j), max_area)
        }
    }
    function dfs(i, j) {
        if(i >= nr || i < 0 || j >= nc || j < 0 || grid[i][j] == 0) return 0;
        grid[i][j] = 0;
        return (1 + dfs(i+1, j) + dfs(i-1,j) + dfs(i, j+1) + dfs(i, j-1))            
    }
    return max_area;
};


