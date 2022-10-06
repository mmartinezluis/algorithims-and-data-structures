/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     if(!nums.length) return -1;
     if(nums.length === 1 && nums[0] === target) return 0;
    let i=0;
    let j= nums.length-1;
    let pointer;
    while(i <= j) {
        pointer = Math.floor((i+j)/2);
        if(nums[pointer] === target) return pointer;
        if(nums[pointer] < target) {
            i = pointer+1;
        } else j = pointer-1;
    }
    return -1;
};