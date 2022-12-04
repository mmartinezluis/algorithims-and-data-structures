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

// Using cumulative sum
var subarraySum = function(nums, k) {

}