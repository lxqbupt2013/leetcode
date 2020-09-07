/* eslint no-constant-condition:0 */

/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 *
 * If the number of nodes is not a multiple of k then left-out nodes in the end
 * should remain as it is.
 *
 * You may not alter the values in the nodes, only nodes itself may be changed.
 *
 * Only constant memory is allowed.
 *
 * For example,
 *
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  if (!head) return null;
  var tail = head;
  for (var i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }
  var next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
}


// 关键点： 交换节点
function reverse(curr) {
  var prev = null;
  while (curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}