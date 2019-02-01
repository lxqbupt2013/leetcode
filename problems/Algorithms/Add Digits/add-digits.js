// Source : https://leetcode.com/problems/add-digits/
// Author : Han Zichi
// Date   : 2015-08-17

/**
 * @param {number} num
 * @return {number}
 */
// 把各位数字相加，直到剩个位
var addDigits = function(num) {
  while(num.toString().length !== 1) {
    var sum = 0;
    while (num) {
      sum += num % 10;
      num = ~~(num / 10);
    }
    num = sum;
  }

  return num;
};
