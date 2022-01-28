//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/
//  Delete Node in a Linked List

// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.

// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// Constraints:
// The number of the nodes in the given list is in the range [2, 1000].
// -1000 <= Node.val <= 1000
// The value of each node in the list is unique.
// The node to be deleted is in the list and is not a tail node


// First Trial
// 원래 알던 방식은 prev가 주어지거나 next를 통해 해당 노드를 찾고 지우는 것이 었음
// 근데 지울 노드를 곧바로 넣어주기 때문에 
// 현재 노드의 값을 다음으로 바꾸고 // 현재 노드의 넥스트를 다음다음으로 변경해주면 사라지는 효과 가능
const solution = (node) =>  {
  node.val = node.next.val;
  node.next = node.next.next;
};

// Another Answer
// 다음이 없을때 까지 순차적으로 밀어주는 방식
var deleteNode = function (node) {
  let next = node.next;
  while(next) {
    node.val = next.val;
    node.next = next.next;
    next = node.next ? node.next.next: null;
    node = next;
  }
}