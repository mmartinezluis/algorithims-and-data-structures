/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    
};


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    add(item) {
        this.values.push(item);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length -1;
        while(index > 0) {
            let node = this.values[index].value;
            let parentIndex = Math.floor((this.values[index] -1)/2);
            const parent = this.values[parentIndex].value;
            if(parent > node) break;
            swap(this.values, index, parentIndex);
            index = parentIndex;
        }
    }

    extractMax() {
        let node = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 1) {
            this.values.push(node);
            this.bubbleDown();
        }
        return end;
    }

    bubbleDown() {
        
    }
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}