//ref:  https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/797/


// First finding Solution
//not work..
//
const dfs = (board, word, row, col, idx) => {
  if(idx === word.length) return true // terminate condition
  
  //범위 밖이면 false
  if(row < 0 || row.length >= board.length || col < 0 || col.length >= board[0].length) return false;
  
  if(board[row][col] !== word[idx]) return false;
  
  const temp = board[row][col];
  
  board[row][col] = "*"; // visit
  let bool = dfs(board, row++,col, idx++) || dfs(board, row--,col, idx++) || dfs(board, row,col++, idx++) || dfs(board, row,col--, idx++);
  board[row][col] = temp;
  
  return bool
  
}

var exist = function(board, word) {
  let answer = false;

  for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[i].length; j++) {
        // 각 row, column별로 다 넣어줌
          if(dfs(board, word, i, j, 0)) answer =  true;
      }
  }
  return answer;
};


//Best Answer;
//적은거랑 같은 코드 같은데 왜 난 안되냐 ;-;.. 
let dfs = (board, word, i, x, y) => {
  if(i == word.length) return true;
  if(x < 0 || y < 0 || x >= board.length || y >= board[0].length ||
    word[i] !== board[x][y]) return false; 
  let c = board[x][y];
  board[x][y] = '#';
  let res = (dfs(board, word, i + 1, x + 1, y) ||
            dfs(board, word, i + 1, x, y + 1) || 
             dfs(board, word, i + 1, x - 1, y) ||
             dfs(board, word, i + 1, x, y - 1));
  board[x][y] = c;
  return res;
}
var exist = function(board, word) {
let count = 0;
for(let i = 0 ;i < board.length; i++){
  for(let j = 0; j < board[0].length; j++){
      if(dfs(board, word, 0, i, j)) return true;
      count++;
  }
}
return false;
};