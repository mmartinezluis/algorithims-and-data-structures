/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    const result= select(nums, 0, nums.length-1, nums.length - k);
    return result;
};

function select(arr, left, right, k) {
    let pivotIndex = Math.floor(Math.random()*(right - left) + left);
    pivotIndex = partition(arr, left, right, pivotIndex);
    if(k === pivotIndex) {
        return arr[k];
    } else if(k < pivotIndex) {
        return select(arr, left, pivotIndex -1, k);
    } else {
        return select(arr, pivotIndex+1, right, k)
    }
}

function partition(arr, left, right, pivot) {
    let value = arr[pivot];
    let pivotIndex = left;
    swap(arr, pivot, right);
    for(let i=left; i < right; i++) {
        if(arr[i] < value) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, right, pivotIndex);
    return pivotIndex;
}

function swap(arr, index1, index2) {
    [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
}

let array = [22,-4, 11, 8, 3, 5, -2, 0], k = 8
// array = [3,5,-2], k=2
// partition(array,0,7, k);
findKthLargest(array, k)