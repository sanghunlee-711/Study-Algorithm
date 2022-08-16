/* N숫자 주면 1부터 N까지 합 구해서 리턴해주셈 */

/*
두가지 방식이 존재
1. 걍 수학 공식 씀
등차수열이니까 갯수 * (첫+마지막) / 2
2. 회문 돌면서 더함

*/
const solution = (N) => {
  if(N == 0) return 0;
  if(N<0) throw new Error("입력 범위를 벗어났습니다.");
  return (1+N)/2 * (N)
}

const solution2 = (N) => {
  if(N == 0) return 0;
  if(N<0) throw new Error("입력 범위를 벗어났습니다.");

  const arr = Array.from({length:N}, (_,i)=> i+1);
  let sum = 0;
  arr.forEach((el)=> sum+=el);
  return sum;
}

console.log(solution(6)) // 21
console.log(solution2(6)) // 21
console.log(solution(10)) // 55
console.log(solution2(10)) // 55