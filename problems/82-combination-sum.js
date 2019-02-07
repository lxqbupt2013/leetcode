// Source : https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const dfs = (arr, tmpArr, remain, start) => {
    if (remain < 0) return;
    if (remain === 0) {
      result.push(tmpArr.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      tmpArr.push(arr[i]);
      dfs(arr, tmpArr, remain - arr[i], i);
      tmpArr.pop();
    }
  }
  
  dfs(candidates, [], target, 0);
  
  return result;
};


// 回溯法
function combinationSum(candidates, target) {
  const solutions = [];
  findSets(candidates, solutions, [], target, 0);
  return solutions;
}

/**
 * 
 * @param {number[]} candidates
 * @param {number[][]} solutions
 * @param {number[]} current
 * @param {number} remainder
 * @param {number} start
 * @return {void}
 */
function findSets(candidates, solutions, current, remainder, start) {
  if (!remainder) {
    return solutions.push(current.slice());
  }

  if (remainder < 0) {
    return;
  }

  // Track start to prevent going backwards, avoiding duplicates
  for (let i = start; i < candidates.length; i++) {
    current.push(candidates[i]);
    findSets(candidates, solutions, current, remainder - candidates[i], i);
    current.pop();
  }
}