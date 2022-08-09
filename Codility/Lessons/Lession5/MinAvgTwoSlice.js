/*
이건 bf를 요구하는거 아닌가
이것보다 어케 효율적으로 풀까
2개 이상인데
양수만 존재할 거임
그래서 2,3개 이상의 요소가 들어갔을때는 더 작은값이 나올 수 가 없음

*/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;
  let minSum = Infinity;
  //double slice case
  for(let i = 0; i < A.length - 1; i++ ){
      let ave = (A[i] + A[i+1]) / 2;
      if(ave < minSum) {
          minSum = ave;
          answer = i;
      }
  }

  //tripple slice
  for(let i = 0; i < A.length - 2; i++) {
      let ave = (A[i]+A[i+1]+A[i+2]) / 3;
      if(ave < minSum) {
          minSum = ave;
          answer = i;
      }
  }    
  return answer;
}