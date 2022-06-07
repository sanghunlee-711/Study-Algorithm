/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
/*
pseudo
sr, sc부터 시작해서 4방향으로 같은 색(숫자)면 모두 newColor로 바꿔줌
그리고 바뀐색들의 위치에서도 동일한 로직을 진행하면 됨.

baseCase 
일단 n*n dimension이라고 보면 n보다 클때는 멈춰줘야함
다른숫자 (ex 0)이면 멈춰야함.
check여부를 확인해야하나 싶은데 일단 돌려보자
그냥 베이스케이스를 길이로 인덱스 컷하려했는데 뭐때문인지 안되서 걍 조건 다 적음.
런타임 에러때문에 변경한것도 조건에 넣음(같은 색으로 변경하면 Stackoverflow
*/

var floodFill = function(image, sr, sc, newColor) {
  const startVal = image[sr][sc];

  const helper = (row, col) => {
      //BaseCase
      if(!image[row] || image[row][col] === undefined || image[row][col] !== startVal || image[row][col] === newColor) return;
      //변경
      image[row][col] = newColor;
      //사방으로 재귀 진행
      helper(row+1,col);
      helper(row,col+1);
      helper(row-1,col);
      helper(row,col-1);   
  }
  helper(sr,sc);
  return image;
};