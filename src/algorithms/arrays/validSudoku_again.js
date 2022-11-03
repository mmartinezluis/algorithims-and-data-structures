/**
 * @param {character[][]} board
 * @return {boolean}
 */

 var isValidSudoku = function(board) {
    let gr = 0;
    let gc = 0;
    let gridMap = {};
    let rowMap = {};;
    let columnMap = {};
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
        // gr =  position        cycle
            gr = (i - i%3) + Math.floor(j/3);
        // gc =  position  cycle
            gc = (i%3)*3 + j%3;
            const cell = board[gr][gc];
            if(cell !== "." && gridMap[cell]) return false;
            gridMap[cell] = true;
            if(board[i][j] !== "." && rowMap[board[i][j]]) return false;
            rowMap[board[i][j]] = true;
            if(board[j][i] !== "." && columnMap[board[j][i]]) return false;
            columnMap[board[j][i]] = true;
        }
        gridMap = {};
        rowMap = {};
        columnMap = {};
    }
    
    return true;
 }
 let board = [
     ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]

board = [
     ["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]

isValidSudoku(board)

