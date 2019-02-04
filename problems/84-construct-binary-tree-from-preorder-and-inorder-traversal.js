// Source : https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Author : Han Zichi
// Date   : 2016-08-25

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/34543/Simple-O(n)-without-map
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  p = i = 0
  build = function(stop) {
      if (inorder[i] != stop) {
          var root = new TreeNode(preorder[p++])
          root.left = build(root.val)
          i++
          root.right = build(stop)
          return root
      }
      return null
  }
  return build()
};