/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let r1 = 0;
    let r2 = matrix.length -1;
    let j1 = 0;
    let j2 = matrix[0].length -1;
    let rp;
    let cp;
    if(target < matrix[r1][j1] || target > matrix[r2][j2]) return false;
    while(r1 <= r2) {
        rp = Math.floor((r1+r2)/2);
        if(target >= matrix[rp][j1] && target <= matrix[rp][j2]) {
            while(j1 <= j2) {
                cp = Math.floor((j1+j2)/2);
                if(matrix[rp][cp] === target) {
                    return true;
                } else if(matrix[rp][cp] < target) {
                    j1 = cp + 1;
                } else j2 = cp - 1;
            }
            return false;
        } else if(target > matrix[rp][j2]) {
            r1 = rp + 1;
        } else r2 = rp - 1;
    }
    return false;
};