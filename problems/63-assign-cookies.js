// Source : https://leetcode.com/problems/assign-cookies/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort(function(a, b) {
      return a - b;
  })
  s.sort(function(a, b) {
      return a - b;
  })
  
  var i = 0;
  var j = 0;
  var count = 0;
  
  while(i < g.length && j < s.length) {
      if(g[i] <= s[j]) {
          count ++;
          i ++;
          j ++;
      } else {
          j ++;
      }
  }
  
  return count;
};
