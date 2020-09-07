/**
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Given n pairs of parentheses,
 * write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * "((()))", "(()())", "(())()", "()(())", "()()()"
 */

/**
 * @param {number} n
 * @return {string[]}
 */

 // 思路： 两个计数器，一个用来存储左符号剩余个数，一个用来记录右符号剩余个数
 // 只要左符号数比右符号数多即可
var generateParenthesis = function (n) {
  if (n === 0) return [];
  if (n === 1) return ['()'];
  
  var left = n;
  var right = n;
  var stack = [];
  
  a(n, n, stack, '')
  
  return stack;
};

// 递归子串
var a = function (left, right, stack, tempStr) {
  
  if (left === 0 && right === 0) {
     stack.push(tempStr); 
  }
  if (left > 0) {
      a(left-1, right, stack, tempStr + '(');
  }
  if (right > 0 && right > left) {
      a(left, right-1, stack, tempStr + ')');
  }

};
