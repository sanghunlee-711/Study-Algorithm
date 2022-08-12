// O(N*log(N)) or O(N)
//이걸 원한게 아닐텐데 허허..
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const set = new Set([...A]);
  return set.size;
}