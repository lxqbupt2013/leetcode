/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * Reverse digits of an integer.
 *
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * Have you thought about this?
 *
 * Here are some good questions to ask before coding. Bonus points for you if
 * you have already thought through this!
 *
 * If the integer's last digit is 0, what should the output be? ie, cases such
 * as 10, 100.
 *
 * Did you notice that the reversed integer might overflow? Assume the input is
 * a 32-bit integer, then the reverse of 1000000003 overflows. How should you
 * handle such cases?
 *
 * For the purpose of this problem, assume that your function returns 0 when the
 * reversed integer overflows.
 */

 /**
  * @param {number} x
  * @return {number}
  */

// 注意： 所有涉及整数输出的题，要注意整数可表示范围的边界

var reverse = function (x) {
  var pn = x >= 0 ? '' : '-';
  var num = Math.abs(x);
  // 关键点一： 用split和reverse和join组合实现
  var result = Number(pn + num.toString().split('').reverse().join(''));
  // 关键点二： 范围检测，js可表示的最大整数范围是正负2的31次方
  if (result > Math.pow(2, 31)) {
    return 0;
  }
  if (result < 1 - Math.pow(2, 31)) {
    return 0;
  }
  return result;
};
