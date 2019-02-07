// Source : https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

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
// DFS 递归写法
var levelOrderBottom = function(root) {
	const r = [];
	const levelOrder = (node, level=0) => {
	  if (node) {
		r[level] = r[level] || [];
		r[level].push(node.val);
		if (node.left) levelOrder(node.left, level + 1);
		if (node.right) levelOrder(node.right, level + 1);
	  }
	}
	levelOrder(root);
	
	return r.reverse();
  };

  // BFS queue
  var levelOrderBottom = function(root) {
    if (!root) { return []; }
    
    let res = [];
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let level = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) { queue.push(node.left); }
            if (node.right) { queue.push(node.right); }
        }
        res.unshift(level);
    }
    
    return res;
};