//ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


// First Trail
// Leet code문제인지는 모르겠으나 head에서 next찍으면 뒤에 남은 리스트들이 다 나오는게 좀 이해가 안감 ;;..
// 직관적으로 각 노드들이 연결되어있는 것이라는 관점만으로만 본다면 아래와 같이 가능

var reverseList = function(head) {
  let prev = null;
  let curr = head;
  let next = null;
  
  while(curr) {
      next = curr.next;  //next를 현재의 다음 노드로 할당
      curr.next = prev;  // 현재노드의 다음을 이전에 존재하는 노드로 변경
      prev = curr;  //이전노드를 가지고 있을 변수에 현재를 다시 할당
      curr= next;  // 현재를 가지고 있을 변수에 다음 노드를 할당
  }
  
  return prev;    //curr이 null이 되고 curr을 저장하던 prev를 반환하면 됨
};

//Best Answer
// 선언 변수가 적어 속도가 빨라지고 기본적 원리는 똑같음.
var reverseList = function(head) {
    
  let current = head;
  let prev = null;
  
  while(current !== null) {  
      let temp = current.next; //여기 temp가 걍 First Trial의 next와 같다고 보면 됨.
      current.next = prev;
      prev = current;
      current = temp;
  }
  
  return prev;
};