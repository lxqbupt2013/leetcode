// Source : https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if(root === null) return [];
  
  var queue = [root];
  var result = [];
  
  while(queue.length !== 0) {
      var len = queue.length;
      var sum = 0;
      
      for(var i = 0; i < len; i++) {
          var front = queue[0];
          queue.shift();
          sum = sum + front.val;
          
          if(front.left !== null) {
              queue.push(front.left);
          }
          if(front.right !== null) {
              queue.push(front.right);
          }
      }
      result.push(sum/len);
  }
  
  return result;
};