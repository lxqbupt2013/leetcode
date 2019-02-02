// Source : https://leetcode.com/problems/arithmetic-slices/
// Author : Han Zichi
// Date   : 2016-10-17

"use strict";

/**
 * @param {number[]} A
 * @return {number}
 */
// 给你一串数字，返回这串数字中能够构成等差数列的子串的数目
// https://blog.csdn.net/camellhf/article/details/52824234
var numberOfArithmeticSlices = function(A) {
  var count = 0;
  var add = 0;
  
  for (var i = 2; i < A.length; i ++) {
      if (A[i - 1] - A[i] === A[i - 2] - A[i - 1]) {
          add = add + 1;
          count = count + add;
      }
      else {
          add = 0;
      }
  }
  
  return count;
};


var numberOfArithmeticSlices = function(A) {
  var ret=0, i,j;
  for(i=1;i<A.length;i=j) {
      for(j=i+1;j<A.length && A[j]-A[j-1] == A[i]-A[i-1];++j);
      ret += (j-i)*(j-i-1)/2;
  }
  return ret;
};