/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Brute force solution:
// Use nested loops to iterate over all the possible subarrays
 var subarraySum = function(nums, k) {
    let count = 0;
    for(let start = 0; start < nums.length; start++) {
        for(let end= start+1; end <= nums.length; end++) {
            let sum = 0;
            for(let i= start; i < end; i++) {
                sum += nums[i];
                if(sum === k) count++;
            }
        }
    }
    return count;
};

// Using cumulative sum; solves the problem but runs out of time
var subarraySum = function(nums, k) {
    let cumSum = new Array(nums.length + 1);
    cumSum[0] = 0;
    for(let i = 1; i <= nums.length; i++) {
        cumSum[i] = cumSum[i - 1] + nums[i - 1];
    }
    let count = 0;
    for(let start = 0; start < nums.length; start++) {
        for(let end= start + 1; end <= nums.length; end++) {
            if((cumSum[end] - cumSum[start]) === k) {
                count++;
            }
        }
    }
    return count;
}


// Using cumulative sum, contant space; solves the problem but runs out of time
var subarraySum = function(nums, k) {
    let count = 0;
    for(let start=0; start < nums.length; start++) {
        let sum = 0;
        for(let end=start; end < nums.length; end++) {
            sum += nums[end];
            if(sum === k) {
                count++;
            }
        }
    }
    return count;
}