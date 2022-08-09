/*
흠
A를 정렬함 O(N)
회문을 때림 
    다음값이 1보다 더 차이나면 다음값 - 1이나 현재값 + 1을 리턴해주면 되긴함
이러면 2*O(N) 임
*/
function solution(A) {
  const len = A.length;
  //빈 배열이면 1만 필요하니까
  if(!len) return 1;
  else {
    // n * (first+ last) / 2 =>연속된 등차 수열의 합
    // Sn = (n/2) * (a+l);
    // -> Sn = 100/2 * ( 1+ 100);
    const N = A.length+1;
    const sum = N * (N+1) / 2;
    const ASum = A.reduce((sum, element)=> sum + element, 0);
    return sum - ASum;
  }
}


// 100 
// Detected time complexity:
// O(N) or O(N * log(N))
function solution(A) {
  const len = A.length;
  //빈 배열이면 1만 필요하니까
  if(!len) return 1;
  else {
    // 연속된 자연수의 합 (N * N+1 )/ 2
    const N = A.length+1;
    const needSum = N * (N+1) / 2;
    const ASum = A.reduce((sum, element)=> sum + element, 0);
    return needSum - ASum;
  }
}