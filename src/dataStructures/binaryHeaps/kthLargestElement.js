/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = mergeSort(nums);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    let index = this.nums.length -1;
    while(index > 0) {
        let parentIndex = Math.floor((index -1)/2);
        let parent = this.nums[parentIndex];
        if(parent > val) break;
        this.nums[parentIndex] = val;
        this.nums[index] = parent;
        index = parentIndex;
    }
    let nodeIndex = 0;
    this.k--;
    if(k === 0) return this.nums[nodeIndex];
    let child1Index;
    while(this.k > 0) {
        child1Index = 2*nodeIndex +1;
        const child1 = this.nums[child1Index];
        const child2 = this.nums[child1Index +1];
        this.k--;
        if(k === 0) return child1;
        nodeIndex = child1Index;
        if(child2 !== undefined) {
            this.k--;
            if(k === 0) return child2;
            nodeIndex = child1Index + 1;
        }   
    }
};



/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const midPoint = Math.floor(arr.length/2);
    let result = merge(mergeSort(arr.slice(0, midPoint), mergeSort(midPoint)));
    return result;
}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]) {
            result.push(arr2[i]);
            i++;
        } else {
            result.push(arr1[j]);
            j++;
        }
    }
    i < arr1.length ? result.concat(arr1.slice(i)) : result.concat(arr2.slice(j));
    return result;
}