/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ********** Solution 1: linear space complexity
// Product of left and right product lists
 var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    const length = nums.length;
    left[0] = 1;
    right[length - 1] = 1;

    let j = length - 2;
    for(let i=1; i < length; i++) {
        left[i] = left[i-1]*nums[i-1];
        right[j] = right[j+1]*nums[j+1];
        j--;
    }
    
    let result = [];
    for(let i=0; i < length; i++) {
        result[i] = left[i]*right[i];
    }
    console.log(result)
    return result;
 }

// Solution 2: constant space complexity
// create left and right product lists on the fly
 var productExceptSelf = function(nums) {
    let result = [];
    result[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        result[i] = result[i -1]*nums[i-1];
    }

    let right = 1;
    for(let j = nums.length -1; j >= 0; j--) {
        result[j] = result[j]*right;
        right = right*nums[j]
    }
    console.log(result);
    return result;
 }

 let nums = [2,5,3,9,4];
 productExceptSelf(nums);