/***
* @param {array []} list
  @param {inside the list we are given four points of a matrix}
*/

class Node {
    constructor(color = w, up,  down, left, right ) {
        this.color = color
        this.up = (prob1 === undefined ? null : {color: color, neighbor: upNeighbor} )
        this.down = (prob2 === undefined || prob2)
        this.hor = (prob3 === undefined || prob3)
    }
}

function probabilityOfNodeSequence(arr) {
    let map = new Map();
    for(const node of arr) {
        map.set(node.color, node);
    }

    let stact = [arr[0]];
    let directions = [
        "up", "down", "left", "right"
    ]

    let probabilityTotal = 1;



}





