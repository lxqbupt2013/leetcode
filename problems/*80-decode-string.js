// Source : https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  if (!s || s.length === 0) { return ''; }
  
  var digits = [];
  var strings = [];
  strings.push('');
  
  for (let i = 0; i < s.length; i++) {
      // is a number
      if (!isNaN(s.charAt(i))) {
          let number = '';
          while (!isNaN(s.charAt(i))) {
              number += s.charAt(i);
              i++;
          }
          i--;
          digits.push(parseInt(number));
      } else if (s.charAt(i) === '[') {
          strings.push('');
      } else if (s.charAt(i) === ']') {
          let count = digits.pop();
          let chars = strings.pop();
          let substring = '';
          for (let j = 0; j < count; j++) {
              substring += chars;
          }
          strings.push(strings.pop() + substring);
      } else {
          strings.push(strings.pop() + s.charAt(i));
      }
  }
  
  return strings[0];
};