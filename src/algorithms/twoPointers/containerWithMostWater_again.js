/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let l = 0;
    let r = height.length -1;
    let area = 0;
    while(l < r) {
        const width = r - l;
        if(height[l] < height[r]) {
            area = Math.max(area, height[l]*width);
            l++;
        } else {
            area = Math.max(area, height[r]*width);
            r--;
        }
    }
    return area;
 }