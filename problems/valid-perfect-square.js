// Source : https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num === 1) return true;
  
  var x = parseInt(num / 2);
  var t = x * x;
  
  while(t > num) {
      x = parseInt(x / 2);;
      t = x * x;
  }
  
  for(var i = x; i < x*2; i ++) {
      if(i * i ===  num)  return true;
  }
  
  return false;
};