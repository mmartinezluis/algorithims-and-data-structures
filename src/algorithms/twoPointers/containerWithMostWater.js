/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length -1;
    let max = 0;
    while(i < j) {
        const width = j - i;
        max = Math.max(max, width*( Math.min(height[i], height[j])) );
        if(height[i] <= height[j]) {
            i += 1;
        } else j -= 1;
    }
    return max;
}

let height= [4,3,2,1,4]
height = [2,3,4,5,18,17,6]
height = [10,14,10,4,10,2,6,1,6,12]
maxArea(height)