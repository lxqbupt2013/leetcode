// Source : https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if(!head){
      return;
  }
  const list = [];
  let pointer, i, n;
  pointer = head;
  // save all nodes into an array
  while(pointer){
      list.push(pointer); 
      pointer = pointer.next;
  }
  
  i = 0;
  n = list.length - 1;
  // core strategy:
  // odd: <= mid
  // even: < mid
  // 0, 1, 2
  while(i < Math.ceil(n / 2)){
      pointer = list[i];
      pointer.next = list[n-i];
      // next round
      i++;
      pointer.next.next = list[i];

  }
  // break the circular next 
  list[i].next = null;
};