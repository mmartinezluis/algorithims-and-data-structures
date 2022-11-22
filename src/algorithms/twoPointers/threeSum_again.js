/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let left, right;
    let response =[];
    for(let ptr = 0; ptr < nums.length; ptr++) {
        if(nums[ptr] === nums[ptr-1]) continue;
        left = ptr+1;
        right = nums.length-1;
        const target = -1*nums[ptr];
        while(left < right) {
            const sum = nums[left] + nums[right];
            if(sum === target) {
                response.push([nums[ptr], nums[left], nums[right]]);
                left++;
                right--;
                while(nums[left] === nums[left-1]) left++;
            } else if(sum < target){left++;}
            else right--;
        }
    }
    return response;
 }