/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let L = [];
    let R = [];

    L[0] = 1;
    R[nums.length-1] = 1;

    let j = nums.length -2;
    
    for(let i=1; i < nums.length; i++) {

        L[i] = L[i-1] * nums[i-1];

        R[j] = R[j+1] * nums[j+1];
        
        j--;
    }

    let result = [];
    for(let i =0; i < L.length; i++) {
        result.push(L[i]*R[i]);
    }

    return result;
    
};