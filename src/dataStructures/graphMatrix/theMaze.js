/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */

// GOLDE CODE: THE CONSOLE LOGS OF THIS CODE SHOW THE MOVEMENT OF THE BALL (THE POSITION OF THE BALL AS IT MOVES), 
// they also show when the ball hits a wall, and when the ball reaches a corner and there is no more space to move.
// When the ball reaches a corner, the "for" loop in the dfs function will conclude as all of the directions to omve
// have either been depleted or have been already visited; hence, whenever the console log "Completed a call stack" is printed,
// the ball is in a corner. To find the position of the ball at this time, we need to look at the console log "Positioned at"
// that is printed right before the "completed a call stack" console log. 

 var hasPath = function(maze, start, destination) {
    let rowsLength = maze.length;
    let columnsLength = maze[0].length;
    let visited = new Array(rowsLength).fill(0).map( () => new Array(columnsLength).fill(false))
    let directions = [
        [1,0], //goig up
        [-1,0], //going down,
        [0,-1], //going left
        [0,1]   //going right
    ]
    function dfs(start, destination){
        visited[start[0]][start[1]] = true;
        for(let i =0; i < directions.length; i++) {
            let newI = start[0] + directions[i][0];
            let newJ = start[1] + directions[i][1];
            if(newI < rowsLength && newI >= 0 && newJ < columnsLength && newJ >= 0) {
                if( 
                    maze[newI][newJ] === 0 && 
                    !visited[newI][newJ] 
                ) {
                    console.log('Positioned at', [newI,newJ])
                    dfs([newI, newJ], destination); 
                } else if(
                    maze[newI][newJ] === 1 //&&
                ) {
                    console.log('wall at', [newI,newJ])
                }
            }
        }
        console.log("Completed a call stack")
    }
    if(dfs(start, destination)) return true;
    return false;
};

let maze = [
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0],
    [1,1,0,1,1],
    [0,0,0,0,0]
  ] 
let start = [0,4]
let destination = [4,4]
hasPath(maze, start, destination)