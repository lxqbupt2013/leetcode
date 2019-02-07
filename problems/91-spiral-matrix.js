// Source : https://leetcode.com/problems/spiral-matrix/
// 状态机
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var m = 0;
  var state = ['right', 'down', 'left', 'up'];
  var results = [];
  var curState = 0;
  if (matrix.length !== 0) {
      var totalNums = (matrix.length * matrix[0].length);
      // while there are numbers left, keep printing
      while (results.length < totalNums) {
          switch (state[curState]) {
              case 'right':
                  if (matrix[m].length !== 0) {
                      results.push(matrix[m].shift());
                  } else {
                      curState = 1;
                      ++m;
                  }
                  break;
              case 'down':
                  if (matrix[m] !== undefined && matrix[m].length !== 0) {
                      results.push(matrix[m].pop());
                      
                      ++m;    
                  } else {
                      curState = 2;
                      --m;
                  }
                  break;
              case 'left':
                  if (matrix[m].length !== 0) {
                      results.push(matrix[m].pop());    
                  } else {
                      curState = 3;
                      --m;
                  }
                  break;
              case 'up':
                  if (matrix[m] !== undefined && matrix[m].length !== 0) {
                      results.push(matrix[m].shift());
                      --m;
                  } else {
                      curState = 0;
                      ++m;
                  }
                  break;
          }
      }
  }
  
  return results;
};