/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time complexity: O(n); space complexity: O(n)
 var topKFrequent = function(nums, k) {
    // Solution: construct a priority queue based on the frequency 
    // of each of the elements in nums array
    const freqList = {};
    for(let i=0; i < nums.length; i++) {
        const element = nums[i];
        freqList[element] = ++freqList[element] || 1;
    }
    
    const heap = new PriorityQueue();
    for(let key in freqList){
        heap.add({value: key, priority: freqList[key]})   
    }

    const result = [];
    
    for(let i=0; i < k; i++) {
        result.push(parseInt(heap.extractMax().value));
    }
    
    return result;
    
};


class PriorityQueue {
    constructor(values){
        this.values = values || [];
    }

    add(node) {
      this.values.push(node);
      this.bubbleUp();  
      return this.values
    }

    bubbleUp(){
        if(this.values.length === 1) return;
        let nodeIndex = this.values.length -1;
        const node = this.values[nodeIndex];
        let parentIndex = Math.floor((nodeIndex-1)/2);
        let parent = this.values[parentIndex];
        while(node.priority > parent.priority) {
            swap(this.values, nodeIndex, parentIndex);
            nodeIndex = parentIndex;
            parentIndex = Math.floor((nodeIndex-1)/2);
            if(parentIndex < 0) break;
            parent = this.values[parentIndex];
        }
    }

    extractMax() {
        if(this.length === 0) return
        let nodeIndex = this.values.length-1;
        swap(this.values, 0, nodeIndex);
        const max = this.values.pop()
        this.sinkDown();
        return max;
    }

    sinkDown() {
        if(this.values.length <= 1) return 
        let nodeIndex = 0;
        const node = this.values[0];
        let leftChild = this.values[1];
        let rightChild = this.values[2];
        let childIndex = rightChild && rightChild.priority > leftChild.priority ? 2 : 1;
        let child = this.values[childIndex];
        while(node.priority < child.priority) {
            swap(this.values, nodeIndex, childIndex);
            nodeIndex = childIndex;
            leftChild = this.values[2*nodeIndex + 1];
            if(!leftChild) break;
            rightChild = this.values[2*nodeIndex + 2];
            childIndex = rightChild && rightChild.priority > leftChild.priority ? 2*nodeIndex + 2 : 2*nodeIndex + 1;
            child = this.values[childIndex]
        }
    }
}

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}


 var topKFrequent = function(nums, k) {

    const freqList = {};
    let element;
    for(let i=0; i < nums.length; i++) {

        element = nums[i];
        freqList[element] = ++freqList[element] || 1;
    }

    const keys = Object.keys(freqList).sort((a,b) => freqList[b] - freqList[a]);
    return keys.slice(0, k);
};

