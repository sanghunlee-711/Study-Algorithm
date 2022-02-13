//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/773/

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

// First Trial
var hasCycle = function(head) {
    //0. 엣지케이스
    if(!head) return false;
    
    while(head){
        //3. 임의값이 또 나오면 cycle이 됨
        if(head.val === 'c') return true
        //1. head에 임의 값을 부여해서 돌리면 됨
        head.val = "c";
        //2. 계속 돌리면서 
        head = head.next
    }
    //while문을 빠져나오게 된다면. 걍 false임
    return false;
};

// Best Answer
var hasCycle = function(head) {
  //엣지케이스 처리
  if (head===null || head.next === null) return false;
  
  // 투포인터를 활용
  let slow = head;
  let fast = head;
  while (slow && slow.next && fast && fast.next) {
    // 임의값 선언 대신 하나 앞서가는 포인터가 
    //그전의 포인터와 같아지는 경우 사이클이 됨을 활용
      slow = slow.next;
      fast = fast.next.next;
      
      if (slow===fast) return true;
  }
  
  return false;
};