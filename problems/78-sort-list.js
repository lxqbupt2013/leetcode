// Source : https://leetcode.com/problems/sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) 
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 要求时间复杂度只能是O(logN),只能选择快速排序、堆排序、归并排序
// 归并排序最适合链表
var merge = function(A,B){
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  while(A!=null&& B!=null){
      if(B.val<A.val){
          cur.next=B;
          B=B.next;
      }
      else{
          cur.next=A;
          A=A.next;
      }
      cur=cur.next;
 }
  while(A!=null){
      cur.next=A;
      A=A.next;
      cur=cur.next;
  }
  while(B!=null){
      cur.next=B;
      B=B.next;
      cur=cur.next;
  }
  return dummyHead.next;
}

var sortList = function(head) {
  if(head==null||head.next==null){
      return head;
  }
  let slow=head, preSlow=head, fast=head;
  while(fast!=null && fast.next!=null){
      preSlow=slow;
      slow=slow.next;
      fast=fast.next.next;
  }
  preSlow.next=null;
  return merge(sortList(head),sortList(slow));
};