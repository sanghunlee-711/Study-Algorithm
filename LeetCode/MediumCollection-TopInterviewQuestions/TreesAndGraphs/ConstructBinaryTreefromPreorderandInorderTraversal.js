//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/788/

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:
// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

//Trial
//이건 뭐 스케치고 뭐고.. 내가 순회에 대한 이해력이 많이 떨어져서
//30분동안 손도 못댄 문제이다
// 답을 열심히 보고도 이해하는데 시간이 꽤 걸려 트리 순회와 관련된것을 따로 공부해야겠다.
// ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/788/discuss/1258712/JS-Python-Java-C++-or-Easy-Recursive-Solution-w-Explanation

//preorder traversal  has [node, left, right] order
//inroder traversal has [left, node ,right] order
//the frist element in preorder should be root node value
//root element of inorder node should be middle of traversal results
//we can find each root node from pre and inorder with this theory
const splitTree = (preArr, map, preIdx, idxLeft, idxRight) => {
  let rootValue = preArr[preIdx];
  let root = new TreeNode(rootValue);
  let idxMid = map.get(rootValue);
  
  if(idxMid > idxLeft) {
      root.left = splitTree(preArr, map, preIdx+1, idxLeft, idxMid-1); //좌측 서브트리를 계속 탐색하기 위해서는 preorder탐색한 배열에서 미드값의 좌측을 계속 돌아보면 되는 것임
  };
  if(idxMid < idxRight) {
      root.right = splitTree(preArr, map, preIdx+idxMid-idxLeft + 1, idxMid+1 , idxRight);
  };
  
  return root
}


var buildTree = function(preorder, inorder) {
  const mapForCheck = new Map();
  for(let i = 0; i < inorder.length; i++) {
      mapForCheck.set(inorder[i], i);
  };
  
  return splitTree(preorder, mapForCheck, 0, 0, inorder.length - 1);
};

//Explanation
//preorder = [8,2,7,1,9,3,6], inorder=[7,2,1,8,3,9,6]
//이렇게 된 경우 inorder의 미드값인 8, Preorder의 첫번째 값인 8 은 root노드임 (원리상)
// 이때 inorder로 부터 idxMid를 알 수 있는데  3이 됨(8이 3번째 인덱스에 있으니껭)
// 이때 전체 배열 기준으로 본다면 idxLeft, idxRight는 0과 그 끝임
// 이 뜻은 왼쪽 서브트리는 idxMid - idxLeft = 3 - 0 으로 3이 됨
// 그러면 inroder탐색 결과 기준으로 봤을때 왼쪽 서브트리는  [7,2,1]이 됨
//오른쪽 서브트리는 iright- imid = inroder.length -1 - imid 이므로 [3,9,6]이 됨
//이렇게 preorder를 통해 알아낸 범위를 통해 inorder에 적용해서 쓸 수가 있게 됨
//이때 idxMid = idxLeft가 되는 순간 좌측 서브트리에는 더 이상 노드가 없는게 되므로 왼쪽에 대한 재귀를 멈추고 반대도 그러면 됨

