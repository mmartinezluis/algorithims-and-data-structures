/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let row = {};
    let column= {};
    //grid variables
    let grid = {};
    let k=0;
    let v=0;
    
    for(let i=0; i< board.length; i++) {
        let kInitial;
        if(i % 3 === 0) {
            v=0;            
        } else if(i % 3 === 1) {
            v=3
        } else v=6

        if(i < 3) {
            kInitial = 0;
        } else if(i < 6) {
            kInitial = 3;
        } else kInitial = 6;
        k = kInitial;

        
        for(let j=0; j< board[i].length; j++) {
             // debugger
            if(column[board[j][i]]){
                return false
            } else if(board[j][i] != ".") column[board[j][i]] = 1;

            if(row[board[i][j]]) {
                return false
            } else if(board[i][j] != ".") row[board[i][j]] = 1;
    
            if(grid[board[k][v]]) {
              return false  
            } else if(board[k][v] != ".") grid[board[k][v]] = 1;
            
            k++;
            if(j % 3 === 2) {
                k= kInitial;
                v++;
            }
        }

        column = {};
        row = {};
        grid = {};
        
    }
    return true;
};