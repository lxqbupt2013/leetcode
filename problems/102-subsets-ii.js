// Source : https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  const func = (result, temp, arr, start) => {
    result.push(temp.slice());
    for (let i = start; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] && i !== start) continue;
      temp.push(arr[i]);
      func(result, temp, arr, i + 1);
      temp.pop();
    }
  }
  
  const result = [];
  func(result, [], nums, 0);
  
  return result;
};