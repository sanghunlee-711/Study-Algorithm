/*
연필 1 다스는 12자루입니다.
학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명의 학생수 를 입력하면 필요한 
연필의 다스 수를 계산하는 프로그램을 작성하세요.
*/
/*
  학생수 / 12해서 몫을 올림하면 다스수가 나옴
*/

const solution = (N) => {
  if(N === 0) return 0;
  if(N <= 12) return 1;
  return Math.ceil(N/12);
}

console.log(solution(25)) //3
console.log(solution(178)) // 15
