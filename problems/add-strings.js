// Source : https://leetcode.com/problems/add-strings/
// Author : Han Zichi
// Date   : 2016-10-09

// "use strict";

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let num1Len = num1.length;
  let num2Len = num2.length;
  let maxLen = num1.length > num2.length ? num1.length : num2.length;
  maxLen++;
  let carry = 0;
  let total = '';
  for (let i = 0; i< maxLen; i++) {
      if (i === (maxLen-1) && carry === 0) {
          continue;
      }
      let pos = num1Len-i-1;
      let a = pos < 0? 0: (num1.charCodeAt(pos) - 48);
      pos = num2Len-i-1;
      let b = pos < 0? 0: (num2.charCodeAt(pos) - 48);
      let t =  a + b + carry;
      carry = Math.floor(t/10);
      total =  (t % 10) + total;
  }
  return total;
};



var addStrings = function(num1, num2) {
  if (num1 === '0' && num2 === '0') {
      return '0';
  }
  
  if (num1 === '0') {
      return num2;
  }
  
  if (num2 === '0') {
      return num1;
  }
  
  num1 = num1.split('');
  num2 = num2.split('');
  var i = num1.length - 1;
  var j = num2.length - 1;
  var tempSum = 0;
  var carry = 0;
  var result = [];
  var numOne;
  var numTwo;
  
  while (i >= 0 || j >= 0) {
      numOne = Number(num1[i]);
      numTwo = Number(num2[j]);
      if (i < 0) {
          numOne = 0;
      }
      if (j < 0) {
          numTwo = 0;
      }
      tempSum = numOne + numTwo + carry;
      carry = 0;
      
      if (tempSum > 9) {
          carry = 1;
          result.unshift(tempSum % 10);
      } else {
          result.unshift(tempSum);
      }
       
      i--;
      j--;
  }
  
  if(carry === 1) {
      result.unshift(1);
  }
  
  return result.join('').toString();
};