// Source : https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if(nums.length < k) return nums;
  
  var hash = {};
  for(var i = 0; i < nums.length; i ++) {
      if(hash[nums[i]] === undefined) hash[nums[i]] = 1;
      else hash[nums[i]] ++;
  }
  
  var arr = Object.keys(hash).sort(function(a, b) {
      return hash[b] - hash[a];
  });
  
  return arr.slice(0, k);
};