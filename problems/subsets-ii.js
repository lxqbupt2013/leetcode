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


var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let r = [];
  const func = (arr, _r='') => {
    if (arr.length === 0) {
      if (!r.includes(_r)) {
        r.push(_r);
      }
      return;
    }
    func(arr.slice(1), _r === '' ? `${arr[0]}` : `${_r}|${arr[0]}`);
    func(arr.slice(1), _r);
  }
  
  func(nums);
  
  return r.map(_r => _r === '' ? [] : _r.split('|').map(_n => +_n));
};