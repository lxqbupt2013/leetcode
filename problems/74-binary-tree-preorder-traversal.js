// Source : https://leetcode.com/problems/binary-tree-preorder-traversal/

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
var preorderTraversal = function(root) {
  const preOrder = (node, r) => {
    if (node) {
      r.push(node.val);
      preOrder(node.left, r);
      preOrder(node.right, r);
    }
  }
  const r = [];
  preOrder(root, r);
  return r;
};


var preorderTraversal = function(root) {
  if (!root) return [];
  const queue = [root];
  const r = [];
  while (queue.length > 0) {
    const node = queue.shift();
    r.push(node.val);
    if (node.right) queue.unshift(node.right);
    if (node.left) queue.unshift(node.left);
  }
  
  return r;
};