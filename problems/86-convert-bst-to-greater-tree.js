// https://leetcode.com/problems/convert-bst-to-greater-tree/

var convertBST = function(root) {
    var sum = 0
    var helper =function(node) {
        if (node === null) return;
        
        helper(node.right)
        node.val += sum
        sum = node.val
        helper(node.left)
    }
    helper(root);
    return root
};