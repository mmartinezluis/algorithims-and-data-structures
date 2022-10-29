/**
 * @param {number[][]} grid
 * @return {number}
 */
// Strategy: iterate through the grid, and push the coordinate pairs
// of the rotted oranges into a queue and count the number of fresh
// oranges. Introduce a token to the end of the queue which will
// signal that the first batch of rotted oranges was processed.
// Run a while loop on the queue, and process each rotted orange 
// at a time, inspecting the four adjacent cells and marking fresh oranges as
// rotten (and decrease the variable for fresh oranges count) and pushing
// the new rotten oranges to queue.
// When the introduced token appears for processing, increase the minutes by one
// , and if the queue is not empty, push another token to queue.
// When while loop is done, if fresh oranges count is > 0, return -1;
// otherwise return the number of minutes.
 var orangesRotting = function(grid) {
    let queue = [];
    let freshOranges = 0;
    let nr = grid.length;
    let nc = grid[0].length;

    for(let r=0; r < nr; r++) {
        for(let c=0; c < nc; c++) {
            if(grid[r][c] === 1) {
                freshOranges++;
            } else if(grid[r][c] === 2) {
                queue.push([r,c]);
            }
        }
    }

    const token = [-1,-1];
    queue.push(token);

    let directions = [
        [0,1], [1,0], [0,-1], [-1,0]
    ]
    let minutes = -1;

    while(queue.length) {
        let cell = queue.shift();
        if(cell[0] === -1) {
            minutes++;
            if(queue.length) {
                queue.push(token);
            }
            continue;
        }
        for(let dir of directions) {
            const x = cell[0] + dir[0];
            const y = cell[1] + dir[1];
            if(x >= 0 && x < nr && y >= 0 && y < nc && grid[x][y] === 1) {
                freshOranges--;
                grid[x][y] = 2;
                queue.push([x,y]);
            }
        }
    }
    
    return freshOranges === 0 ? minutes : -1;
 }


const input = [[2,1,1],[1,1,0],[0,1,1]];

orangesRotting(input)