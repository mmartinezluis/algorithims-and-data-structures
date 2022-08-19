/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    const flip = new Array(board.length).fill(null).map( row => new Array(board[0].length).fill(true))
    const nr = board.length;
    const nc = board[0].length;

    for(let i =0; i< nr; i++) {
        dfs(i, 0)
        dfs(i, nc -1)
    }
    for(let j=0; j < nc; j++) {
        dfs(0, j)
        dfs(nr -1, j)
    }

    for(let k=0; k < nr; k++) {
        for(let w=0; w < nc; w++) {
            
        }
    }
};

const directions = [
    [0,1], [0,-1], [-1,0], [1,0]
]

function dfs(i, j, board) {
    flip[i][j] = false;
    for(let k=0; k < directions.length; k++) {
        let x = i + dir[0];
        let y = j + dir[1];

        if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] == "X") continue;
        dfs(x, y, board)
    }
}

function regions(i, j, board) {
    if(board[i][j] == "O" && flip[i][j]) {
        board[i][j] = "X";
        for(let k=0; k < directions.length; k++) {
            let x = i + dir[0];
            let y = j + dir[1];

            if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] == "X" || !flip[x][y]) continue;
            regions(x, y, board)
        }
    }
}