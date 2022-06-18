/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i < nums.length; i++) {
        current = map.get(nums[i]);
        if(current) current.push(i)
        else map.set(nums[i], [i]);
    }
    
    let delta;
    for(let i=0; i < nums.length; i++) {
        delta = target - nums[i];
        if(n= map.get(delta)) {
           if(nums[i] !== delta) {
               return [i, n[0]]
           } else if(n.length > 1){
               return [i, n[1]]
           }
        }
    }
};