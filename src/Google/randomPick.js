/**
 * @param {number[]} w
 */
// This solution does not work; revise
 var Solution = function(w) {
    this.weights = w;
    this.partialSums= [];
    this.sum = w.reduce((result, curr) => {
        const sum = result + curr;
        this.partialSums.push(sum);
        return sum;
    }, 0)
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor((Math.random()*(this.sum)));
    let i = 0;
    let j = this.weights.length;
    while(i < j) {
        const middle = Math.floor(i + ((j-i)/2))
        if(target > this.partialSums[middle]) {
            i = middle +1;
        } else j = middle;
    }
    return i;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */