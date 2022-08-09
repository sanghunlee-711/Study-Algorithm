// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*
1부터 len -1까지 회문돌면서 minSum을 업데이트 해주면 되겠는데..

사실 O*LogN정도면 걍 두번회문돌리면서 풀면될 것 같은데 효율 절대 통과안될듯
*/
function solution(A) {
  let minDiff = Infinity;
  const totalSum = A.reduce((sum, el) => sum + el, 0);
  let leftSideSum = 0;
  let rightSideSum = totalSum;

  for(let i = 1; i < A.length; i++) {
      leftSideSum += A[i-1];
      //마이너스 케이스가 존재하는데 abs로 커버가 되는가? 
      rightSideSum = totalSum - leftSideSum;
      minDiff = Math.min(Math.abs(rightSideSum - leftSideSum), minDiff);
  }
  return minDiff;
}



// 84
/*
최소차이를 계속 갱신하면서 좌우 합도 갱신하면 회문 한번이면 됨
*/
function solution(A) {
  let minDiff  = Infinity;
  const total = A.reduce((sum,el)=> sum+el, 0);
  let left = 0;
  for(let i = 0; i < A.length; i++) {
      left += A[i];
      let right = total - left;
      minDiff = Math.min(Math.abs(right - left), minDiff);
  }
  return minDiff
}