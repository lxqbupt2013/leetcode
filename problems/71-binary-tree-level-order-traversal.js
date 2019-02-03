// Source : https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 方法一： 递归方法
// DFS
var levelOrder = function(root) {
  const arr = [];
  function traverse(node, level) {
      if (!node) return;
      if (arr.length <= level) arr.push([]);
      arr[level].push(node.val);
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
  }
  
  traverse(root, 0);
  return arr;
};


// 方法二： 队列，非递归方法,迭代
// BFS
var levelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let level = [root];
  while (level.length > 0) {
      res.push(level.map(node => node.val));
      let temp = [];
      for (let i=0; i<level.length; i++){
          if (level[i].left)  temp.push(level[i].left);
          if (level[i].right) temp.push(level[i].right);
      }
      level = temp;
  }
  return res;
};

const levelOrder = function(root){
  const res = [], q = []
  q.push(root)
  while(q.length !== 0){
    let count = q.length, layer = []
    for(let i = 1; i <= count; i++){
      let cur = q.shift()
      if(cur){
        layer.push(cur.val)
        if(cur.left)
          q.push(cur.left)
        if(cur.right)
          q.push(cur.right)
      }
    }
    res.push(layer)
  }
  return res
}