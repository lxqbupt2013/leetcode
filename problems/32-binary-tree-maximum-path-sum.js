/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 *
 * Given a binary tree, find the maximum path sum.
 *
 * For this problem,
 * a path is defined as any sequence of nodes from some starting node to any
 * node in the tree along the parent-child connections.
 * The path does not need to go through the root.
 *
 * For example:
 * Given the below binary tree,
 *
 *     1
 *    / \
 *   2   3
 * Return 6.
 */

var TreeNode = require('../../structures/TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
   4
  / \
  11 13
 / \
7   2
 */
  /**
 * @param {TreeNode} root
 * @return {number}
 */
// 树的递归解法一般都是递归到叶节点，然后开始边处理边回溯到根节点。
// 假设此时已经递归到结点7了，那么其没有左右子节点，所以如果以结点7为根结点的子树最大路径和就是7
// 然后回溯到结点11，如果以结点11为根结点的子树，我们知道最大路径和为7+11+2=20。但是当回溯到结点4的时候，对于结点11来说，就不能同时取两条路径了，只能取左路径，或者是右路径，所以当根结点是4的时候，那么结点11只能取其左子结点7，因为7大于2
// 所以，对于每个结点来说，我们要知道经过其左子结点的path之和大还是经过右子节点的path之和大。那么我们的递归函数返回值就可以定义为以当前结点为根结点，到叶节点的最大路径之和，然后全局路径最大值放在参数中，用结果res来表示

// 这个返回值是为了提供给它的父结点计算自身的最长路径
// 一个结点自身的最长路径就是它的左子树返回值（如果大于0的话），加上右子树的返回值（如果大于0的话），再加上自己的值
// 在过程中求得当前最长路径时比较一下是不是目前最长的，如果是则更新
// 
var maxPathSum = function (root) {
  if (root === null) return 0;

  var maxResult = -1000;

  var dfs = function(root) {
    if (root === null) return 0;

    var left = root.left === null ? 0 : dfs(root.left);
    var right = root.right === null ? 0 : dfs(root.right);

    left = left > 0 ? left : 0;
    right = right > 0 ? right : 0

    var max = Math.max(left, right);

    maxResult = Math.max(maxResult, left + right + root.val)

    return max + root.val;
  }

  dfs(root);

  return maxResult;
};