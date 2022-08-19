/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    const nr = board.length;
    const nc = board[0].length;

    for(let i = 0; i< nr; i++) {
        dfs(i, 0, board)
        dfs(i, nc -1, board)
    }
    for(let j = 0; j < nc; j++) {
        dfs(0, j, board)
        dfs(nr -1, j, board)
    }

    let value;
    for(let k=0; k < nr; k++) {
        for(let w=0; w < nc; w++) {
            value = board[k][w];
            if(value == "O") board[k][w] = "X"
            if(value == "E") board[k][w] ="O"
        }
    }
};

const directions = [
    [0,1], [0,-1], [-1,0], [1,0]
]

function dfs(i, j, board) {
    if(board[i][j] == "O") {
        board[i][j] = "E";
        for(let k=0; k < directions.length; k++) {
            let dir = directions[k];
            let x = i + dir[0];
            let y = j + dir[1];
            if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] == "X" || board[x][y] == "E") continue;
            dfs(x, y, board)
        }
    }
}

