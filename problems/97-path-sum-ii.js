// Source : https://leetcode.com/problems/path-sum-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
  if(root === null) return [];
  var res = [];
  var arr = [];
  
  function dfs(node, sum, arr) {
      if(node) {
          if(node.val === sum && node.left === null && node.right === null) {
              arr = arr.concat([node.val]);
              res.push(arr);
          }
          arr.push(node.val)
          dfs(node.left, sum - node.val, arr);
          dfs(node.right, sum - node.val, arr);
          arr.pop()   // 回溯            
      }
  }
  
  dfs(root, sum, arr);
  
  return res;
};


var pathSum = function(root, sum) {
  var left,
      right,
      i;
  
  if(root===null)return [];
  if(sum===root.val&&root.left===null&&root.right===null)return [[root.val]];
  
  left=pathSum(root.left,sum-root.val);
  right=pathSum(root.right,sum-root.val);
  
  for(i=0;i<left.length;i++){
      left[i].unshift(root.val);
  }
  for(i=0;i<right.length;i++){
      right[i].unshift(root.val);
  }
  return left.concat(right);
};