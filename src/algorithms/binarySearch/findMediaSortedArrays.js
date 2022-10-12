/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let result= mergeTwoArrays(nums1, nums2);
    let midpoint = Math.floor((result.length-1)/2);
    result = result.length % 2 === 0 ? (result[midpoint]+result[midpoint+1])/2 : result[midpoint];
    // console.log(result)
    return result;
};

function mergeTwoArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while(arr1[i] !== undefined && arr2[j] !== undefined) {
        if(arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j = j + 1;
        } else {
            result.push(arr1[i]);
            i = i + 1;
        }
    }
    result = arr1[i] === undefined ? result.concat(arr2.slice(j)) : result.concat(arr1.slice(i));
    console.log(result);
    return result
}

let nums1 = [1,5,10]
let nums2 = [3,4,7]
findMedianSortedArrays(nums1, nums2);

var findMedianSortedArrays2 = function(nums1, nums2) {
    let [A, B] = [nums1, nums2];
    if(A.length > B.length) {
        [A, B] = [B, A];
    }
    let total = A.length + B.length;
    let half = Math.floor(total/2);
    let i = 0;
    let j = A.length - 1;
    while(true) {
        let mid = Math.floor((i + j)/2);
        let j = total - half - 2;
        let Aleft = mid >= 0 ? A[mid] : -Number.MIN_SAFE_INTEGER;
        let Aright = mid + 1 < j ?  A[mid + 1] : Number.MAX_SAFE_INTEGER;
        let Bleft = j >=0 ? j : -Number.MIN_SAFE_INTEGER;
        let Bright 
 
    }
}