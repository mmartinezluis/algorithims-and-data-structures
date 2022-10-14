/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let i = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    let ans = 0;
    while(i + 1 < prices.length) {
        if(prices[i+1] > prices[i]) {
            min = Math.min(min, prices[i]);
            ans = Math.max(ans, prices[i+1] - min);
        }
        i++;
    }
    console.log(ans);
    return ans;
};

let prices = [7,1,5,3,6,4]
prices = [7,6,4,3,1]
prices = [2,1,2,0,1]
maxProfit(prices)
