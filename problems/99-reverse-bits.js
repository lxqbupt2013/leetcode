// Source : https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var t = n.toString(2);
  
  var tmp = 32 - t.length;
  while(tmp > 0) {
      t = '0' + t;
      tmp --;
  }

  return parseInt(t.split('').reverse().join(''), 2);
};