/**
 * @param {character[][]} board
 * @return {boolean}
 */

 var isValidSudoku = function(board) {
    let gr = 0;
    let gc = 0;
    let row;
    for(let i = 0; i < board.length; i++) {
        if(i === 2) break;
        for(let j = 0; j < board[0].length; j++) {
            // gc =  position                cycle
            // gc = (i%3 === 0 ? 0 : (i%3)*3) + j%3;
            gc = (i%3)*3 + j%3;
            // gr =  position                 cycle
            // gr = (i%3 === 0 ? i : i - i%3) + Math.floor(j/3);
            gr = (i - i%3) + Math.floor(j/3);
            console.log(board[gr][gc])
            if(j === 9) break;
        }
        
    }

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

isValidSudoku(board)

