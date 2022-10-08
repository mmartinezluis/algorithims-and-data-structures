/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    const pivot = findRotationIndex(nums);
    return nums[pivot];
};

function findRotationIndex(arr) {
    let left = 0;
    let right = arr.length -1;
    if(arr[left] <= arr[right]) return 0;
    let pivot;
    while(left <= right) {
        pivot = Math.floor((left + right)/2);
        if(arr[pivot] > arr[pivot +1]) {
            return pivot +1;
        }
        if(arr[pivot] < arr[left]) {
            right = pivot - 1;
        } else left = pivot + 1;
    }
}


let nums = [4,5,6,7,1,2,3]
nums = [3,4,5,1,2]
findMin(nums)