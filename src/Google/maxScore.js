/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    let count = 0;
    let total = 0;
    let left = 0;
    let right = cardPoints.length -1;
    while(left < right || count < k) {
        if(cardPoints[left] > cardPoints[right]) {
            total += cardPoints[left];
            left++;
        } else {
            total += cardPoints[right];
            right++;
        }
        count++;
    }
    return total;
};