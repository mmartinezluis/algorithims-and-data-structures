/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
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
//         console.log([start[0],start[1]])
        for(let i =0; i < directions.length; i++) {
            let newI = start[0] + directions[i][0];
            let newJ = start[1] + directions[i][1];
            if(newI < rowsLength && newI >= 0 && newJ < columnsLength && newJ >= 0) {
                if( 
                    maze[newI][newJ] === 0 && 
                    !visited[newI][newJ] 
                ) {
                    dfs([newI, newJ], destination); 
                } else if(
                    maze[newI][newJ] === 1 //&&
                  //  (destination[0] === newI) && (destination[1] === newJ)
                ) {
//                     console.log('wall at', [newI,newJ])
                }
            }
        }
        if(visited[destination[0]][destination[1]]) return true;
//         console.log('target')
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
let destination = [3,2]
hasPath(maze, start, destination)