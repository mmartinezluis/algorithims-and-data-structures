/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Strategy: iterate through the borders of the grid (left and right border;
// top and bottom borders), and run a dfs algorithm on the cells that contain
// "o". The dfs algorithm should flip the "O" cell into a temp string,
// and continue to run recursively 4-directionally for cells that are "O"
// and are within bounds. 
// After the border dfs calls, iterate through the grid and flip the cells
// with temp variable back to "O", and the cells with "O" into "X" as those 
// were captured.
 var solve = function(board) {
    let nr = board.length;
    let nc = board[0].length;

    for(let j=0; j < nc; j++) {
        dfs(0, j);
        dfs(nr -1, j);
    }
    for(let i=0; i < nr; i++) {
        dfs(i, 0);
        dfs(i, nc -1);
    }
    function dfs(i, j) {
        if(i < 0 || i >= nr || j < 0 || j >= nc || board[i][j] !== "O") return;
        board[i][j] = "T";
        dfs(i, j-1);
        dfs(i+1, j);
        dfs(i, j+1);
        dfs(i-1, j);
    }

    for(let i=0; i < nr; i++) {
        for(let j=0; j < nc; j++) {
            if(board[i][j] === "T") {
                board[i][j] = "O"
            } else if(board[i][j] === "O") {
                board[i][j] = "X"
            }
        }
    }
    console.log(board)
 }

let board = [
    ["O","X","X","X"],
    ["X","O","O","X"],
    ["X","O","O","X"],
    ["X","O","X","X"]
]

solve(board)