/**
 * https://leetcode.com/problems/4sum/
 *
 * Given an array S of n integers, are there elements a, b, c,
 * and d in S such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note:
 *
 * - Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
 * - The solution set must not contain duplicate quadruplets.
 *
 * For example, given array S = {1 0 -1 0 -2 2}, and target = 0.
 *
 * A solution set is:
 * (-1,  0, 0, 1)
 * (-2, -1, 1, 2)
 * (-2,  0, 0, 2)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = module.exports = function (nums, target) {
//   nums.sort(function (a, b) { return a - b; });
//   var left;
//   var right;
//   var tempSum;
//   var result = [];
//   var existsHash = {};
//   var tempArr;
//   for (var i = 0; i < nums.length - 3; i++) {
//     for (var j = i + 1; j < nums.length - 2; j++) {
//       left = j + 1;
//       right = nums.length - 1;
//       while (left < right) {
//         tempSum = nums[i] + nums[j] + nums[left] + nums[right];
//         if (tempSum > target) {
//           right--;
//         } else if (tempSum < target) {
//           left++;
//         } else {
//           tempArr = [nums[i], nums[j], nums[left], nums[right]];
//           if (!existsHash[tempArr]) {
//             existsHash[tempArr] = true;
//             result.push(tempArr);
//           }
//           left++;
//           right--;
//         }
//       }
//     }
//   }
//   return result;
// };

var fourSum = module.exports = function (nums, target) {
  const r = [];
  nums.sort((a, b) => a - b);
  const isNotIn = _arr => {
    for (let i = 0; i < r.length; i++) {
      if (_arr.join('-') === r[i].join('-')) return false;
    }
    return true;
  }
  
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) left += 1;
        else if (sum > target) right -= 1;
        else {
          const _arr = [nums[i], nums[j], nums[left], nums[right]];
          if (isNotIn(_arr)) r.push(_arr);
          while (left < right && nums[left] === nums[left + 1]) left += 1;
          while (left < right && nums[right] === nums[right - 1]) right -= 1;
          left += 1;
          right -= 1;
        }
      }
    }
  }
  
  return r;
}
