//ref :https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/790/
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

//First Trail
//Sketch
// BFS로 전체 노드 탐색한 값 넣고
// 정렬 후에
// n번째를 찾으면 될 듯.
// 이게 또 되네
var kthSmallest = function(root, k) {
  const queue = [root];
  const result = [];
  
  while(queue.length) {
      
      const qlen = queue.length;
      const row = [];
      
      for(let i = 0; i < qlen; i++) {
          const curr = queue.shift();    
          row.push(curr.val);
          curr.left && queue.push(curr.left);
          curr.right && queue.push(curr.right);
      };
      result.push(row);

  }
  
  return result.flatMap(el=>el).sort((a,b)=>a-b)[k-1]
};

//Best Answer
//일단 이진'탐색' 트리이므로  왼쪽 subTree는 더작은 값을 , 오른쪽 subTree는 더 큰 값을 가지게 된다는게 문제 조건인데 이걸 놓쳤네
// 이렇게 된 상태에서 inorder() 중위 순회를 하게 되면 내가 푼것 처럼 따로 정렬을 하지 않아도 알아서 정렬된 탐새결과를 받을 수 있게 됨.

//중위순회
// 1. 왼쪽 서브트리를 중위 순회한다.
// 2. 노드를 방문한다.
// 3. 오른쪽 서브트리를 중위 순회한다

function kthSmallest(root,k){

  function inOrder(root){
      if(root === null){
        //초기에 배열을 만들어 주고
          return []
      } else {
        //배열에 결과값을 중위 순회 하며 좌, 중간, 우 를 담아줌
          return inOrder(root.left).concat([root.val]).concat(inOrder(root.right))
      }
  }
  //이미 정렬된 배열에서 k-1번째를 찾아서 리턴해주면 됨
return inOrder(root)[k-1]
}
