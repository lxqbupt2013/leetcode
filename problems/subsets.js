// Source : https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  const func = (arr, temp=[]) => {
    if (arr.length === 0) res.push(temp);
    else {
      func(arr.slice(1), temp.concat(arr[0]));
      func(arr.slice(1), temp);
    }
  }
  
  func(nums);
  return res;
};