/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a
 * single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
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
var addTwoNumbers = function (listA, listB) {
  var tmpA = listA;
  var tmpB = listB;
  var result;
  var tmpNode;
  var sum;
  /**
   * A carry is a digit that is transferred from one column of digits to
   * another column of more significant digits.
   */
  var carry;
  carry = 0;
  while (tmpA !== null || tmpB !== null) {

    // 关键一： 得到每两个节点的和存起来，后面用于判断进位
    sum = (tmpA === null ? 0 : tmpA.val) + (tmpB === null ? 0 : tmpB.val) + carry;

    // 关键二： temNode用于将两个节点相加后往后索引，并将结果存储在result里
    if (!tmpNode) {
      // tmpNode 与 result 都是引用对象，引用对象指向同一个对象
      // 第一个节点
      tmpNode = result = new ListNode(sum % 10);
    } else {
      // tmpNode存储的是result对象逐级往下的next值
      tmpNode.next = new ListNode(sum % 10);
      tmpNode = tmpNode.next;  // 新ListNode
    }
    carry = sum > 9 ? 1 : 0;
    if (tmpA !== null) {
      tmpA = tmpA.next;
    }
    if (tmpB !== null) {
      tmpB = tmpB.next;
    }
  }
  if (carry === 1) {
    tmpNode.next = new ListNode(1);
  }

  return result;
};
