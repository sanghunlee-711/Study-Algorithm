/*
* 10부제 시행할 것임. -> 자동차 1의자리수와 날짜 1의자리수가 동일하면 해당
  * 자동차1의자리수가 7이면 7,17,27 일에 운행 못함 ㅎㅅㅎ
* 입력: 날짜의 일의자리수와 7대 자도차번호의 끝 두자리수가 주어짐
* 출력: 10부제를 위반하는 차량의 대수 출력
*/
// option1:차 번호는 무조건 2자리 이므로 10으로 나눠서 나머지와 날짜 일의자리수가 매칭되는걸 카운트하면 됨.
// option2 : 다 문자열로 바꿔서 마지막 자리수와 차 숫자가 동일한 경우를 찾아도 됨.
  // 둘다 연산이 들어가므로 걍 string을 활용해보자
const solution = (N,P) => {
  if(!P.length) return 0;
  let count = 0;
  P.forEach((carNum)=> {
    if(`${carNum}`[1] === N+"") count++;
  })
  return count
}

console.log(solution(3, [25,23,11,47,53,17,33])); // 3

//해설은 option1을 사용함

const 해설 = (day,arr) => {
  if(!arr.length) return 0;

  let answer = 0;

  for(let x of arr) {
    if(x%10  === day) answer++;
  };

  return answer
}

console.log(해설(3, [25,23,11,47,53,17,33])); // 3