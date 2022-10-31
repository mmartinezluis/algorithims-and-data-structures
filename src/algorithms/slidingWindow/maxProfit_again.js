/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {    
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    for(let right=0; right < prices.length; right++) {
        min = Math.min(min, prices[right]);
        if(prices[right] > min) {
            profit = Math.max(profit, prices[right] - min)
        }
    }
    console.log(profit)
    return profit;
 }

 let prices = [7,1,5,3,6,4]
// prices = [7,6,4,3,1]
// prices = [2,1,2,0,1]
// prices = [7,3,5,6,1,7]
maxProfit(prices);