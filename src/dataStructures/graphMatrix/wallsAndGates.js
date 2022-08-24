/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
 var wallsAndGates = function(rooms) {
    let nr = rooms.length;
    let nc = rooms[0].length;
    let queue = [];

    for(let i=0; i < nr; i++) {
        for(let j=0; j < nc; j++) {
            if(rooms[i][j] == 0) queue.push([i,j])
        }
    }

    let directions = [ 
        [-1,0], [0,1], [1,0], [0,-1] 
    ]
    let current;

    while(queue.length) {
        current = queue.shift();
        const value = rooms[current[0]][current[1]];
        for(let k=0; k < directions.length; k++) {
            const dir = directions[k];
            let x = current[0] + dir[0];
            let y = current[1] + dir[1];
            if( x >=0 && x < nr && y >=0 && y < nc && rooms[x][y] !== -1 && rooms[x][y] !== 0) {
                if(rooms[x][y] === 2147483647) {
                    rooms[x][y] = value + 1;
                    queue.push([x,y])
                } 
            }
        }
    }
    return rooms;

};