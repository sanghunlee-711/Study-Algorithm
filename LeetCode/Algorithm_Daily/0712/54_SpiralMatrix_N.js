/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//bfs느낌으로다가 가면 될듯
//재귀는 구현하기 힘들것 같음(다시 올라가야하는데 그거까지 굳이.. 조건 너무많음)
//짱돌 굴리다가 안돌아가서 그냥 답본 나쁜 생각을 한 날.
var spiralOrder = function(matrix) {
  const answer = [];
  
  let row = 0, 
      col = 0, 
      rowMax = matrix.length -1, 
      colMax = matrix[0].length -1;
  
  while(row <= rowMax && col <= colMax) {
      //상단 채움
      for(let colIdx = col; colIdx <= colMax; colIdx++) {
          answer.push(matrix[row][colIdx]);
      };
      
      //우측 다채움(max임)
      for(let rowIdx = row+1; rowIdx <= rowMax; rowIdx++) {
          answer.push(matrix[rowIdx][colMax]);
      }
      
      if(row < rowMax && col < colMax) {
          //범위내에 존재할때 (바닥쪽)
          for(let colIdx = colMax -1 ; colIdx >= col; colIdx--) {
              answer.push(matrix[rowMax][colIdx]);
          }
          
          //왼쪽
          for(let rowIdx = rowMax -1 ; rowIdx > row; rowIdx--) {
              answer.push(matrix[rowIdx][col]);
          }
      }
      
      row++, col++, rowMax--, colMax--;
  }
  
  return answer;
};