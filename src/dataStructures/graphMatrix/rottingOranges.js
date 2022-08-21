/**
 * @param {number[][]} grid
 * @return {number}
 */
// Solution: run a level-order traversal on all rotting oranges;
// at each new level in the traversal, increment the minutes by 1
// Then inspect the grid; if there are good oranges left 
// return -1, otherwise return the minutes
 var orangesRotting = function(grid) {
    let nr = grid.length;
    let nc = grid[0].length;
    let directions = [
        [0,1], [0,-1], [-1,0], [1,0]
    ]
    let queue = [];
    let freshOranges = 0;
    let minutes = -1;

    for(let i=0; i < nr; i++) {
        for(let j=0; j < nc; j++) {
            if(grid[i][j] == 2) queue.push([i,j])
            else if(grid[i][j] == 1) freshOranges++;
        }
    }

    queue.push([-1,-1]);

    while(queue.length) {
        let F = queue.shift();
        if(F[0] == -1) {
            minutes++;
            if(queue.length > 0) queue.push([-1,-1])
            continue;
        }
        for(let index=0; index < directions.length; index++) {
            const dir = directions[index];
            const x = F[0] + dir[0];
            const y = F[1] + dir[1];
            if(x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == 1) {
                grid[x][y] = 2;
                freshOranges--;
                queue.push([x,y]);
            }
        }   
    }

    if(freshOranges > 0) return -1
    else return minutes;
};
