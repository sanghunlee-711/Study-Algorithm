//ref :  https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/787/

//First Trail
//뭔가 두번째 인자로 주면서 변경해주면 될줄 알았음 ..
//[1,2,3,4,null,null,5] 케이스에서 이제 답도 안나옴..
var zigzagLevelOrder = function(root) {
  let result = [];
  if(!root) return result; //엣지케이스
  let que = [[root,false]]; //각 원소의 두번째 인자는 좌 우 판단을 위해 넣는 것.
  
  
  while(que.length) {
      const row = []; //각 레벨별 노드를 담기 위함
      const qlen = que.length;
      for(let i = 0; i < qlen; i++){
          const shiftSet = que.shift();
          const curr = shiftSet[0]; //현재 노드
          const isLeft = shiftSet[1]; // 왼쪽 먼저 갈것인가?
          row.push(curr.val); //1. 현재노드 
          if(isLeft) {
              if(curr.left) que.push([curr.left,false]) //3.좌측 노드
              if(curr.right) que.push([curr.right,false]) //2.우측 노드
          }else{
              if(curr.right) que.push([curr.right,true]) //2.우측 노드
              if(curr.left) que.push([curr.left,true]) //3.좌측 노드
          }

      };
      result.push(row);
  }
  return result;
};

//Second Trial
//각 보통의 dfs탐색처럼  전위순회인가 이게 여튼 그대로 탐색하고
//reuslt배열만 변경해주는 거임.
var zigzagLevelOrder = function(root) {
  let result = [];
  if(!root) return result;
  let que = [root];
  
  while(que.length) {
      let row = [];
      let qlen = que.length;
      for (let i = 0; i < qlen; i++) {
          let curr = que.shift();
          row.push(curr.val);
          if(curr.left) que.push(curr.left);
          if(curr.right) que.push(curr.right);
      };
      result.push(row);
  };
  
  //여기서 result배열만 변경해줌.
  for(let i = 0; i < result.length; i++){
      if(i%2 === 1) {
          result[i] = result[i].reverse();
      }
  };
  
  return result;
};

//Finding Answer
//재귀적으로 각 레벨을 받으면서 dfs를 실행함.

const dfs = (node, depth, tree) => {
  if(!node) return null;

  if(!tree[depth]) tree[depth] = [];
  tree[depth].push(node.val);
  dfs(node.left, depth+1);
  dfs(node.right, depth+1);
}

var zigzagLevelOrder = function (root) {
  let tree = [];
  dfs(root, 0, tree);
  for(let i = 0; i < tree.length; i++) {
    if(i%2 === 1) {//홀수 레벨 일때 트리 틀어버림
      tree[i].reverse();
    }
  }
  return tree;
}

//Best Answer
//내가 하려던 방식과 다소 다르지만 dir변수를 계속 변경해주며 순서를 바꿔줌

var zigzagLevelOrder = function(root) {
  if (!root) return []
  let direction = 1;
  
  let final = []
  let queue = [root]
  
  while(queue.length) {
      const size = queue.length;
      let level = []
      for(let i=0; i<size; i++) {
          const current = queue.shift()
          if (direction > 0) {
              level.push(current.val)
          } else {
              level.unshift(current.val)
          }
          
          if (current.left) queue.push(current.left)
          if (current.right) queue.push(current.right)
      }
      final.push(level)
      level = []
      direction *= -1
  }
  
  return final
};

//결론
//Mid Level의 트리 그래프 파트가 끝나면 순회 관련해서 한번 주욱 정리를 해야겠다...