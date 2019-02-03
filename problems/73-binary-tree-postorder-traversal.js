// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/

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
// 递归法
var postorderTraversal = function(root) {
  const postOrder = (node, r) => {
    if (node) {
      postOrder(node.left, r);
      postOrder(node.right, r);
      r.push(node.val);
    }
  }
  const r = [];
  postOrder(root, r);
  return r;
};

// 迭代法
var postorderTraversal = function(root) {
  if (!root) return [];
  const queue = [root];
  const r = [];
  
  while (queue.length > 0) {
    const node = queue.shift();
    r.unshift(node.val);
    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);
  }
  
  return r;
};