// Source : https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// padStart()和padEnd()用于字符串补全
var addBinary = function(a, b) {
  var maxlen = Math.max(a.length, b.length);
  a = a.padStart(maxlen, '0');
  b = b.padStart(maxlen, '0');
  
  var carry =  0;
  var sum = 0;
  var res = "";
  for(var i = maxlen - 1; i >= 0; i--) {
      sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry;
      carry = sum >= 2 ? 1 : 0;

      if (sum == 2) res = '0' + res;
      else if (sum == 3) res = '1' + res;
      else res = sum.toString() + res;
  }

  if (carry) res = '1' + res;

  return res;
};