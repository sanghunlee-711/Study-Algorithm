//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

//First trial
// 코드가 더럽긴한데 왜 안되는지 찾지 못하는 중..
var maxDepth = function(root) {
  if(!root) return undefined; //엣지케이스

  let count = 1; //헤드가 있으므로 1부터 시작
  let temp = root;
  
  while(temp !== null){
      if(temp.left) { //maximum depth를 가지는 것이므로 왼쪽이 있으면 왼쪽으로 계속 가봄
          count++;
          temp = temp.left;
      }else{ //없으면 오른쪽 가봄
          if(temp.right){
              count++;
              temp = temp.right;    
          }else{
              count++;
              temp = temp.left;    
          }
      }
  }
  
  return count;
};

//Finding Solution
//비슷한 아이디어로 반복문 돌려서 푸는 방법
// 일단 생각하지 못한 하나의 포인트는 편향트리인 경우임.
// 아래와 같이 temp, parent ,children, nodes를 직접 만들어 카운팅을 할 수 있음

var maxDepth = function(root) {
  let answer = 0;
  if(!root) return answer; //엣지케이스

  let parent = [ [[root],1]];
  // 자식노드들을 담을 배열을 만듦.
  let children = [];

  while(parent.length) {
    let temp = parent.pop();
    let nodes = temp[0];
    let depth = temp[1];

    children=[];

    for(let i = 0; i< nodes.length; i+=1){
      // 더이상 리프노드가 없는 경우
      if(!nodes[i].left && !nodes[i].right){
        answer = Math.max(answer, depth);
      }

      // 현재 노드의 좌,우 각 각 존재시 각 각을 children에 넣어줌
      if(nodes[i].left) children.push(nodes[i].left); 
      if(nodes[i].right) children.push(nodes[i].right);
    };

    if(children.length) { //남은 부분이 있다면 다 소진 시 까지 넣어주기 ..
      parent.push([children, depth+1]);
    }
  }
  
  return answer;
};

// Finding solution 2
//재귀 방식으로 위에서부터 쭈욱 내려가는 방식
var maxDepth = function(root) {
  let answer = 0;
  if (root == null) return answer;

  let depth = 1;
  
  const helper = (root, depth) => {
    //들어온 node가 null이면
    if(root === null)
      return;
    
  //root로 들어온자의 좌우 노드 모드가 null이면
  //answer를 업데이트하고 실행 종료
      if (root.left == null && root.right == null) {
          answer = Math.max(answer, depth);
    return;
      }
      // 다음을 가기 위해 left, right 각자 실행 및 depth를 올려줌.
      helper(root.left, depth + 1);
      helper(root.right, depth + 1);
  }
  
  helper(root, depth);
  
  return answer;
}

// Finding solution 3
// 밑에서부터 위로 올라가는 방식
var maxDepth = function(root) {
    if(!root)
      return 0;
  
  const helper = (root) => {
      if (root == null) { //존재 안할때 0 반환
          return 0;
      }
      if (root.left == null && root.right == null) { //제일 최하단 리프노드일때 return 1
          return 1;
      }
      let left = helper(root.left);
      let right = helper(root.right);
      return Math.max(left,right) + 1; //+1은 루트때문에 해줌
  }
  
  return helper(root);
}

// Finding solution 3-2
// 유사한 개념임
var maxDepth = function(root) {
  if(!root) return 0;
  function go(node){
      if(!node) return 0;
      return Math.max(1+go(node.left), 1+go(node.right));
  }
  return go(root);
};


// Best Solution
const maxDepth = (root) =>{
  if(!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

// 체크리스트
// 1. 일단 트리나 dfs를 제대로 해본적 없으니 그러려니 해본다
//2. dfs가 이런거구나 다시 느껴보며 재귀함수를 트리처럼 하나씩 연장해서 그려보면 이해가 쉽다
//3. 아래 함수가 대표적인 예제임
const maxDepth = (root) =>{
  let answer = 0;
  const dfs = (root,depth) =>{
    if(!root) return;
    answer = Math.max(answer, depth);
    dfs(root.left, depth+1);
    dfs(root.right, depth+1);
  };
  dfs(root,1);

  return answer;
 }