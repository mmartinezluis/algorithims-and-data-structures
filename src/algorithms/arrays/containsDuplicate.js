/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let seen = {}
    for(let int of nums) {
        if(seen[int] !== undefined) {
            return true;
        } else seen[int] = true;
    }
    return false;
 }