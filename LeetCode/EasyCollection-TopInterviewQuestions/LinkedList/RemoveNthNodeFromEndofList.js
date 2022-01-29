//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

//first trial
//문제를 완전 잘못 이해함
var removeNthFromEnd = function(head, n) {
  let start = head;
  let hash = {};
  for(let i = 0; i < start.length; i +=1 ) {
    hash[i] = start[i];
  }
  let lastIdx = start.length-1;
  let whereDelete = lastIdx - n+1;
  
  //아 몰랑
  
};


// Best Answer
//못풀겠어서 재바르게 답 봄
// 추상적으로 풀어내기가 쉽지 않네 흠
// 
var removeNthFromEnd = function(head, n) {
  let dict = {} //해쉬맵에 저장을 위함
  let start = head // 헤드부터 시적
  let i =0
  while (start!=null){
  //linked리스트를 처음부터 끝까지 하나의 next씩 해쉬맵에 다 저장
      i++
      dict[i]= start 
      start = start.next
  }
  let lastN = i
  //없앨 N번째 녀석의 수를 구함
  let NtoDelete = lastN-n+1
  
  if(dict[NtoDelete-1]===undefined){
    //NtoDelete-1이 undefined면 그냥 앞에 다 사라지는 것이므로 현재 지울것의 Next만 남김
      return dict[NtoDelete].next
  }
  //그게 아니면 자를녀석의 next를 바꿔주면 됨
  //ex)[4,5]  = [5]
  dict[NtoDelete-1].next = dict[NtoDelete].next
  
  return head
}

// Best Answer 2
// 이게 더 직관적인 것 같기도하고 ..투포인터로 해결
// ex) Input: head = [1,2,3,4,5], n = 2
var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  
  if (head == null || head.next == null) { // 엣지케이스 처리
      return null;
  }
  
  //자르기까지의 리스트를 fast에 저장
  for (let i = 0; i < n; i++) {
      fast = fast.next; 
  }
  //fast 는[3,4,5] 가 됨

  //만약 null이면 걍 head.next를 다 보내면 됨
  if (fast === null) {
      return slow.next;
  }
  
  //null 아닐 때 까지
  while (fast.next !== null) {
    //범위를 줄여나감
      slow = slow.next;
      fast = fast.next;
  }
  // Fast [5]
  // Slow [3,4,5]
  
  //딱 지우면 됨
  slow.next = slow.next.next;
  return head;
};