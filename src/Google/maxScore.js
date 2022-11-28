/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// Strategy: use a sliding window of size cardPoints.length - k, that is,
// size equal to remainder of k; move the window from begignning to end of 
// input array; keep the minimum sum form the window;
// return the array total sum minus the window min sum or the array total sum if window is size 0
 var maxScore = function(cardPoints, k) {
    let total = 0;
    let windowSum = 0;
    let sum = Number.MAX_SAFE_INTEGER;
    const windowSize = cardPoints.length - k;
    let j = 0;
    for(let i = 0; i < cardPoints.length; i++) {
        windowSum += cardPoints[i];
        if(i - j + 1 >= windowSize && windowSize) {
            sum = Math.min(sum, windowSum)
            windowSum -= cardPoints[j];
            j++;
        }
        total += cardPoints[i];
    }
    console.log(sum, total);
    return sum !== Number.MAX_SAFE_INTEGER ? total - sum : total;
};


// Examples
let cardPoints = [11,49,100,20,86,29,72]; let k = 4

// cardPoints = [1,2,3,4,5,6,1], k = 3

// cardPoints = [96,90,41,82,39,74,64,50,30], k = 8
cardPoints= [9,7,7,9,7,7,9], k = 7

maxScore(cardPoints, k)

// [11,100,49,20,86,29,72]

// [49,100,11,20,86,29,72]
// left = 180
// right = 207

// left, left = 149
// right, right = 91
// total = 240


// remove = 11 + 20 + 86 = 135

total = 367
