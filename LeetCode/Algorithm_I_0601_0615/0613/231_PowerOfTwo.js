/**
 * @param {number} n
 * @return {boolean}
 */
/*
2를 밑으로 하는 로그로 나눌 때 자연수가 나오면 2의 지수승을 가지는 것임
자연수 판별은 % 1을 했을 때 0 이면 됨.
*/
var isPowerOfTwo = function(n) {
  return (Math.log2(n) % 1 === 0);
};