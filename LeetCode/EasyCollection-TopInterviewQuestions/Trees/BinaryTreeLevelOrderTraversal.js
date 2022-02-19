//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

//First Trial
// 순서는 1. [루트]
// 2. [좌,우]
// 루트 -> 좌 -> 우 이므로 preorder traversal은 전위순회를 구현하면 될 듯
// 참고로 중위(Irorder Traversal)순회 는 왼쪽 자식노드 -> root노드 -> 오른쪽 자식노드
// 후위순회(Postorder Traversal)는 왼쪽 자식노드 -> 오른쪽 자식노드 -> 부모노드 순임

//Sketch
// 이또한 재귀로 구현하면 편할 것 같음
// helper의 인자로 루트와 그것을 넣을 배열을 받으면 될 듯
// 조건: 들어온 루트가 Null이면 리턴 ? 
// root.left가 있으면 root다음 인덱스에 root.left의 value를 넣음
// root.right가 있으면 root 다음 인덱스에 root.right의 값도 넣음
//[0,2,4,1,null,3,-1,5,1,null,6,null,8] 이케이스가 왜 안되는지 찾다가 끝
// 못품
const helper = (root, arr, idx) =>{
  if(!root) return;
  
  if(root.left) {
      arr[idx] = [root.left.val];
      helper(root.left, arr, idx+1);
  }
  
  if(root.right) {
      if(!arr[idx]) {
          arr[idx] = [root.right.val];
      }else{
          arr[idx].push(root.right.val);    
      }
      
      helper(root.right, arr, idx+1);
  }
}

var levelOrder = function(root) {
  if(!root) return [];
  let arr = [[root.val]];
  helper(root, arr, 1);
  return arr;
};

//Finding Solution
// 이진트리의 순서대로 탐색은 일반적으로 대기열 데이터 구조를 사용하는
//  BFS(깊이넓이 탐색)으로 queue를 이용해 접근한다고 함
// 개념: 노드를 처리할 때 순회하려는 순서(왼쪽 -> 오른쪽 (문제가 그럼))에 따라 노드의 자식들을 대기열의 끝으로 푸시 해줌.
// 이렇게 반복해서 다음행을 큐에 넣는것을 완료할 것임
 
const solution = (root)=>{
  const q = [root];
  const answer = [];

  while(q[0]) {
    let qlen = q.length;
    let row = []; //이진트리에서 각 열(각 레벨의 노드)을 넣을 배열

    for(let i = 0; i < qlen; i+=1) {
      const curr = q.shift(); // 대기중인 큐에서 제일 첫번째
      row.push(curr.val); //현재값을 row배열에 넣어줌
      //순서에 맞게 넣어줌
      if(curr.left) q.push(curr.left);
      if(curr.right) q.push(curr.right);
    }
    answer.push(row);
  };

  return answer;
}

//Best solution 
// 찾은 답과 거의 유사하고 엣지케이스를 미리 처리하게 해놓음
var levelOrder = function(root) {
  if (!root) {
      return []
  }
  const result = []
  const que = [root]
  
  while(que.length !== 0) {
      const row = []
      const qlen = que.length
      for (let i = 0; i < qlen; i++) {
          const cur = que.shift()
          row.push(cur.val)
          if(cur.left) que.push(cur.left)
          if(cur.right) que.push(cur.right)
      }
      result.push(row)
  }
  
  return result
};

//문제점
// BFS는 익숙치 않아서 이 기회에 공부가 좀 되었다.