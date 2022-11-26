
var StockPrice = function() {
    this.records = new Map();
    this.maxHeap = new MaxBinaryHeap();
    this.minHeap = new MinBinaryHeap();
    this.maxId = -1;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    if(this.records.has(timestamp)) {
        this.records.set(timestamp, price);
        while(this.records.get(this.maxHeap.values[0].timestamp) !== this.maxHeap.values[0].price) {
            this.maxHeap.extractMax();
        }
        while(this.records.get(this.minHeap.values[0].timestamp) !== this.minHeap.values[0].price) {
            this.minHeap.extractMin();
        }
    } else {
        this.records.set(timestamp, price);
        this.maxHeap.add({timestamp, price});
        this.minHeap.add({timestamp, price});
    }
    this.maxId = Math.max(this.maxId, timestamp)
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
   return this.records.get(this.maxId);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    return this.maxHeap.values[0].price;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    return this.minHeap.values[0].price;
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    
    add(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length-1;
        while(index > 0) {
            const node = this.values[index].price;
            const parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex].price > node) break;
            swap(this.values, index, parentIndex);
            index = parentIndex;
        }
    }

    extractMax() {
        const max = this.values[0];
        const node = this.values.pop();
        if(this.values.length) {
            this.values[0] = node;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let index = 0;
        let childIndex;
        while(index < this.values.length -1) {
            let swapIndex = null;
            const node = this.values[index].price;
            childIndex = 2*index + 1;
            const child1 = this.values[childIndex];
            const child2 = this.values[childIndex +1];
            if(child1 !== undefined && child1.price > node) swapIndex = childIndex;
            if(child2 !== undefined && child2.price > child1.price && child2.price > node) swapIndex = childIndex+1;
            if(!swapIndex) break;
            swap(this.values, index, swapIndex);
            index = swapIndex;
        }
    }
}

class MinBinaryHeap {
    constructor() {
        this.values =[];
    }
    add(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length-1;
        while(index > 0) {
            const node = this.values[index].price;
            const parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex].price < node) break;
            swap(this.values, index, parentIndex);
            index = parentIndex;
        }
    }

    extractMin() {
        const min = this.values[0];
        const node = this.values.pop();
        if(this.values.length) {
            this.values[0] = node;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let index = 0;
        let childIndex;
        while(index < this.values.length-1) {
            let swapIndex = null;
            const node = this.values[index].price;
            childIndex = 2* index +1;
            const child1 = this.values[childIndex];
            const child2 = this.values[childIndex+1];
            if(child1 !== undefined && child1.price < node) swapIndex= childIndex;
            if(child2 !== undefined && child2.price < child1.price && child2.price < node) swapIndex= childIndex+1;
            if(!swapIndex) break;
            swap(this.values, index, swapIndex);
            index = swapIndex;
        }
    }
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}