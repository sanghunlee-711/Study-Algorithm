//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
 

// Follow up:
// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


//First Trial
//sketch
// 객체로 만들어서 0으로 변경 되었는지 체크 => {val: 1, isZero: false};
// for loop 돌림
// condition
// 만약 val이 0 이면 주변에 isZero가 0 이고 val이 0 이 아닌 경우 isZeor를 true로 만듦
// 마지막으로 다시 .map돌려서 isZeor트루만 0으로 바꿔주면 되나?..
var setZeroes = function(matrix) {
  const hashMatrix = matrix.map((sub) => sub.map((num)=>{
      return {
          val:num,
          isZero:false,
      };
  }));
  
  for(let i = 0; i < hashMatrix.length; i ++) {
      const r = hashMatrix[i];
      const rLen = r.length;
      for(let j = 0; j < rLen; j++) {
          if(r[j].val === 0) {
              let k = 0;
              let w = 0;
              while(k < hashMatrix.length) {
                  hashMatrix[k][j].isZero = true;
                  k++;
              };
              
              while(w < rLen) {
                  hashMatrix[i][w].isZero = true;
                  w++;
              };
          };
      };
  };
  
  for(let i = 0; i < hashMatrix.length; i++) {
      for(let j = 0; j < hashMatrix[i].length; j++) {
          if(hashMatrix[i][j].isZero) {
              matrix[i][j] = 0;
          }else{
              matrix[i][j] = hashMatrix[i][j].val;
          }
      }
  };
};  



// Best solution
//이중 반복문을 도는 것은 똑같으나 내가 푼것과 다르게 0인 row, column값만 set에 따로 저장하여
// 해당하는 index의 값을 다이렉트로 바꾸는 방식을 택함.
//이렇게 하면 내가 while로 동일 row, column값을 억지로 바꿔준것 처럼 l
//ogN번의 반복을 더 안해도 되어 좋음
var setZeroes = function(matrix) {
  var columnSet = new Set();
  var rowSet = new Set();
  
  for (var row = 0; row < matrix.length; row++) {
      for (var col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === 0) {
              columnSet.add(col);
              rowSet.add(row);
          }
      }
  }
  
  for (var row = 0; row < matrix.length; row++) {
      for (var col = 0; col < matrix[0].length; col++) {
          if (columnSet.has(col) || rowSet.has(row)) {
              matrix[row][col] = 0
          }
      }
  }
};