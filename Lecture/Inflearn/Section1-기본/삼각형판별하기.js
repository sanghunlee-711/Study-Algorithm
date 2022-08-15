/*
a,b,c 세개 인자를 받아서 이 숫자로 삼각형을 만들 수 있는가?
만들 수 있으면 "YES" 없으면 "NO" 출력
제일 긴변을 c라 했을 때
b-a <= c <= b+a 조건 만족하면 됨
이게 조건 일텐데
짧은 막대 두개의 합이 제일 긴 막대 길이 보다 크면 됨.
*/

const solution = (a,b,c) => {
  let max = null;
  let total = a+b+c;
  //최대변길이 구하깅
  if(a > b) max = a;
  else max = b;
  if(c > max) max = c;
  //total - max = a+b
  if(total - max <= max) return "NO";
  return "YES"
}

console.log(solution(6,7,11)); //YES
console.log(solution(1,1,2)); //NO
console.log(solution(13,33,17)); //NO