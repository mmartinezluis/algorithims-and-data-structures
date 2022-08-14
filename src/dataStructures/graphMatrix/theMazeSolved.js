/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
 var hasPath = function(maze, start, destination) {
    let rowsLength = maze.length;
    let columnsLength = maze[0].length;
    let visited = new Array(rowsLength).fill(0).map(() => new Array(columnsLength).fill(false))
    let directions = [
        [1,0],      //goig down
        [-1,0],     //going up,
        [0,-1],     //going left
        [0,1]       //going right
    ]
    let result;
    function dfs(start){  
        if(result) return;
        visited[start[0]][start[1]] = true
        for(let i =0; i < directions.length; i++) {
            let dir = directions[i];
            let newI = start[0] + dir[0];
            let newJ = start[1] + dir[1];
            while (
                newI < rowsLength && 
                newI >= 0 && 
                newJ < columnsLength && 
                newJ >= 0 &&
                maze[newI][newJ] === 0
            ) {
                newI = newI + dir[0];
                newJ = newJ + dir[1];
            }  
            newI = newI - dir[0];
            newJ = newJ - dir[1];
            if (newI === destination[0] && newJ === destination[1]) {
                console.log([newI, newJ])
                result = true;
                return;
            }   
            if(!visited[newI][newJ]){
                dfs([newI, newJ])
            }
        }
    }
    dfs(start);
    return result || false;
};


let target = [
    [2,4],
    [0,3],
    [2,0],
    [4,0],
    [4,4]
]

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