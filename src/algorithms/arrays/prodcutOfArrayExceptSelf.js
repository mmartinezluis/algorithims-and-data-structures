/**
 * @param {number[]} nums
 * @return {number[]}
 */

// (Does not Work; need to revisit)
// Extra space complexity (O(1))
 var productExceptSelf = function(nums) {
    let L = 1;
    let R = 1;
    let j = nums.length -2;
    let result = [];
    for(let i=1; i < nums.length; i++) {
         L= L * nums[i-1];
         R= R * nums[j+1];
        if(result[i]){
            result[i] = L*result[i];
            result[j] = R*result[j];
        } else {
         result[i] = L
         result[j] = R;
        }
        j--;
    }
    return result;
};

// Works; O(n) space complexity; O(n) time complexity
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