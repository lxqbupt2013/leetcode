// https://leetcode.com/problems/rotate-list/

var rotateRight = function(head, k) {
    let tail = head;
    if (head === null) return head;
    let len = 1;
    while (tail.next) {
      tail = tail.next;
      len++;
    }
    tail.next = head;
    let count = len - (k % len);
    while (count > 0) {
      head = head.next;
      tail = tail.next;
      count--;
    }
    tail.next = null;
    return head;
};



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
var rotateRight = function(head, k) {
    
    if(!head || k === 0) return head;

    if(head.next === null) return head;
    
    var stack = [];
    var node = head;
    
    while(node !== null) {
        stack.push(node);
        node = node.next;
    }
    
    var len = stack.length;
    stack[len-1].next = stack[0];
    var newHead = head;
    
    if (k < len) {
        stack[len - k - 1].next = null;
        newHead = stack[len - k];
    }
    else if (k > len) {
        stack[k%len].next = null;
        newHead = stack[k%len + 1];
    } else {
        return newHead;
    }
    
    return newHead;
};