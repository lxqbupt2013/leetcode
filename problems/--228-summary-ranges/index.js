/**
 * https://leetcode.com/problems/summary-ranges/
 *
 * Given a sorted integer array without duplicates,
 * return the summary of its ranges.
 *
 * For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
// var summaryRanges = module.exports = function (nums) {
//   if (nums.length === 0) {
//     return [];
//   }
//   var result = [];
//   var lastStart = nums[0];
//   var temp = nums[0];
//   var i;
//   for (i = 1; i < nums.length; i++) {
//     if (nums[i] === temp + 1) {
//       temp++;
//     } else {
//       if (lastStart === nums[i - 1]) {
//         result.push(lastStart.toString());
//       } else {
//         result.push(lastStart + '->' + nums[i - 1]);
//       }
//       lastStart = nums[i];
//       temp = nums[i];
//     }
//   }
//   if (lastStart === nums[i - 1]) {
//     result.push(lastStart.toString());
//   } else {
//     result.push(lastStart + '->' + nums[i - 1]);
//   }
//   return result;
// };

// [0,1,2,4,5,7], return ["0->2","4->5","7"].
// = module.exports 
var summaryRanges = module.exports = function(nums) {

  if (nums.length === 0) {
     return [];
  }

  var result = [];
  var tmp = nums[0];
  var start = nums[0];

  for (var i = 1; i<nums.length; i++) {
    
    var str;

    if (nums[i] === tmp + 1) {
       tmp = nums[i];
    }
    else {
      if(start === tmp) {
        str = start.toString();
      }
      else {
        str = start + '->' + tmp;
        console.log('start:' + start);
        console.log(str)
        start = nums[i];
        tmp = start;
      }
      result.push(str);
    }

    if( nums[nums.length - 1] === start) {
      result.push(tmp.toString());
    }
  }

  return result;
}
