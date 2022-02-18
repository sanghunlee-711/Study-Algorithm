//ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

//First Trial
//Sketch
// 이것도 dfs 느낌으로다가  풀 수 있을 것 같은데..
// root.left.val === root.right.val?
// 대칭이니까 같은것만을 생각하는게아니므로 depth가 짝수인 서브트리를 체크할때는 -> 일이 많아짐..
// root.left.val === root.right.val
// 아니면 한쪽의 서브트리를 아예 대칭으로 다 바꾸는 작업을 거친 뒤에 같은 트리인지 확인하면 ??
// 바꾸는건 재귀해서 한다 치고
// 비교는 어케할거임

// 1. 한쪽 서브트리를 좌우 대칭 해서 모두 바꾸게 됨.
const changeOneSubTree = (root)=>{
  if(!root) return;
  const left = root.left;
  root.left = root.right;
  root.right = left;
  changeOneSubTree(root.left);
  changeOneSubTree(root.right);
};

var isSymmetric = function(root) {
  let answer = true;
  //얼리 리턴
  if(root.left.val !== root.right.val) return false;

  changeOneSubTree(root.left);
    //2. 루트 기반으로 양쪽의 값이 같은지 판단하는 로직
    const defineSame = (root) =>{
        if(!root) return;
        if(root.right.val !== root.left.val) {
            answer = false;
        }
        defineSame(root.right);
        defineSame(root.left);
    }

  defineSame(root);
  return answer;
};

//못품
//Finding Solution
//1 . Recursion
// 전위 순회 (root -> left -> right)를 이용해서 재귀를 이용한 미러링을 함
// 나도 재귀 썻는데 ㅂㄷㅂㄷ..
const solution = (root) =>{
  if(!root) return true;

  //미러링 되는지 체크해봄
  const isMirror =(s,t) => {
    //양 노드들이 모두 null이면 대칭 맞음
    if(!s && !t) return true 
    //양쪽 중 하나라도 없거나 값이 맞지 않으면 false임 조건에 맞지 않음
    if(!s || !t || s.val !== t.val) return false
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  }

  return isMirror(root.left, root.right);
};
//2. Iterable
const solution = (root) =>{
  if(!root) return true;
  let stack = [];
  //전위 순회 활용할 것이므로 왼쪽 부터 넣어주깅
  stack.push(root.left);
  stack.push(root.right);

  while(stack.length) {
    const right = stack.pop();
    const left = stack.pop();

    if(!left && !right) continue; //조건에 위배되지 않으므로 대칭이 되는상황
    if(!left || !right || left.val !== right.val ) return false;

    stack.push(left.right);
    stack.push(right.left);
    stack.push(left.left);
    stack.push(right.right);
  }
  return true;
}
//내 문제점: 조건을 먼저 간소화 시켰어야함 (이걸 아하고 넘어가니까 코드만 늘어나고 풀어내질 못해버림)

// 최종 답
var isSymmetric = function(root) {
  if(!root) return true; //아무것도 없음 걍 대칭
  
  //대칭되는지 확인하는 함수 만들기
  const isSym = (first, second) => {
      if(!first && !second) return true; // 양쪽 다 없으면 대칭임
      if(!first || !second || first.val !== second.val) return false; //대칭 안됨
      return isSym(first.left, second.right) && isSym(first.right, second.left);
  }
  return isSym(root.left, root.right);
};