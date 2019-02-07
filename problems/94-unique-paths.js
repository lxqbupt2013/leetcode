// Source : https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 先定义二维数组, 元素为空.
// 不断递增i, j. 在走过的格子上置为'#'; 在回溯情况下, 重新将格子置空.
// 这个解答在leetcode上面无法通过, 因为超出时间限制; 但是如果要求所有的路径, 可用这个方法.
var uniquePaths = function(m, n) {
  const arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = '';
    }
  }
  
  let r = 0;
  
  const dfs = (i=0, j=0) => {
    if (i >= m || j >= n) return;
    if (i === m - 1 && j === n - 1) {
      r++;
      return;
    }
    if (i + 1 < m && arr[i + 1][j] !== '#') {
      arr[i + 1][j] = '#';
      dfs(i + 1, j);
      arr[i + 1][j] = '';
    }
    if (j + 1 < n && arr[i][j + 1] !== '#') {
      arr[i][j + 1] = '#';
      dfs(i, j + 1);
      arr[i][j + 1] = '';
    }
  }
  
  dfs();
  
  return r;
}
// DP
var uniquePaths = function(m, n) {
  const arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = 1;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  
  return arr[m - 1][n - 1];
};
