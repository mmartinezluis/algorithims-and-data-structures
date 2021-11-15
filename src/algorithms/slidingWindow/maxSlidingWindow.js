// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

// SOLUTION 1
// My first, original solution
// Poor performance: 17% fater; 44% less memory; 
 var maxSlidingWindow = function(nums, k) {
    if(nums.length < k) return null;
    if(k === 1) return nums;
    let max = -Infinity;
    let result = [];
    
    for(let i =0; i< k; i++){
        max = Math.max(max, nums[i])
    }
    result.push(max);
    
    for(let i = k; i< nums.length; i++) {
        let partialMax = -Infinity;
        if(max === nums[i-k]) {
            for(let w = i - k +1; w < i+1; w++) {
                max = Math.max(partialMax, nums[w])
                partialMax = max;
            }
        } else {
            max = Math.max(max, nums[i])
        }
        result.push(max)
    }
    return result;
};


// ----------------------------------------------------
// SOLUTION 2

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length -1;
        let element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex];
            if(element < parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    extraMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown(){
        let index = 0;
        let node;
        let child1, child2;
        while(index < this.values.length -1) {
            node = this.values[index];
            let childIndex = 2*index+1;
            let swapIndex = null;
            child1 = this.values[childIndex];
            child2 = this.values[childIndex+1];
            if(child1 && node < child1) swapIndex = childIndex;
            if(child2 && node < child2 && child2 > child1) swapIndex = childIndex +1;
            if(swapIndex === null) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = node;
            index = swapIndex;
        }
    }
}



 var maxSlidingWindow = function(nums, k) {
    if(nums.length < k) return null;
    if(k === 1) return nums;
    let max = -Infinity;
    let result = [];
    
    for(let i =0; i< k; i++){
        max = Math.max(max, nums[i])
    }
    result.push(max);
    
    for(let i = k; i< nums.length; i++) {
        let partialMax = -Infinity;
        if(max === nums[i-k]) {
            for(let w = i - k +1; w < i+1; w++) {
                max = Math.max(partialMax, nums[w])
                partialMax = max;
            }
        } else {
            max = Math.max(max, nums[i])
        }
        result.push(max)
    }
    return result;
};




// ---------------------------------
// SOLUTION 3
// this does not work, the max calculation time is exceeded due to using sorting method

var maxSlidingWindow = function(nums, k) {
    if(nums.length < k) return null;
    if(k === 1) return nums;
    let max = -Infinity;
    let window = [];
    let result = [];
    
    for(let i =0; i< k; i++){
        max = Math.max(max, nums[i])
        window.push(nums[i])
    }
    result.push(max);
    
    for(let i = k; i< nums.length; i++) {
        let tempWindow;
        window.shift();
        window.push(nums[i])
        tempWindow = window.slice(0)
        const integer = tempWindow.sort((a,b) => a-b)
        const final = integer[k-1]
        result.push(final);
    }   
    return result;
};

