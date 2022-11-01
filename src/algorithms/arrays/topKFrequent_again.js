/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Solution 1: using a max binary heap
// Strategy: construct a max binary heap out of the input array;
// extract the max element as many times as k, and push element
// to output array. Return output array
 var topKFrequent = function(nums, k) {
    const heap = new PriorityQueue();
    let map = {};
    for(let int of nums) {
        const key = int.toString();
        map[key] = ++map[key] || 1;
    }
    for(let key in map) {
        heap.add({int: key, freq: map[key]});
    }
    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(heap.extractMax().int);
    }
    return result;
 }

 class PriorityQueue {
    constructor() {
        this.values = [];
    }

    add(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length -1;
        while(index > 0) {
            const node = this.values[index].freq;
            let parentIndex = Math.floor((index -1)/2);
            const parent = this.values[parentIndex].freq;
            if(parent > node) break;
            swap(this.values, parentIndex, index);
            index = parentIndex;
        }
    }

    extractMax() {
        const value = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return value;
    }

    bubbleDown() {
        let index = 0;
        while(index < this.values.length - 1) {
            let swapIndex;
            const node = this.values[index].freq;
            let childIndex = 2*index + 1;
            const child1 = this.values[childIndex];
            const child2 = this.values[childIndex + 1];
            if(child1 !== undefined && node < child1.freq) swapIndex = childIndex;
            if(child2 !== undefined && child2.freq > child1.freq && child2.freq > node) swapIndex = childIndex + 1;
            if(swapIndex === undefined) break;
            swap(this.values, index, swapIndex);
            index = swapIndex;
        }
    }
 }

 function swap(arr, u, v) {
    [arr[u], arr[v]] = [arr[v], arr[u]]
 }