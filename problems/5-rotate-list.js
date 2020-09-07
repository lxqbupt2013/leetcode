// https://leetcode.com/problems/rotate-list/
// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:向右旋转 1 步: 5->1->2->3->4->NULL
//     向右旋转 2 步: 4->5->1->2->3->NULL



// 思路： 先把链表首尾相连，然后根据数学计算找到链表断开的点，最后一步是重置head节点
var rotateRight = function(head, k) {
    let tail = head;
    if (head === null) return head;
    let len = 1;
    while (tail.next) {
      tail = tail.next;
      len++;
    }
    tail.next = head;
    // 关键点： 根据k和len的关系，计算应该在哪个节点将链表环断开，并重置head节点。
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