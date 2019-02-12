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

function dfs(root, result) {
  if (!root) return;

  dfs(root.left, result);

  // 中序
  result.push(root.val);
  
  dfs(root.right, result);
}

var inorderTraversal = function(root) {
  var result = [];
  dfs(root, result);
  return result;
};



function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}