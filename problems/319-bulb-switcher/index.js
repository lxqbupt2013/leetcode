/**
 * https://leetcode.com/problems/bulb-switcher/
 *
 * There are n bulbs that are initially off.
 * You first turn on all the bulbs. Then, you turn off every second bulb.
 * On the third round,
 * you toggle every third bulb (turning on if it's off or turning off if it's on).
 * For the nth round, you only toggle the last bulb.
 * Find how many bulbs are on after n rounds.
 *
 * Example:
 *
 * Given n = 3.
 *
 * At first, the three bulbs are [off, off, off].
 * After first round, the three bulbs are [on, on, on].
 * After second round, the three bulbs are [on, off, on].
 * After third round, the three bulbs are [on, off, off].
 *
 * So you should return 1, because there is only one bulb is on.
 */

/**
 * @param {number} n
 * @return {number}
 */

// 每个灯如果要在最后是开的必然是因为它被开关了奇数次，而一盏灯在第i轮要被开关只有它的index能被i整除
// 一个数除非是平方数，不然其因数必然是成对，那么最后开着的灯只可能是index是平方数的灯。
var bulbSwitch = module.exports = function (n) {
  // Math.sqrt() 计算平方根
  return Math.floor(Math.sqrt(n));
};
