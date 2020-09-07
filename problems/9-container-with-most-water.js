/**
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Given n non-negative integers a1, a2, ..., an,
 * where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is
 * at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container,
 * such that the container contains the most water.
 *
 * Note: You may not slant the container.
 */

// 找坐标图上可以形成的最大面积区域
// 思路： 循环比较，先找两个值中小的那个值，再与最大面积作比较，最后得到最大面积

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var len = height.length;
  if (len === 0 || len === 1) return 0;
  // 如果只有两个值，面积等于两个值中较小的那个乘以x轴差值1
  if (len === 2) return (height[0]<height[1]?height[0]:height[1])
  
  var maxArea = 0;
  
  for (var i = 0; i < len; i++) {
      for (var j = i + 1; j < len; j++) {
          var temp = Math.min(height[i],height[j]);
          maxArea = Math.max(temp*(j - i), maxArea);
      }
  }
  
  return maxArea;
};