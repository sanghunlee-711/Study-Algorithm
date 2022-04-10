//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
// Follow up: Could you do it in O(n) time and O(1) space?

// First trial
// 링크드리스트를 reverse 시키는 문제를 풀어보았으므로 이를 통해 확인하려 함
// 배열과 같이 그냥 === 으로 해서 해결될 문제의 자료구조가 아님(엄밀히 따지면 객체고 next값이 다 다르므로 val를 통해 비교 필요)
const doReverse = (list)=>{
  const prev = null;
  const curr = list;
  const next = null;

  while(curr){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const solution = (head) =>{
  let temp = head;
  let reverse = doReverse(head);

  while(reverse &&  temp) {
    if(temp.val !== reverse.val) return false;
    temp = temp.next;
    reverse = reverse.next;
  }

  return true;
}
//이랬는데 무슨 이유인지 테스트케이스에서 패스가 안됨 

// 답봄

// Finding Trail && Best Answer
// 여기서 middleNode라는 함수를 추가로 만들어 중간지점의 노드를 찾은 뒤 거기서 부터 마지막 까지
//. 리버스 시켜서 확인
// 여기서 middleNode 만 빼면 나와 같은 접근방식인데 중간을 찾아서 뒤집어 주지 않았다고 되지 않는게 이해가안감 ;;
const doReverse = (head) =>{
  let prev = null;
  let curr = head;
  let next = null;
  
  while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  
  return prev;
}

const middleNode = (head) =>{
  let slow = head;
  let fast = head;
  
  while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
}


var isPalindrome = function(head) {
let temp = head;
let reverse = doReverse(middleNode(head));

while(reverse && temp) {
  if(temp.val !== reverse.val) return false;
  temp = temp.next;
  reverse = reverse.next;
}

return true;
};

// Interesting Answer;
//  stack이나 투포인터를 이용한 해결법도 존재
//1. Stack
const isPalindrome = (head) =>{
  const stack = [];
  let temp = head;

  while(head !== null) { //stack에 값 다 넣음
    stack.push(head.val);
    head = head.next;
  }

  while(temp !== null){ 
    //스택 값은 뒤에서부터 확인
    // Linked List값은 앞에서부터 확인
    if(stack[stack.length -1] !== temp.val) return false;

    stack.pop();
    temp = temp.next;
  }

  return true;
} 

// 2.투포인터
const isPalindrome = (head) =>{
  const arr = [];

  while(head !== null) { //배열에 다 넣음
    arr.push(head.val);
    head = head.next;
  };

  let left = 0;
  let right = arr.length -1;
  while(left < right) { 
    if(arr[left] !== arr[right]) { //좌우 교차하면서 달라지는 것 있으면 false
      return false;
    }
     //계속 범위 줄여나감
    left ++;
    right --;
  }

  return true;
} 