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
 var middleNode = function(head) {
    
  //길이 확인
  const countLength = () => {
      let len = 0;
      let current = head;
      while(current){
          current = current.next;
          len++;
      }
      return len;
  }
  
  //나머지 구하기
  const getRest = (num) => {
      let current = head;
      while(current && num > 0) {
          current = current.next;
          num--;
      }
      return current;
  }
  //floor하면 어차피 소수점 날아가므로
  return getRest(Math.floor(countLength() / 2));
};

//Best Answer
/*
회문 한번 돌리면서 하나는 하나씩만 다른하나는 두개씩 건너뛰면 중간을 찾게됨
간단한 생각인데 아주 좋은 참고가 될 듯
*/
var middleNode = function(head) {
  if(head.next === null ) return head;
  let p1 = head;
  let p2 = head;
  while (p2 !==null && p2.next !==null){
      p1 = p1.next;
      p2 = p2.next.next;
  }
  return p1;
};