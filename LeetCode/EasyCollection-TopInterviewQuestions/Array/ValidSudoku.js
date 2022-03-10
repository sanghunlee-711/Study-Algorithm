//ref: 
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

//First Trial
// set에 걍 특정 문자열로 지정해서 넣고 row, column개념으로 나눠서 넣자
// 3개씩 나눠줘야함 
//1. 각 row에 같은값 있으면 안됨
//2. 각 column에 같은값 있으면 안됨
//3. 같은 블락안에 같은 값 있으면 안됨

var isValidSudoku = function(board) {
  const set = new Set();
  
  for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++) {
          const value = board[i][j];
          
          if(value === ".") continue;
          
          // row, column씩 블록을 가지게 됨
          // 1블락 2블락 3블락
          // 4블락 5블락 ... 이렇게 생각하면 이해가 됨.
          const subBox = 3 * Math.floor(i/3) + Math.floor(j/3); 
          const rowValue = `row:${i} value:${value}`;
          const columnValue = `column:${j} value:${value}`;
          const subBoxValue = `subBox:${subBox} value:${value}`;
          
          
          if(set.has(rowValue) | set.has(columnValue) | set.has(subBoxValue)) return false;
          
          set.add(rowValue);
          set.add(columnValue);
          set.add(subBoxValue);
      }
  }
  return true;
};

//Best Solution
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    //세개의 set 자료구조를 통해서 빠른판단을 내릴 수 있게 만듦
  let row = new Set(),
      col = new Set(),
      box = new Set();

  for (let j = 0; j < 9; j++) {
    //row, col, box의 값을 하나씩 다 변수로 할당함
    let _row = board[i][j];
    let _col = board[j][i];
    let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
    
    //각 row, col, box모두 조건을 걸어서 빠른 return을 시켜줘서 성능이 좋나봄.
    if (_row != '.') {
      if (row.has(_row)) return false;
      row.add(_row);
    }
    if (_col != '.') {
      if (col.has(_col)) return false;
      col.add(_col);
    }
    
    if (_box != '.') {
      if (box.has(_box)) return false;
      box.add(_box);
    } 
  }
}
return true
};

//결론:
// box를 어떻게 구하고 반복되는 것을 어떻게 체크하는지가 관건이었던 문제 같다.
//사실 매번 조건을 적지만 결국 문제에 이러면 실패케이스야라고 매번 잘 말해주는데 인지시간이 많이 딸리는 느낌이다..

