//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.


// First Trial
// 쉽다 생각하고 걍 join이랑 스플릿만 갈겨서끝내려함 
// Number객체로는 해결 안됨
const plusOneWithNum = (digits) =>{
  const str = +(digits.join(""))+1+""
  return str.split("")
}


// Second Trial 
// js에서 Number는 최대치인 2^53 - 1까지만 표현이 가능했고 
// BigInt는 그보다 큰 정수를 표현할 수 있는 내장 객체임
// 이를 활용하여 해결 
var plusOneWithBigInt = (digits) =>  {
  const str = BigInt(digits.join(""))+ BigInt(1)+""
  return str.split("")
};