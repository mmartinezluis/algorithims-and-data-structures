/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let directions = [
        [1,0], [0,1]
    ]
    let pathsCount = 0;
    dfs(0,0);
    console.log(pathsCount);
    return pathsCount;

    function dfs(x,y) {
        if(x === m -1 && y === n -1) {
            pathsCount++;
            return 
        }
        for(let dir of directions) {
            x = x + dir[0];
            y = y + dir[1];
            if(x > m-1 || y > n-1) continue;
            dfs(x,y);
        }
    }
};