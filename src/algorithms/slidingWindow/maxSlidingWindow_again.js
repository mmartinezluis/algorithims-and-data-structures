/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let heap = new MaxBinaryHeap();
    let result = [];
    for(let i=0; i < k; i++) {
        heap.add({value: nums[i], index: i});
    }
    // let max = heap.extractMax();
    let max = heap.values[0];
    let i = 0;
    result.push(max.value);
    for(let j=k; j < nums.length; j++) {
        i++;
        // console.log(heap.values, i)
        if(max.index < i) {
            heap.extractMax();
            // max = heap.values[0];
            max = {value: Number.MIN_SAFE_INTEGER};
        }
        // console.log("after", heap.values)
        heap.add({value: nums[j], index: j});
        if(heap.values[0].value > max.value) {
            max = heap.values[0];
        }
        result.push(max.value);
        // heap.extractMax();
    }

    console.log(result)
    return result;
};

let nums = [1,3,-1,-3,5,3,6,7] 
let k = 3
// nums = [1,3,1,2,0,5]
// k = 3


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
            let parentIndex = Math.floor((index -1)/2);
            const parent = this.values[parentIndex].value;
            if(parent > node) break;
            swap(this.values, index, parentIndex);
            index = parentIndex;
        }
    }

    extractMax() {
        let node = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return node;
    }

    bubbleDown() {
        let index = 0;
        while( index < this.values.length -1) {
            const node = this.values[index].value;
            let swapIndex;
            let childIndex = 2*index + 1;
            const child1 = this.values[childIndex];
            const child2 = this.values[childIndex + 1];
            if(child1 !== undefined && node < child1.value) swapIndex = childIndex;
            if(child2 !== undefined && node < child2.value && child2.value > child1.value) swapIndex = childIndex +1;
            if(swapIndex === undefined) break;
            swap(this.values, swapIndex, index);
            index = swapIndex;
        }
    }
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}




maxSlidingWindow(nums, k);