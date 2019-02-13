/* eslint no-param-reassign:0 */

/**
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Reverse a singly linked list.
 *
 * Hint:
 * A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
 */

/**
 * You should comment the following function to pass the leetcode tests.
 * Definition for singly-linked list.
 */
// var ListNode = require('../../structures/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null
  while(head){
      const next = head.next
      head.next = pre
      pre = head
      head = next
  }
  return pre
};