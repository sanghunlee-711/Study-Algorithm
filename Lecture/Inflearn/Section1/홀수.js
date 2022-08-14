/*
7개의 자연수가 주어질때 홀수인 자연수들을 골라서 합을 구하고 고른홀 수 중 최소값을 찾는 프로그램
입력 : 주어지는 자연수는 100보다 작고 홀수가 한개이상 반드시 존재함
첫째줄에 홀수들의 합 출력 둘째줄에 홀수중 최소값 출력
*/

const solution = (...arg) => {
  let sum = 0, min = Number.MAX_SAFE_INTEGER;

  [...arg].forEach((number)=> {
    if(number % 2 !== 0) {
      sum+=number
      min = Math.min(number, min);  
    }
  })

  return {"합": sum, "최소 홀수": min};
}

console.log(solution(12,77,38,41,53,92,85)); //합: 256, 최소 홀수: 41