/**
 * 문자열이 들어왔을때 숫자만 추출해서 자연수를 만드는 문제임
 * 들어온숫자대로의 자연수를 만들어야함.
 *출력이 10**8을 넘지 않으므로 아래와같이해도 문제가 없음..
 */
//1. 정규표현식
//2. 회문
const solution = (s)=> {
  s = s.replace(/[^0-9]/gi, '');
  console.log(s);
  return +s;
}

console.log(solution('g0en2T0s8eSoft')); //208

const solution2 = (s)=> {
  const arr = [];

  s.split("").forEach((el)=> {
    if(Number.isInteger(+el)) arr.push(el);
  });

  let sum = 0;
  const len = arr.length;

  arr.forEach((el, idx)=> {
    sum += el * 10 **(len - idx - 1);
  })

  return sum;
}

console.log(solution2('g0en2T0s8eSoft')); //208


//해설 코드
//isNaN을 사용하심 => 이거 배워가야징
//회문 돌면서 걍 10씩 곱하면서 진행하심 이거 좋은듯.
const solution = (s)=> {
  let answer = 0;

  for(let x of str) {
    if(!isNaN(x)) answer = answer * 10 + Number(x);
  }
  
  return answer;
}