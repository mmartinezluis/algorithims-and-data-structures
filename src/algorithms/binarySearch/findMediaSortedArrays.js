/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let med1 = med2 = 0;
    let length1 = nums1.length;
    let length2 = nums2.length;
    if(length1) {
        if(length1 % 2 === 0) {
            const midIndex = Math.floor((length1-1)/2);
            med1 = (nums1[midIndex] + nums1[midIndex+1])/2;
        } else med1 = nums1[midIndex];
    }
    if(length2) {
        if(length2 % 2 === 0) {
            const midIndex = Math.floor((length2-1)/2);
            med2 = (nums2[midIndex] + nums2[midIndex+1])/2;
        } else med2 = nums2[midIndex];
    }
    return (med1 + med2)/2;
};

