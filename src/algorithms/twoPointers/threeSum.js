/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let input = nums.sort((a,b) => a - b);
    let result = [];
    for(let i=0; i < nums.length; i++) {
        if(input[i] > 0) break;
        if(nums[i-1] === nums[i]) continue;
        const target = -input[i];
        let k = i + 1;
        let j = nums.length -1; 
        while(k < j) {
            const sum = input[k] + input[j];
            if(sum === target) {
                result.push(tripple(input, i, j, k));
                k++;
                j--;
                while(input[k-1] === input[k]) {
                    k++;
                }
            } else if(sum > target){j--;}
            else k++;
        }
    }
    console.log(result);
    return result;
};

function tripple(arr, i, j, k) {
    return [arr[i], arr[j], arr[k]];
}


// TEST
let nums =[-1,0,1,2,-1,-4]
//  nums = [1,-1,-1,0]
//  nums = [-1,-1,0,1]
nums= [-2,0,0,2,2]
nums = [1,-1,-1,0]
// nums = [-1,-1,0,1]
// nums = [1,2,-2,-1]
threeSum(nums)