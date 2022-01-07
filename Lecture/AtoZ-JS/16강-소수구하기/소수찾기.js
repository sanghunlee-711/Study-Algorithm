// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3

function solution(n) {
  const prime = [false, false, ...Array(n-1).fill(true)];
  
  for(let i = 2; i*i <= n; i+=1){
      if(prime[i]) {
          for(let j = i*2; j <= n; j+=i){
              prime[j] = false;
          }
      }
  }
  
  return prime.filter(Boolean).length
}