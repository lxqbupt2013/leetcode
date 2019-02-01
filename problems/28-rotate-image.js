/* eslint no-param-reassign:0 */

/**
 * https://leetcode.com/problems/rotate-image/
 *
 * You are given an n x n 2D matrix representing an image.
 *
 * Rotate the image by 90 degrees (clockwise).
 *
 * Follow up:
 * Could you do this in-place?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var len = matrix.length;
  
  for (var i = 0; i < len; i ++) {
      for (var j = i + 1; j < len; j++) {
          var temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
      matrix[i].reverse();
  }
};
