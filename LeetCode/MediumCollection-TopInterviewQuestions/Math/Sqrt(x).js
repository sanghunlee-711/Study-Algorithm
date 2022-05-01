

/*
ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/113/math/819/
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2

Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

Constraints:
0 <= x <= 231 - 1
*/


//First Trial
//제곱근 찾으래서 그냥 계속 돌렸다..

var mySqrt = function(x) {
  let result = 0;
  let sum = 0;
  
  while(sum * sum <= x) {
      result = sum;
      sum++;
  }
  return result;
};

//Best Answer
//제곱근은 x의 반값 보다 작다는것 + 이진탐색을 사용한 답변
var mySqrt = function(x) {
  let low = 1;
  let high = Math.round(x / 2);
  let ans = 0;
  while(low <= high) {
      let mid = low + Math.round((high - low) / 2);
      if((mid * mid) === x) {
          ans = mid;
          break;
      } else if((mid * mid) > x) {
          high = mid - 1;
      } else {
          low = mid + 1;
          ans = mid;
      }
  }
  return ans;
};