/**
 * @param {character[][]} grid
 * @return {number}
 */

// Logic: loop through the grid; if you find a land 
// and the land has not been visited, explore it (that is, run a dfs algorithm)
// once done exploring that land, continue the loop; if you find another land,
// and it has not been visited, explore it; by end of loop you will have 
// explored all distinct islands, return the number of islands

 var numIslands = function(grid) {
    let islands = 0;
    let totalRows = grid.length;
    let totalColumns = grid[0].length;
    let visited = new Array(totalRows).fill(0).map(() => new Array(totalColumns).fill(false));
    let directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    
    for(let i=0; i < grid.length; i++) {
        for(let j=0; j < grid[0].length; j++) {
            if(grid[i][j] === "1" && !visited[i][j]) {
                dfs( [i,j] );
                islands++;
            }
        }
    }

    function dfs(point) {
        visited[point[0]][point[1]] = true;
        for(let i=0; i < directions.length; i++) {
            let dir = directions[i];
            let x = point[0] + dir[0];
            let y = point[1] + dir[1];
            if(
                x < totalRows && 
                x >= 0 && 
                y < totalColumns && 
                y >=0 &&
                grid[x][y] === "1" &&
                !visited[x][y]
            ) {
                dfs([x,y]);
            }
        }
    }
    return islands;
};