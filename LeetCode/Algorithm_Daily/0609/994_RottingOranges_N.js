/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
사방으로 bfs날리면 되는 문제 같음
1. 기존 matrix를 어떻게 new Matrix로 만들어서 조건을 주느냐가 관건임
    * matrix를 받았을때 rotten(2) 이 없으면 불가능하므로 -1 반환
    * rotten의 포지션을 queue에 집어넣고 시작
    * queue를 통해 bfs를 돌릴 때 position(4-direction)을 회문하며 1이 있는 경우 2로 업데이트 하고 방문처리함
    * 2인경우 방문되었으므로 방문처리 하지 않고 queue에 넣지도 않음
    * 0인 경우에는 어차피 빈 칸이므로 queue에 넣지않고 건너띔
    queue가 비면 멈추면 됨
    
*/

var orangesRotting = function(grid) {
  const position = [[1,0], [0,1], [-1,0], [0,-1]]
  let queue = [];
  let answer = 0;
  let freshCount = 0;
  //1. 상한 오렌지 위치만 queue에 저장함
  for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[row].length; col++) {
          if(grid[row][col] === 2) {
              queue.push([row, col]);
          }else if(grid[row][col] === 1){
              freshCount++;
          }
      }
  }
  
  //no cell fresh orange -> no answer count
  if(freshCount === 0) return 0;
  //bfs
  while(queue.length !== 0) {
      let len = queue.length;
      let rottenCount = 0;
      for(let i = 0; i < len; i++) {
          const [row, col] = queue.shift();
          if(grid[row][col] === 1) {
              //대기하고 있떤 오렌지 썪음 처리
              rottenCount++;
              grid[row][col] = 2;
          }
          for(let [x,y] of position) {
              //사방으로 확장 해봤을 때
              x = row + x;
              y = col + y;
              if(x > -1 && y > -1 && x < grid.length && y < grid[x].length && grid[x][y] === 1){
                  queue.push([x,y]);
              }
          }
          
      }
      //썩은 오렌지 카운트 된다면
      if (rottenCount > 0) {
          //frsh오렌지 카운트 줄이고
          freshCount -= rottenCount;
          //단계도 올려줌
          answer++;
      }
      
  }
  return freshCount === 0 ? answer : -1;
};