/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let l =0;
    let leftMax = 0;
    let r = height.length -1;
    let rightMax = 0;
    let w = 0;
    while(l < r) {
        if(height[l] < height[r]) {
            if(leftMax > height[l]) {
                w += leftMax - height[l];
            } else leftMax = height[l];
            l++;
        } else {
            if(rightMax > height[r]) {
                w += rightMax - height[r];
            } else rightMax = height[r]
            r--;
        }
    }
    return w;
 }