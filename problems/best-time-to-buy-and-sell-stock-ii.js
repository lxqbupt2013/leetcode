// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
// 获取元素相邻值
var maxProfit = function(prices) {
  var sum = 0;
  
  for(var i = 0; i < prices.length; i++) {
      if(prices[i+1] > prices[i]) {
          sum = sum + prices[i+1] - prices[i];
      }
  }
  
  return sum;
  
};