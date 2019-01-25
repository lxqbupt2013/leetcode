/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given a linked list,
 * remove the nth node from the end of list and return its head.
 *
 * For example,
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 *
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 *
 * Note:
 *
 * Given n will always be valid.
 * Try to do this in one pass.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 用一个stack（数组实现的）来临时存储ListNode的node
// 用数组的原因是数组可以按所以取值，而ListNode必须从前往后遍历
var removeNthFromEnd = module.exports = function (head, n) {
  if (n === 0) return head;
  var stack = [];
  var node = head;
  while (node !== null) {
    stack.push(node);
    node = node.next;
  }
  // 如果要删除的是第一个节点，则返回第二个节点
  if (stack.length - n - 1 === -1) {
    return head.next;
  }
  stack[stack.length - n - 1].next = stack[stack.length - n + 1];
  return head;
};
