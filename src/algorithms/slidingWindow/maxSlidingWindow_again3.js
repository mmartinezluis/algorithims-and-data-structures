/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 var maxSlidingWindow = function(nums, k) {
    let i =0;
    let queue = [0]
    let result = [];
    for(let j =1; j < nums; j++) {

        while(nums[queue[0]] < nums[j]) {
            queue.shift();
        }
        queue.push(j);

        if(j - i + 1 >= k) {
            result.push(nums[queue[0]]);
            i++;
            if(i > queue[0]) {
                queue.shift();
            }
        }
    }
    console.log(result)
    return result;
 }

let nums = [1,3,-1,-3,5,3,6,7] 
let k = 3
// nums = [1,3,1,2,0,5]
// k = 3
// nums= [-7,-8,7,5,7,1,6,0]
// k= 4
// nums= [9,10,9,-7,-4,-8,2,-6]
// k= 5
maxSlidingWindow(nums, k)