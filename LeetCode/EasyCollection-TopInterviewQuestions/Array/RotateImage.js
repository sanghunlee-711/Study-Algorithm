// nxn그래프를 90도 방향으로 회전 시켰을때의 배열을 만들어 반환하면 됨
// 방법이 별로 안떠올라서 스택오버플로우 찾아봄
// ref: https://stackoverflow.com/questions/42519/how-do-you-rotate-a-two-dimensional-array
// +90: Transpose:행렬 전환 and Reverse Each Row를 하면 됨


// 1트
const matrix = [
  [ 0, 1, 2, 3, 4],
  [ 5, 6, 6, 8, 9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24],
];

const transpose = (matrix) =>{ //행과 열을 뒤집는 작업
const len = matrix.length;

for(let i = 0; i < len; i+=1){    
  for(let j = i+1; j < len; j+=1){
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}

return matrix
}

const invertLeftRightHalr = (matrix) => { //좌우 반씩 전환
const len = matrix.length;
const mid = Math.floor(len/2);
for(let i = 0; i < len; i+=1) {
  for(let j = 0; j < mid; j+=1){
    let temp = matrix[i][j];
    matrix[i][j] = matrix[i][len-1-j];
    matrix[i][len-1-j] = temp
  }
}


return matrix;
}


const solution =(matrix) => {
  if(matrix.length <= 1) matrix;
  
return invertLeftRightHalr(transpose(matrix))
}

solution(matrix);


//best answer;
// js 메서드 활용 잘함

const rotate = (matrix) => {
  matrix = matrix.reverse(); //행 모두 전환(Reverse Each Row)

  for(let i in matrix) {
    for (let j = 0; j < i; j+=1){ //행렬 전환(범위선정 지렷..)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}