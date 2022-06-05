/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
투포인터를 쓰는게 힌트
어차피 하나 삭제니까 그 타겟 빼고만 알아내면 장땡임
하나는 삭제할 위치 전까지
하나는 삭제할 요소 뒤의 위치
[1,2,3,4,5], 2
*/

var removeNthFromEnd = function(head, n) {
  if(!head || !n) return head;
  
  let p1 = head;
  let p2 = head;
  
  //p1을 통해서 삭제할 위치까지 밀어줌
  //p1: [3,4,5]
  for(let i = 0; i < n; i++) {
      p1 = p1.next;
  }
  console.log(p1);
  //p1의 next가 있을때 까지만 밀어줌
  //p1: [5]
  //p2: [3,4,5]
  
  //엣지케이스 처리 -> [1], 1
  if(!p1) return p2.next;
  
  while(p1.next) {
      p1 = p1.next;
      p2 = p2.next;
  }
  //4만 날리게 됨
  p2.next = p2.next.next;
  //원본 head반환해줌
  return head;
};

//Best Answer
/*
더미를 만들고 그 next를 head로 두어서 해결
*/
var removeNthFromEnd = function(head, n) {
  // create a dummy node
  let dummy = new ListNode(0);
     dummy.next = head;
     // create a pointer to the first node
     let first = dummy;
     // create a pointer to the second node
     let second = dummy;
     // move the second pointer n nodes ahead
     for(let i = 0; i < n; i++) {
         second = second.next;
     } // now second is n nodes ahead of first
     // move the first pointer until second reaches the end
     while(second.next) {
         first = first.next;
         second = second.next;
     }
     // now first is n+1 nodes ahead of the node to be removed
     // set the next of the first node to be the next of the node to be removed
     first.next = first.next.next;
     return dummy.next;
};