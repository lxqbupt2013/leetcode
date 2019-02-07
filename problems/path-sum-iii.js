// Source : https://leetcode.com/problems/path-sum-iii/

"use strict";

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
 * @return {number}
 */
var pathSum = function(root, sum) {
  if(root === null) return 0;

  var findPath = function(root, sum) {
      var res = 0;
      if(root === null) return res;
      if(sum === root.val) res ++;
      
      res = res + findPath(root.left, sum - root.val);
      res = res + findPath(root.right, sum - root.val);
      
      return res;     
  }
  return findPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};