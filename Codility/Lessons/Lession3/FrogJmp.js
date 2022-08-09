
//응 성능 통과 안되네
// O(Y-X)
function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  while(X < Y) {
      X += D;
      count++;
  }
  return count;
}

//수학으로 푸는게 맞나봄
// O(1)
function solution(X, Y, D) {
  const diff = Y - X;
  return Number.isInteger(diff/D) ? diff / D : Math.floor(diff / D) + 1;
}