// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

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