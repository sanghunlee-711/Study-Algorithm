//ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:
// Input: n = 27
// Output: true

// Example 2:
// Input: n = 0
// Output: false

// Example 3:
// Input: n = 9
// Output: true 

// Constraints:
// -231 <= n <= 231 - 1

//First Trail
// 계속 나눠준값을 넣고 나머지가 0 이 될떄까지 진행
// 마지막 나눠진 값이 1이면 3^n이 되게 됨
var isPowerOfThree = function(n) {
  if(n <= 1) return n == 1; //엣지 케이스
  
  while(n%3 === 0) { // 계속 반복
      n = n / 3;
  }
  return n == 1;// 체크
};


// Best Answer;
// 재귀적 처리를 통한 찾기 방법
// 재귀 단점은 엣지케이스 처리인 것 같음 ㅇㅇ..
var isPowerOfThree = function(n) {
  if(n % 1 !== 0 || n <= 0) return false
  if(n === 3 || n === 1) return true 
  let x = n/3
  return isPowerOfThree(x)
};