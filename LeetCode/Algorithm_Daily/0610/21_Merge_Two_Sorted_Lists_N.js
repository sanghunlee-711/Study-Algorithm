/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/*
둘중하나 끝나는 기준으로 돌면서
1. 둘중 하나 끝날때까지 돌리기
2. 남은거 있으면 그대로 뒤에 붙히기 (어차피 정렬되어있으므로)
3. list1이 크면 newList에 list2의 값을 넣고
    list2를 next로 보냄
*/

var mergeTwoLists = function(list1, list2) {
  const answer = new ListNode("Start");
  let current = answer, 
      current1 = list1,
      current2 = list2;
  
  while(current1 && current2) {
      if(current1.val > current2.val) {
          current.next = current2
          current2 = current2.next;
      }else{
          current.next = current1
          current1 = current1.next;
      }
      current = current.next;
  }
  
  if(current1) {
      current.next = current1;
  }
  
  if(current2) {
      current.next = current2;
  }
  
  return answer.next;
};