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
var generateParenthesis = function (n) {
  if (n === 0) return [];
  if (n === 1) return ['()'];
  
  var left = n;
  var right = n;
  var stack = [];
  
  a(n, n, stack, '')
  
  return stack;
};

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
