/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k = k;
    let heap = [];
    for(let i=0; i < nums.length; i++) {
        heap.push(nums[i]);
        bubbleUp(heap);
    }
    while(heap.length > k) {
        extractMin(heap);
    }
    this.heap = heap;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val);
    bubbleUp(this.heap);
    if(this.heap.length > this.k) {
        extractMin(this.heap);
    }
    return this.heap[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

function bubbleUp(arr){
    let index = arr.length -1;
    let node, parentIndex, parent;
    while(index > 0) {
        node = arr[index];
        parentIndex = Math.floor((index -1)/2);
        parent = arr[parentIndex];
        if(parent < node) break;
        arr[parentIndex] = node;
        arr[index] = parent;
        index = parentIndex;
    }
}

function extractMin(arr) {
    const min = arr[0];
    const end = arr.pop();
    if(arr.length > 0) {
        arr[0] = end;        
        _bubbleDown(arr);
    }
    return min;
}

function _bubbleDown(arr) {
    let nodeIndex = 0;
    let node, childIndex, child1, child2;
    while(nodeIndex < arr.length -1) {
        let swapIndex = null;
        node = arr[nodeIndex];
        childIndex = 2*nodeIndex + 1;
        child1 = arr[childIndex];
        child2 = arr[childIndex +1];
        if(child1 !== undefined && node > child1) swapIndex = childIndex;
        if(child2 !== undefined && node > child2 && child2 < child1) swapIndex = childIndex +1;
        if(swapIndex === null) break;
        _swap(arr, nodeIndex, swapIndex)
        nodeIndex = swapIndex;
    }
}

function _swap(arr, index1, index2) {
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
}


// Test
let problem = new KthLargest(2, [0]);
problem.add(-1);
problem.add(1);
problem.add(2);
problem.add(-4);
problem.add(3)
console.log(problem.heap)

