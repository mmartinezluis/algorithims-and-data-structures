/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// Strategy: initialize two grids: pacific grid and atlantic grid,
// each of the same size as the input grid and cells filled with 'false'
// boolean. Iterate over the top and bottom border and the left and right 
// border of input grid. For each iteration, run a dfs algorithm. The
// algorithm should take the current coordinates in iteration and the
// corresponding array (pacifi for top and left border and atlantic for 
// right and bottom border). Flip the current cell in passed array to 
// 'true' boolean; then iterate 4-directionally and run dfs on adjacent
// cells only if adjacent cell is within boudns and array value for cell is 'false'
// When done, iteratte over the input grid, and for any coordinates for which 
// both the atlanctic array and the pacific array cells are true, push those
// coordinates into a results array. Return the results array.
 var pacificAtlantic = function(heights) {
    let nr = heights.length;
    let nc = heights[0].length;

    let pacific_array = new Array(nr).fill(0).map(el => new Array(nc).fill(false));
    let atlantic_array = new Array(nr).fill(0).map(el => new Array(nc).fill(false));
    let directions = [
        [0, -1], [1, 0], [0, 1], [-1, 0]
    ]

    for(let v = 0; v < nr; v++) {
        dfs(v, 0, pacific_array);
        dfs(v, nc -1, atlantic_array);
    }

    for(let h = 0; h < nc; h++) {
        dfs(0, h, pacific_array);
        dfs(nr -1, h, atlantic_array);
    }

    let result = [];
    for(let i=0; i < nr; i++) {
        for(let j=0; j < nc; j++) {
            if(pacific_array[i][j] && atlantic_array[i][j]) {
                result.push([i,j]);
            }
        }
    }
    console.log(result)
    return result;

    function dfs(i, j, arr) {
        arr[i][j] = true;
        for(let dir of directions) {
            const x = i + dir[0];
            const y = j + dir[1];
            if(
                x >=0 && x < nr && y >= 0 && y < nc &&
                heights[i][j] <= heights[x][y] && !arr[x][y]
            ) {
                dfs(x, y, arr)
            }
        }
    }
};

let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

pacific_atlantic(heights)
