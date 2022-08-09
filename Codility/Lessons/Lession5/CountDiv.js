//처음에는 루프를 돌림
//시간 통과 하나도 안됨
//이게 오히려 BF로 취급당한다.
function solution (A, B,K) {
  let count = 0;

  for(let i = A; i < B+1; i++){
    if(i % K === 0) count++;
  }

  return count;
}


/*
One possibility is to take advantage of integer arithmetic to get rid of some edge cases. Sometimes A and B are both, neither, or one or the other is divisible by k. And just subtracting them won't really help solve the problem. So one solution is to divide each by k before subtracting them.

Say k = 7, A = 12, and B = 54. 54/7 - 12/7 = 7 - 1 = 6  (14,21,28,35,42,49)

But what if A was 14?

54/7 - 14/7 = 7 - 2 = 5  (14,21,28,35,42,49) The answer is one off. So when A is divisible by k, 1 needs to be added.

What if A and B are both divisible by k?

56/7 - 14/7 = 8 - 2 = 6 = (14,21,28,34,42,49,56). The answer is again, one off, so the special case of A being divisible by k takes care of it by adding 1
https://stackoverflow.com/questions/62032327/performance-issue-with-countdiv-codility-challenge-algorithm/62032609
*/

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  return Math.floor(B/K) - Math.floor(A/K) + (A%K === 0 ? 1 : 0);
}