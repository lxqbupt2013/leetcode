/**
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Given a linked list, determine if it has a cycle in it.
 *
 * Follow up:
 * Can you solve it without using extra space?
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
 * @return {boolean}
 */

// 为什么有环的情况下二者一定会相遇呢？
// 因为fast先进入环，在slow进入之后，如果把slow看作在前面，fast在后面每次循环都向slow靠近1，所以一定会相遇，而不会出现fast直接跳过slow的情况。
// fast每次走两步，slow每次走一步
var hasCycle = function (head) {
  if (head === null) return false;
  var slow = head;
  var fast = head.next;
  while (fast !== null && fast.next !== null && fast !== slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast === null || fast.next === null) return false;
  return true;
};
