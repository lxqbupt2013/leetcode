/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two
 * lists.
 */

/**
 * You should comment the following function to pass the leetcode tests.
 * Definition for singly-linked list.
 */
var ListNode = require('../../structures/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 新建节点法
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  const r = new ListNode(0);
  let l = r;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      l.next = l1;
      l1 = l1.next;
    } else {
      l.next = l2;
      l2 = l2.next;
    }
    l = l.next;
  }
  if (l1) l.next = l1;
  if (l2) l.next = l2;
  return r.next;
};
