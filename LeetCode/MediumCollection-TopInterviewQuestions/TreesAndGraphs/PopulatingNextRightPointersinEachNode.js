//ref :https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/789/
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.

// Example 1:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 212 - 1].
// -1000 <= Node.val <= 1000

// Follow-up:
// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

//First Trial
//sketch
//bfs임
// 각 row에 담던 탐색 결과들을 다시한번 돌려주면서 link만 서로 이어주고 별도의 탐색결과는 안 남기면 될듯.
// 이게 되네 ㅋㅋㅋ
var connect = function(root) {
  if(!root) return root;
  
  const que = [root];
  
  while(que.length) {
      const row = [];
      const qlen = que.length;
      
      for(let i = 0; i < qlen; i++) {
          const curr = que.shift();
          row.push(curr); //각 row를 배열에 담고
          if(curr.left) que.push(curr.left);
          if(curr.right) que.push(curr.right);
      };
      //각 row에 next를 오른쪽 친구로 대체해줌
      for(let j = 0; j < row.length; j++) {
          let next = row[j+1];
          if(next) row[j].next = row[j+1];
          if(!next) row[j].next = null;
      }
  }

  return root;
};

//Best Answer
//재귀와 삼항연산자를 적절히 조화해서 사용함.
var connect = function(root) {
  //재귀 종료 조건
  if(!root) return root;
  
  if (root.left) {
      root.left.next = root.right;
      connect(root.left);
  }
  if (root.right) {
    //여기서 null처리 따로 함.
      root.right.next = root.next ? root.next.left : null;
      //재귀로 계속 진행
      connect(root.right);   
  }
  
  return root;
};