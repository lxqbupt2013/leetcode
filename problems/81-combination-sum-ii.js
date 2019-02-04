// Source : https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const dfs = (arr, tmpArr, remain, start) => {
    if (remain === 0) result.push(tmpArr.slice());
    else if (remain < 0) return;
    
    for (let i = start; i < arr.length; i++) {
      if (i !== start && arr[i] === arr[i - 1]) continue;
      tmpArr.push(arr[i]);
      dfs(arr, tmpArr, remain - arr[i], i + 1);
      tmpArr.pop();
    }
  }
  
  dfs(candidates, [], target, 0);
  
  return result;
};

// backTrack
var combinationSum2 = function (candidates, target) {
  if (candidates.length === 0) return []
  let res = []
  candidates.sort((a, b) => {
    return a - b
  })
  backTrack(candidates, target, [], 0)
  return res

  function backTrack(nums, target, p, start) {
    if (target === 0)
      return res.push(p.slice())
    for (let i = start; i < nums.length && target >= nums[i]; i++) {
      if (i !== start && nums[i] === nums[i - 1]  )
        continue
      p.push(nums[i])
      backTrack(nums, target - nums[i], p, i + 1)
      p.pop()
    }
    return
  }
};