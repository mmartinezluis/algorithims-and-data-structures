/**
* @param {number[]} nums
* @return {number}
*/
var longestConsecutive = function(nums) {
    let map = new Map();
    for(let int of nums) {
        if(!map.has(int)) map.set(int, int);
    }
    let start;
    let count;
    let max = 0;
    for(let int of nums) {
        start = int;
        if(!map.has(start-1)) {
            count = 1;
            while(map.has(start+1)) {
                map.delete(start)
                start++;
                count++;
            }   
            max = Math.max(max, count);
        }
    }
    console.log(max)
    return max;
}

nums = [100,4,200,1,3,2]
// nums = [0,3,7,2,5,8,4,6,0,1]
longestConsecutive(nums)

