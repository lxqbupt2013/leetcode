// Source : https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
// 把各位数字相加，直到剩个位
var addDigits = function(num) {
    return ((num - 1) % 9 + 1);
};


function addDigits(num) {
  if (!num) {
    return 0;
  }
  return num % 9 || 9; // pattern goes 1-9 then repeats
};