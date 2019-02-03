// Source : https://leetcode.com/problems/4sum-ii/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let map = new Map();
  let sum;
  let count;
  for (let numA of A) {
    for (let numB of B) {
      sum = numA + numB;
      count = map.get(sum) || 0;
      map.set(sum,count+1);
    }
  }
  let tuples = 0;
  for (let numC of C) {
    for (let numD of D) {
      sum = - numC - numD;
      tuples += map.get(sum) || 0
    }
  }
  return tuples;
};



/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let map = new Map();
  let res = 0;

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      map.set(C[i] + D[j], (typeof map.get(C[i] + D[j]) == 'undefined') ? 1 : map.get(C[i] + D[j]) + 1);
    }
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      res += (typeof map.get((A[i] + B[j]) * -1) == 'undefined') ? 0 : map.get((A[i] + B[j]) * -1);
    }
  }

  return res;
};
