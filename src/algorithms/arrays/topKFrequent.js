/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {

    const freqList = {};
    let element;
    for(let i=0; i < nums.length; i++) {

        element = nums[i];
        freqList[element] = ++freqList[element] || 1;
    }

    const keys = Object.keys(freqList).sort((a,b) => freqList[b] - freqList[a]);
    return keys.slice(0, k);
};