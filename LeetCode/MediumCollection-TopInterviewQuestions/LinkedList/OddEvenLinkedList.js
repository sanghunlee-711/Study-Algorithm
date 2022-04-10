//ref :https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/784/

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Example 2:
// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

// Constraints:
// n == number of nodes in the linked list
// 0 <= n <= 104
// -106 <= Node.val <= 106


//First Trail
//next가 없을때 까지 실행하면 되고 
// next가 없을 때 가지 번갈아가며 odd LinkedList와 evenLinkedList에 넣어주고
// 이거 두개를 마지막에 합쳐주면 될 것 같음. -> 이걸 못하겠어서 답을 찾아봄
var oddEvenList = function(head) {
  let odds = new ListNode(-Infinity);
  let evens = new ListNode(-Infinity);
  let oddStart = odds;
  let evenStart = evens;
  let start = head;
  let idx = 1;
  
  while(start) {
      if(idx % 2 === 0) {
          evens.next = start;
          evens = evens.next;
      }
      else {
          odds.next = start;
          odds = odds.next;            
      }

      start = start.next;
      idx++;
  }
  //메모리에  별도로 리스트를 저장해놓고 다시 리턴해서 사용하는 방식으로 진행함.
  odds.next = evenStart.next;
  evens.next = null;
  
  return oddStart.next;
};


//Best Answer
const oddEvenList = function(head) {
  if(head) {   
      let odd = head, even = head.next, evenHead = even;

      while(even && even.next) {
          odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
      }
      //여기도 똑같이 evenStart를 미리 할당해놓은걸 붙여버림
      odd.next = evenHead;
  }

  return head;
};