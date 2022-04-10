// ref:

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


// First Trial 
// linked List가 익숙하지 않아서 인지 감이 계속 안잡힘
// discuss답 찾아봄
var mergeTwoLists = function(list1, list2) {
  let head = new ListNode(); //정렬된 것을 넣을 리스트 만듦
  let curr = head;
  let curr1 = list1, curr2 = list2;
  
  while(curr1 && curr2) {
      if(curr1.val < curr2.val) {
          curr.next = curr1; //더 작은 값 먼저 리스트에 넣어야지
          curr1 = curr1.next; // 리스트 1은 처리된 값 제외한 것으로 업데이트
      }else{
          curr.next = curr2;
          curr2 = curr2.next;
      }
      curr = curr.next; // curr이 업데이트 되었으므로 curr을 다음으로 넘겨주며 업데이트
  }
  
  if(curr1){ //반복문을 다 돌고도 하나의 리스트가 끝나지 않았다면 남은것들 연결해줌
      curr.next = curr1;
  }
  if(curr2){ //얘도 똑같음
      curr.next = curr2;
  }
  
  return head.next;
  
};

// Best Answer
var mergedTwoLists = function (list1, list2) {
  // 엣지케이스 처리
  if(!list1) return list2;
  if(!list2) return list1;

  //크기에 따라 재귀적으로 next를 바꿔 넣어줌
  if(list1.val < list2.val){
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }else{
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}