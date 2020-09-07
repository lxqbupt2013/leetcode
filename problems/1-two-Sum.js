/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers, find two numbers such that they add up to a
 * specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2) are not
 * zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 重要前提： 一定有一个唯一的解决方案

 // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
var twoSum = function (nums, target) {
  // Use a hash to store value-to-index pairs
  var hash = nums.reduce(function (prev, item, index) {
    // prev是一个对象，通过reduce函数的初始值传进来的空对象
    if (prev[item] === undefined) {
      prev[item] = index;
      return prev;
    }
    /**
     * Maybe there are two same numbers, for example:
     * Input: numbers={2, 5, 5, 7}, target = 10
     * Output: index1=1, index2=2
     * So we save the index array
     */
    prev[item] = [prev[item], index];
    return prev;
  }, {});
  var i;
  // Loop over hash
  for (i in hash) {
    // If hash[i] is an array, then check if i * 2 equals to target
    if (hash[i] instanceof Array && i * 2 === target) {
      return [hash[i][0] + 1, hash[i][1] + 1].sort(function (a, b) {
        return a - b;
      });
    // Check if hash[target - 1] is undefined, only take O(1) time complexity
    } else if (hash[target - i] !== undefined) {
      return [hash[i] + 1, hash[target - i] + 1].sort(function (a, b) {
        return a - b;
      });
    }
  }

  return null;
};
