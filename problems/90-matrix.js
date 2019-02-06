// Source : https://leetcode.com/problems/01-matrix/#/description

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// 查找每一个1距离最近的0有多远
var updateMatrix = function(matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var queue = [];

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      } else {
        matrix[i][j] = undefined;
      }
    }
  }

  while (queue.length > 0) {
    var [x, y] = queue.shift();
    var range = [[-1,0], [1, 0], [0, -1], [0, 1]];
    range.forEach(([p, q]) => {
      p += x;
      q += y;
      if (p < 0 || p >= m || q < 0 || q >= n) return;
      if (matrix[p][q] !== undefined && matrix[p][q] < matrix[x][y] + 1) return;
      matrix[p][q] = matrix[x][y] + 1;
      queue.push([p, q]);
    })
  }

  return matrix;
}
