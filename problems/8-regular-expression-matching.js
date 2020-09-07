/**
 * https://leetcode.com/problems/regular-expression-matching/
 *
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 */


 // *表示的是它前面那个字符的0-n次重复
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  var sLength = s.length;
  var pLength = p.length;

  // 关键点一： 针对几种特殊情况特殊处理
  if (pLength === 0) return sLength === 0;
  if (pLength === 1) {
    if (sLength !== 1) return false;
    if (p === '.') return true;
    return s === p;
  }
  if (p[1] !== '*') {
    if (sLength === 0) return false;
    if (s[0] !== p[0] && p[0] !== '.') return false;
    // 关键点二： 递归调用自身
    return isMatch(s.slice(1), p.slice(1));
  }
  // 关键点三： 如果*前的字符匹配0遍，作为特殊情况处理掉
  if (isMatch(s, p.slice(2))) return true;

  
  for (var i = 0; i < sLength; i++) {
    if (s[i] !== p[0] && p[0] !== '.') return false;
    if (isMatch(s.slice(i + 1), p.slice(2))) return true;
  }
  return false;
};
