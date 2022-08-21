/**
 * @param {number[][]} grid
 * @return {number}
 */
// Solution: run a level-order traversal on all rotting oranges;
// at each new level in the traversal, increment the minutes by 1
// Then inspect the grid; if there are good oranges left 
// return -1, otherwise return the minutes
 var orangesRotting = function(grid) {
    let touched = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(false));
    let nr = grid.length;
    let nc = grid[0].length;

    let queue = [];

    for(let i=0; i < nr; i++) {
        for(let j=0; j < nc; j++) {

        }
    }
};

function bfs(i, j, grid) {
    let queue = [[i,j]];
    let minutes = 0;
    while(queue.length) {
        const level = queue.length;
        for(let k=0; k < level; k++) {
            let F = queue.shift();
            let touched = false;
            for(let dir in directions) {
                const x = F[0] + dir[0];
                const y = F[1] + dir[1];
                if(x < 0 || y < 0 || x > grid.length || y > grid[0].length || grid[x][y] == 2 || grid[x][y] == 0) continue;
                grid[x][y] == 2;
                queue.push([x,y]);
                touched = true;
            }
            if(touched) minutes++;
        }
    }
}


let directions = [
    [0,1], [0,-1], [-1,0], [1,0]
]