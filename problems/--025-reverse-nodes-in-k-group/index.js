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
var reverseKGroup = module.exports = function (head, k) {
  if (k === 0) return head;
  if (k === 1) return head;
  var kMinusOneNext = getKNext(head, k - 1);
  if (kMinusOneNext === null) return head;
  var result = kMinusOneNext;

  var currentNode = head;
  var k2;
  var kNext;
  while (true) {
    kMinusOneNext = getKNext(currentNode, k - 1);
    if (kMinusOneNext === null) break;
    k2 = getKNext(currentNode, 2 * k - 1);
    kNext = getKNext(currentNode, k);
    reverseNodes(currentNode, k - 1);
    if (k2 === null) {
      currentNode.next = kNext;
    } else {
      currentNode.next = k2;
    }
    currentNode = kNext;
  }
  return result;
};

function getKNext(head, k) {
  if (k === 0) return head;
  var tempNode = head;
  for (var i = 0; i < k; i++) {
    if (tempNode === null) return null;
    tempNode = tempNode.next;
  }
  return tempNode;
}

function reverseNodes(head, k) {
  var tempNode1 = head;
  var tempNode2 = head.next;
  var tempNode3;
  for (var i = 0; i < k; i++) {
    tempNode3 = tempNode2.next;
    tempNode2.next = tempNode1;
    tempNode1 = tempNode2;
    tempNode2 = tempNode3;
  }
}



// var reverseKGroup = function(head, k) {
//   if (k === 0 || k === 1) return head;
//   var stack = [];
//   var result = new ListNode(head.val);
//   var last = result.next;;
  
//   var node = head;
//   var _head = head;
  
//   while (node !== null) {
      
//       stack.push(node);
//       node = node.next;
      
//       if(stack.length === k) {
//           last = reverseList(_head);
//           last = last.next;
//           _head = node;
//           stack = [];
//       }
//   }
//   return result;
// };

// var reverseList = function(head) {
//   let pre = null;
//   while(head) {
//       const next = head.next;
//       head.next = pre;
//       pre = head;
//       head = next;
//   }
//   return pre;
// }

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// ListNode.generateList = function (num) {
//   var numbers = num.toString().split('').map(Number);
//   var result;
//   var tmp;
//   numbers.forEach(function (number, index) {
//     if (index === 0) {
//       result = new ListNode(number);
//       return;
//     }
//     tmp = new ListNode(number);
//     tmp.next = result;
//     result = tmp;
//   });
//   return result;
// };

// reverseKGroup(ListNode.generateList(531), 2)
