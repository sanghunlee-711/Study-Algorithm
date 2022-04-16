//ref:


//First trial
//손도못댐
// 머리가 왤케 안돌아가냐 ..
//중등수학 수준인것 같은데 왜 적어보며 이해하기가 싫을까 헤헤

//찾은답 복기하며 풀어 제출한 것.
//table[row][col]의 도달 경우의 수는 table[row+1][col] + table[row][col+1]과 같음
//역방향 탐색을 할 것이므로 뒤에서부터 채워줘야함
var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(0).map(()=> new Array(n)); //0으로 채운 m*n테이블 미리 만듦
  
  for(let row = m -1; row >= 0; row --) {
      for(let col = n-1; col >= 0; col--) {
          if(row === m-1 || col === n-1) {
              dp[row][col] = 1; //역방향 탐색이므로 끝에값이 시작값 = 1로 시작해줌
          }else{
              dp[row][col] = dp[row+1][col] + dp [row][col+1];
          }
      }
  }
  return dp[0][0]
  
};

//Finding solution
/*
[DP]

(row,col)의 경우의 수는 (row, col+1) + (row+1, col)임


row=m-1의 모든 항목과 col=n-1의 모든 항목은 오른쪽 또는 아래쪽으로만 이동할 수 있기 때문에 값이 1이라는 것을 알고 있음.
따라서 이게 우리의 기본 개념이 될 것임
그래서 우리는 grid를 거꾸로 탐색하고 dp 테이블을 채울 것임.

답은 dp[0][0]임. (0,0)에서 오른쪽 하단까지의 경로 수를 파악하기를 원하기 때문입니다.(거꾸로 탐색하니까 그런가봄)
*/
var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n));
  for (let row = m-1; row >= 0; row--) {
      for (let col = n-1; col >= 0; col--) {
          if (row === m-1 || col === n-1) {
              dp[row][col] = 1;
          } else {
              dp[row][col] = dp[row][col+1] + dp[row+1][col];
          }
      }
  }
  return dp[0][0];
  // T.C: O(M*N)
  // S.C: O(M*N)
};


/*
[Recursion & Memo]

1. We will use DFS to traverse every possible path starting at (0,0). The function dfs() will be called
recursively until the bottom-right (where row = height-1, col = width-1) is reached. 
- Once the bottom-right is reached, 1 is returned because it means there is a path.
- If invalid row or col index is given, 0 will be returned. 
- If given row and col have already been visited, the result will be returned from this memoization table.
- If given row and col are valid, not bottom-right, unvisited position, we will call dfs one to the right and one to the bottom, add these results, record it to our memoization table and return it.

We will use a m x n 2-d array for a memoization table.
*/
var uniquePaths = function(m, n) {
  let memo = new Array(m).fill(0).map(() => new Array(n));
  return dfs(0, 0, m, n, memo);
  // T.C: O(M * N), M = # of rows, N = # of columns
  // S.C: O(M * N)
};

// Returns the number of possible paths from given (row,col) to the bottom-right
function dfs(row, col, height, width, memo) {
  // invalid index
  if (row < 0 || row >= height || col < 0 || col >= width) {
      return 0;
  }
  // the right-bottom is reached
  if (row === height-1 && col === width-1) {
      return 1;
  }
  if (memo[row][col] !== undefined) {
      return memo[row][col];
  }
  let res = dfs(row, col+1, height, width, memo) + dfs(row+1, col, height, width, memo);
  memo[row][col] = res;
  return res;
}

//Best Answer
//얘는 재귀를 활용해서 정방향으로 탐색을 하게 됨.
var uniquePaths = function(m, n) {

  const pathMemo = (arr, m, n) => {
       if(m === 0 || n === 0) {
         //시작점은 1
           arr[m][n] = 1;
       }
       else if(arr[m][n] === undefined) {
         //방문안했으면 그 전의 경우의 수 합해서 방문처리해줌
           arr[m][n] = pathMemo(arr, m-1, n) + pathMemo(arr, m, n - 1);
       }
       return arr[m][n];   
   }

   let arr = new Array(m).fill(undefined).map((el) => new Array(n).fill(undefined)); 
   //m*n테이블 만듦
   return pathMemo(arr, m - 1, n - 1);
};