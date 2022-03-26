

//ref:https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/786/

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?

//dfs각
//근데 재귀가 하찮다고... 반복문으로 하라는데 허허허허헣
//하지만 난 dfs를 구현할줄 모르는 것 같군
// 아 .. 금연과 맹장수술 알고리즘 넘나 빡센 조합
//답을 보자 :)
//강의를 보고도 dfs와 중위순회를 구분못함 ㅎㅅㅎ
//쉽게 생각하면 dfs(깊이우선탐색)의 부분집합으로 전위 중위 후위 순회의 방식이 존재하는 거임
//InOrder Traversal(중위 순회)은
    //1. 재귀적으로 왼쪽 subTree다 탐색
    //2. 현재 노드 방문
    //3. 재귀적으로 오른쪽 서브트리 다 탐색
    const inorder = (node, result) => {
      if(!node) return null;
      inorder(node.left, result); //왼쪽 서브트리 재귀 돌리깅
      result.push(node.val) //현재 노드 방문 처리
      inorder(node.right, result); // 오른쪽 서브트리 재귀 돌리깅
  }
  
  var inorderTraversal = function(root) {
      let result = [];
      inorder(root, result);
      return result;
  };
  
  
  //Best Answer
  //짜치는 재귀가 아닌 반복문을 사용함.
  var inorderTraversal = function(root) {
    let result = []; //방문한 애들을 담을 배열
    if(!root) return result; //엣지케이스 처리
    let stack = []; // 탐색을 위한 스택
    let current = root;

    while(current || stack.length) {
      while(current) {
        stack.push(current);
        current = current.left; //왼쪽서브트리부터 stack에 다 넣어줌
      }
      //현재 노드 방문 처리
      current = stack.pop(); 
      result.push(current.val); 
      //오른쪽을 탐색해봄
      current = current.right;
    }
    return result;
};


//결론
//이정도는 걍 달달 외워버리자 아아아아아!!!