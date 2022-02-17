//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// 이진트리 루트 줄껀데 유효한 이진탐색트리인지 알아보셈
// A valid BST is defined as follows:
// 아래는 유효한 이진탐색트리정의임

// The left subtree of a node contains only nodes with keys less than the node's key.
// 왼쪽은 상위 노드보다 작은값만 가능함
// The right subtree of a node contains only nodes with keys greater than the node's key.
// 오른쪽은 상위노드보다 큰값만 가능함
// Both the left and right subtrees must also be binary search trees.
// 양쪽 서브트리는 무조건 이진탐색트리여야함

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

//First Trial
//Sketch
// 이러면 다 방문해야하는거 아닌가
// 어떻게 케이스를 줄인담

// 일단 기본 스케치는 아래와 같게 하면서 root를 변경해주면 될듯 한데 
// 탐색 순서가 문제임
// root.left.val < root.val
// root.right.val > root.val
// dfs로 최소 최대, 해당 루트 노드 재귀 돌리면 될듯 ㅇㅇ

const dfs = (min, high, node) => {
  if(!node) return true; //엣지 케이스

  return min < node.val && high > node .val 
          && dfs(min, node.val, node.left)  // 좌측 노드 탐색
          && dfs(node.val, high, node.right) // 우측 노드 탐색
}

const solution =(root) =>{
  return dfs(-Infinity, Infinity, root);
}

// Best solution

var isValidBST = function(head, min, max) { //인자 더 받아버림
  if(!head) return true; //엣지 케이스 처리
  if(head.val <= min){ //작아도 아님
      return false;
  }
  if(head.val >= max){
      return false; //커도 아님
  }
  // 조건에 맞게 재귀 시킴
  return isValidBST(head.left, min, head.val) && isValidBST(head.right, head.val, max);
};


// Finding Solution
// Iterbale solution with ordered list

function inorder(node, list) {
  //이진탐색트리 왼 중간 오른 순으로 값을 담을 리스트를 받아서 순서대로 넣어줌
  if(!node) {
      return;
  }

  inorder(node.left);
  list.push(node.val);
  inorder(node.right);
}

var isValidBST = function(root) {
  const inorderList = [];            // 순서대로 값들 담을 배열 만듦
  inorder(root, inorderList);               // 값들 담아줌
  for(let i = 1; i < inorderList.length; ++i) {
       // 순서대로 맞게 들어간 리스트에 이진탐색트리  조건 안맞으면 false판단
      if(inorderList[i] <= inorderList[i - 1]) {
          return false;
      }
  }
  return true;
  

};