/**
 * https://leetcode.com/problems/power-of-three/
 *
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 */

/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfThree = module.exports = function (n) {
//   if (n === 0) return false;
//   return Math.pow(3, n.toString(3).length - 1) === n;
// };

// 由于输入是int，正数范围是0-231，在此范围中允许的最大的3的次方数为319=1162261467
// 那么我们只要看这个数能否被n整除即可
var isPowerOfThree = module.exports = function (n) {
  if (n === 0) return false;
  return (n > 0 && 1162261467 % n === 0);
};
