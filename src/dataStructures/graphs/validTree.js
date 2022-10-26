/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
 var validTree = function(n, edges) {
    let components = n;
    const dsu = new DSU(n);
    for(let edge of edges) {
        const union = dsu.uniion(edge[0], edge[1]);
        if(!union) {
            return false;
        }
        components -= union;
    }
    return components === 1 ? true : false;
};

// Disjoint set union data structure
class DSU {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((el, index) => index);
        this.rank = new Array(n).fill(1);
    }

    find(x) {
        if(this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    uniion(x, y) {
        x = this.find(x);
        y = this.find(y);
        if(x === y) return 0;
        if(this.rank[x] > this.rank[y]) {
            this.parent[y] = x;
            this.rank[x] += 1;
        } else if(this.rank[y] > this.rank[x]) {
            this.parent[x] = y;
            this.rank[y] += 1;
        } else {
            this.parent[y] = x;
            x += 1;
        }
        return 1;
    }
}

let edges = [
    [0,2], [3,2], [1,0], [7,6], [4,5], [6,4]
]
let n = 8;
validTree(n, edges)