/**
 * https://leetcode.com/problems/coin-change/
 *
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Example 1:
 * coins = [1, 2, 5], amount = 11
 * return 3 (11 = 5 + 5 + 1)
 *
 * Example 2:
 * coins = [2], amount = 3
 * return -1.
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 动态规划：dp[i]表示组成金额i需要的最小硬币数
var coinChange = module.exports = function (coins, amount) {
  if (coins.length === 0) return -1;
  if (amount === 0) return 0;
  coins.sort(function (a, b) { return a - b; });

  var dp = [];
  dp[0] = 0;
  for(var i = 0; i < amount; i++) {
    for(var j = 0; j < coins.length; j++) {
      if(coins[j] <= i) {
        dp[i] = Math.min(dp[i-coins[j]] + 1, dp[i])
      }

    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
