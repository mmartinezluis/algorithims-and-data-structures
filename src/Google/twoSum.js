var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i < nums.length; i++) {
        const delta = target - nums[i];
        if(map.has(delta) && map.get(delta) !== i) {
            return [map.get(delta), i]
        }
        map.set(nums[i], i);
    }
}

// x + y = t
// t - x = y