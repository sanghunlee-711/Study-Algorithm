/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
pseudo code
방문한 블록을 체크할 것이 필요함
=> map을 써보자

- helper
BaseCase
범위 박인경우 또는 r,c값이 map에 존재하지 않는 경우 || 이미 방문한 경우

*/



var maxAreaOfIsland = function(grid) {
  //방문 체크할 초기 배열을 일단 false로 grid와 같은 크기로 다 채워줌.
  const seen = Array.from(Array(grid.length), ()=>Array(grid[0].length).fill(false));
  let maxArea = 0;
  
  const helper = (row, col) => {
      //이미 방문했거나 범위를 벗어났거나 원래 0 인 경우 그냥 0 반환
      if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || seen[row][col] || grid[row][col] === 0) {
          return 0;
      }
      //방문 처리
      seen[row][col] = true;
      //기본적으로 한개의 넓이는 1을 가지므로 방문처리 되었으므로 1+를 해줌
      return (1 + helper(row+1,col) + helper(row-1,col) + helper(row,col+1) + helper(row,col-1))
  };
  
  
  //회문 다 돌면서 최고 넓이 갱신 해주기
  for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[0].length; c++) {
          maxArea = Math.max(maxArea, helper(r,c));
      }
  }
  return maxArea;
};