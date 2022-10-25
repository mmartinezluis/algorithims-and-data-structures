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
    let max = heap.values[0];
    let i = 0;
    result.push(max.value);
    for(let j=k; j < nums.length; j++) {
        i++;
        if(max.index < i) {
            let temp = heap.extractMax();
            while(temp.value === heap.values[0].value) {
                temp = heap.extractMax();
            }
            max = {value: Number.MIN_SAFE_INTEGER};
        }
        heap.add({value: nums[j], index: j});
        if(heap.values[0].value > max.value) {
            max = heap.values[0];
        }
        result.push(max.value);
    }
    console.log(result)
    return result;
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

var maxSlidingWindow = function(nums, k) {
    let deque = [];
    let result = [];
    let max = Number.MIN_SAFE_INTEGER;
    let index;
    for(let t=0; t < k; t++) {
        deque.push(nums[t]);
        if(nums[t] > max) {
            max = nums[t];
            index = t;
        }
    }
    result.push(nums[index]);
    let i = 0;
    for(let j=k; j < nums.length; j++) {
        let temp = index - i
        while(temp > 0) {
            deque.shift();
            temp--;
        }
        i++;
        if(index < i) {
            deque.shift();
            index = i
        }

        deque.push(nums[j]);
        if(nums[j] > nums[index]) index = j;
        result.push(nums[index]);
    }
    console.log(result)
    // console.log(deque)
    return result;
}

// Solution
var maxSlidingWindow = function(nums, k) {
    let result = [];
    let queue = [];
    let i = 0;
    let j = 0;
    while(j < nums.length) {
        while(queue.length && nums[queue[queue.length-1]] < nums[j]) {
            queue.pop();
        }
        queue.push(j);

        if(i > queue[0]) {
            queue.shift();
        }

        if(j + 1 >= k) {
            result.push(nums[queue[0]]);
            i++;
        }
        j++;
    }
    console.log(result);
    return result;
}

let nums = [1,3,-1,-3,5,3,6,7] 
let k = 3
nums = [1,3,1,2,0,5]
k = 3
nums= [-7,-8,7,5,7,1,6,0]
k= 4
nums= [9,10,9,-7,-4,-8,2,-6]
k= 5

maxSlidingWindow(nums, k);