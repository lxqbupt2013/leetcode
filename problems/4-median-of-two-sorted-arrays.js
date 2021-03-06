/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


 // 思路： 先把两个数组合并成一个有序数组，然后找中点位置
var findMedianSortedArrays = function (nums1, nums2) {
  return findMedian(merge(nums1, nums2));
};

function merge(nums1, nums2) {
  var i = 0;
  var j = 0;
  var result = [];
  var nums1Length = nums1.length;
  var nums2Length = nums2.length;
  if (nums1Length === 0) {
    return nums2;
  }
  if (nums2Length === 0) {
    return nums1;
  }
  while (i !== nums1Length && j !== nums2Length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i = i + 1;
    } else {
      result.push(nums2[j]);
      j = j + 1;
    }
  }
  if (i === nums1Length) {
    // 关键点： concat和slice的组合写法
    result = result.concat(nums2.slice(j));
  } else if (j === nums2Length) {
    result = result.concat(nums1.slice(i));
  }
  return result;
}

function findMedian(array) {
  var arrayLength = array.length;
  var medianIndex = (arrayLength - 1) / 2;
  var floor = Math.floor(medianIndex);
  if (floor === medianIndex) {
    return array[medianIndex];
  }
  return (array[floor] + array[floor + 1]) / 2;
}
