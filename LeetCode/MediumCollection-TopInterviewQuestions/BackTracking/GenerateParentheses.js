//ref:


//First Trail
// 처음에는 걍  nCr조합으로 모든 경우를 다 찾고 해결하려함
// 일단 안됨 2C3이 가능한가? 확인 필요

//그래서 인덱스로 어찌 해결해보려했지만 안됨
//찾아봄
//아이디어
//dfs재귀를 통해서  index positon(pos)로 가능한 결과만을 찾아내는 거임
// 각 position(pos)에서 닫혀있지 않고 공간이 남아있다면 알맞는 한쌍을 찾게 만드는 것임
// 다 도달하면 답 배열에 넣는것
// 쉽게 연산하기 위해 bit연산자를 사용한다고 함.

var generateParenthesis = function(N) {
  let ans = [], m = 2 * N
  
  const dfs = (pos, open, seq) => {
      if (pos === m) {
          let res = new Array(m)
          for (let i = 0; i < m; i++)
              res[i] = seq & 1 << i ? "(" : ")"
          ans.push(res.join(""))
          return
      }
      if (open) dfs(pos+1, open-1, seq)
      if (m - pos > open) dfs(pos+1, open+1, seq | 1 << pos)
  }
  
  dfs(0, 0, 0)
  return ans
};


//Finding Solution 2
var generateParenthesis = function(n) {
  let res = [];
  let string = '';
  const go = (s, l, r)=>{
      if(s.length===2*n){
          res.push(s);
          return;
      }
      if(l<n) go(s+'(',l+1,r);
      if(r<l) go(s+')',l,r+1);
  }
  go(string, 0, 0);
  return res;
};

//DFS
//이게 이해가 제일 잘 가네
var generateParenthesis = function(n) {
  // Using backtracking and DFS
  let res = [];
  
  const dfs = (str, open, close) => {
      // Backtracking case: number of ')' can't be more than number of '('
      if (open < close) return;
      
      // Base case: there are n number of open and close parenthesis
      if (open === n && close === n) {
          res.push(str);
          return;
      }
      
      // DFS traversal
      if (open < n) dfs(str + '(', open + 1, close);
      if (close < n) dfs(str + ')', open, close + 1);
  }
  
  dfs('', 0, 0);
  return res;
};

//Submit Answer
const dfs = (str, open , close, answer, n) => {
  //close가 더큰 경우는 올바르지 못한 경우이므로 걍 return
  if(open < close) return;
  //조건 충족한 경우 답배열에 넣어줌
  if(open === n && close === n) answer.push(str);
  //open이 조건을 충족하지 못한경우 str에 open 괄호를 하나 넣어주고 open개수를 올려줌
  if(open < n) dfs(str+"(", open+1, close, answer, n);
  //close가 조건을 충족하지 못한경우 str에 close 괄호를 하나 넣어주고 close개수를 올려줌
  if(close < n) dfs(str+")", open, close+1, answer, n);
}

var generateParenthesis = function(n) {
  let res =[];    
  dfs('',0,0,res,n); //시작
  return res;
};

//Best Answer
//객체를 활용해 이해가기 더 쉽게 코드 침
const backtrack = ({ combinations, numOpen, numClose, n, current }) => {
  //조건 충족하는 경우 답안에 넣음
  if (current.length === n * 2) {
      combinations.push(current);
      return;
  }
  
  //여는 괄호가 부족한 경우 여는 괄호를 추가해주며 open의 개수를 올려 재귀 처리
  if (numOpen < n) {
      backtrack({ combinations, numOpen: numOpen + 1, numClose, n, current: current + '(' });
  }
  
  //close가 open보다 적은 경우라는 조건을 통해 제출 답안보다 조건하나를 더 줄일수 있게 됨
  if (numClose < numOpen) {
      backtrack({ combinations, numOpen, numClose: numClose + 1, n, current: current + ')' });
  }
}

var generateParenthesis = function(n) {
  const combinations = [];
  
  backtrack({ combinations, numOpen: 0, numClose: 0, n, current: '' });
  
  return combinations;
};