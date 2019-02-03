// Source : https://leetcode.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var result = [];

  var findPath = function(node, path) {
      if(!node) {
          return;
      } else {
          path += node.val;
      }
      
      if(!node.left && !node.right) {
          return result.push(path);
      } else {
          path += "->";
      }
      
      if(node.left) {
          findPath(node.left, path);
      }
      
      if(node.right) {
          findPath(node.right, path);
      }
  }
  
  findPath(root, "");
  return result;
};


var binaryTreePaths = function(root) {
  let result = [];    
  let stack = [{node: root, path: []}];
  
  while (stack.length > 0) {
      let item = stack.pop();
      if (item.node === null) {
          continue;
      }
      
      let children = [item.node.right, item.node.left].filter(child => child !== null);
      let path = item.path.concat([item.node.val]);

      if (children.length === 0) {
          result.push(path.join("->"));
      }

      children.forEach(child => stack.push({node: child, path: path}));
  }
  
  return result;
};