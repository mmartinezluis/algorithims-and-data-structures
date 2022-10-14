/**
 * @param {number[]} height
 * @return {number}
 */
// Two Pointers
 var trap = function(height) {
    let left = 0;
    let right = height.length -1;
    let left_max = 0;
    let right_max = 0;
    let units = 0;
    while(left < right) {
        if(height[left] < height[right]) {
            height[left] >= left_max ? left_max = height[left] : units += left_max - height[left];
            left++;
        } else {
            height[right] >= right_max ? right_max = height[right] : units += right_max - height[right];
            right--;
        }
    }
    return units;
};