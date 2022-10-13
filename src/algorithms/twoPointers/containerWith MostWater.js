/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let j = Math.floor(height.length/2);
    let i = j -1;
    let max = 0;  
    while(i >= 0 && j < height.length ) {
        const min = Math.min(height[i], height[j]);
        max = Math.max(max, min*(j-i));
        if(height[j+1] > height[i-1] || height[j+1] < height[i]) {
            max = Math.max(max, Math.min(height[j], height[j+1]) );
            j = j+1;
        } else if(i > 0) {
            max = Math.max(max, Math.min(height[i], height[i-1]) );
            i = i -1;
        } else {
            if(j < height.length -1) max = Math.max(max, Math.min(height[j], height[j+1]) );
            j = j+1;
        }
    }
    console.log(max)
    return max;
};

let height= [4,3,2,1,4]
height = [2,3,4,5,18,17,6]
height = [10,14,10,4,10,2,6,1,6,12]
maxArea(height)