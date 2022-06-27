/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
위치만 바꿔주면 됨
걍 하나씩 밀면 되지 않을까
*/
var reverseList = function(head) {
  let prev = null, current = head, next = null;
  
  while(current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  return prev; 
};