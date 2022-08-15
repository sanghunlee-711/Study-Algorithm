/*
숫자 세개를 인자로 받아 최소값을 출력하면 됨
(정렬 사용 금지)
*/

const solution = (a,b,c) => {
  let minVal = Infinity;
  minVal = Math.min(a,minVal);
  minVal = Math.min(b, minVal);
  minVal = Math.min(c, minVal);
  return minVal;
}


console.log(solution(6,5,11));
console.log(solution(2,5,1));
