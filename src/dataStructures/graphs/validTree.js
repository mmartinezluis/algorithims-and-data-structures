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
        if(!union) return false;
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
            this.parent[x] = find(this.parent[x]);
        }
        return this.parent[x];
    }

    uniion(x, y) {
        let x = find(x);
        let y = find(y);
        console.log(x, y);
    }
}