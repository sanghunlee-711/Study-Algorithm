//ref:


//FirstTrial
//요즘 컨디션이 미친건가..

//isChecked 를 넣어서 체킹되었는지를 계속 확인해줘야할 것 같네 흠..
//grid[i][j] === 1이면 while문으로 ver, hor 0나오기 전까지의 1인거 다 체크 후 islandCount +=1;
//grid[i][j] === 1인데 인접한 원소 grid[i-1][j] || gird[i][j-1]에 1이고 true인거 있으면 count추가 x 그리고 방문처리
//grid[i][j] === 0 이면 걍 스킵
//grid[i][j].isChecked = true 여도 스킵
// 이렇게 하면 답도없이 구현이 복잡할 것 같음 기존에 트리관련문제처럼 재귀를 생각해보자
// 방문한 경우 0 처리 1나오면 걍 카운트 올려주고 사방을 다 0으로 만들면 됨
// 만약 1로 둘러쌓여있다고 하더라도 4방향을 다 돌려줄때 이미 0이아닌 경우 재귀로 들어가는 순간 다 0이 되게 만들면 됨
// 그러면 반복문에서 한번 찍힌놈만 1로 됨

//이게 되네 ;-;..
const findAndCount = (grid, r, c) => {
  //존재하지 않는 인덱스거나 0인경우 신경안씀
  if(!grid?.[r]?.[c] || grid[r][c] === "0") return;
  
  //해당값이 count된 값인경우 0으로 변경하고 4방향 좌표를 다시 재귀로 풀어버림
  grid[r][c] = '0';
  findAndCount(grid, r+1, c);
  findAndCount(grid, r-1, c);
  findAndCount(grid, r, c-1);
  findAndCount(grid, r, c+1);
  
}

var numIslands = function(grid) {
  let count = 0;
  
  for(let i = 0; i < grid.length; i++) {
      const row = grid[i];
      for(let j = 0; j < row.length; j++) {
          if(row[j] === "1") {
            //이때 이후로는 현재의1 및 인접된 1은 다 0이 됨(재귀를 통해)
              count++;
              findAndCount(grid,i,j);
          }
      }
  }
  return count;
};

//Best Answer
//조건이 조금 더 구체적임
//이걸 dfs라 부를 수 있나 근데 ...??
var dfs = function(grid,row,col) {
  var numOfRows = grid.length;
  var numOfCols = grid[0].length;

  //r, c의 유효한 범위를 미리 잡아주고 return 시켜줌
  if (row < 0 || col < 0|| row >= numOfRows || col >= numOfCols || grid[row][col] == '0') {
    return;
  }

  grid[row][col] = '0';
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col - 1);
  dfs(grid, row, col + 1);
}

var numIslands = function(grid) {
  var num_islands = 0
  for(var i=0;i<grid.length;i++) {
      for(var j=0;j<grid[i].length;j++) {
         if(grid[i][j] == "1") {
              //found land
              num_islands++
              dfs(grid,i,j)
          }
      }
  }
  return num_islands
};
