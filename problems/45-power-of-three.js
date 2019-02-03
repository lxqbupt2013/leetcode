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
// 由于输入是int，正数范围是0-231，在此范围中允许的最大的3的次方数为319=1162261467
// 那么我们只要看这个数能否被n整除即可
var isPowerOfThree = function (n) {
  if (n === 0) return false;
  return (n > 0 && 1162261467 % n === 0);
};


var isPowerOfThree = function(n) {
  if (!n) return false;
  var a = Math.log(n) / Math.log(3);
  return Math.pow(3, Math.floor(a)) === n || Math.pow(3, Math.ceil(a)) === n;
};


// power of four
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (!num)
    return false;

  var a = Math.log(num) / Math.log(4);
  return Math.pow(4, Math.floor(a)) === num || Math.pow(4, Math.ceil(a)) === num;
};
