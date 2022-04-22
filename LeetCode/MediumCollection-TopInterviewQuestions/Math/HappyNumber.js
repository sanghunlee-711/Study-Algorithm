/*
ref:https://leetcode.com/explore/interview/card/top-interview-questions-medium/113/math/815/

Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
Example 1:
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:
Input: n = 2
Output: false

Constraints:

1 <= n <= 231 - 1
*/

//First Trial
//걍 나눈뒤 제곱수 해서 더한 게 1되면 true아니면 false인데 종결조건이 중요했음
//그래서 hash에 계산했던 n값은 넣어놓고 다시 계산해야 되는경우에는 false를 리턴해주면 
// 이미 계산된 것이 1이 되지 못하여서 저장된 것이라 판단할 수 있음
const helper = (n, memo) => {
  if(n === 1) return true;
  if(memo[n]) return false; //이미 봤는데 아닌거니까
  
  let num = (n+"").split("");
  let sum = 0;

  num.forEach((el)=> sum+=el**2);
  memo[n] = sum;
  
  return helper(sum, memo);
}

var isHappy = function(n) {
  let memo = {};
  return helper(n, memo);
};

// Best Answer
//6이 기준인 이유가 뭘까 ;-;... 왜 통과가 될까 ..
var isHappy = function(n) {
  while(n > 6) n = n.toString().split('').reduce((prev, cur) => prev + Math.pow(cur, 2), 0);
  return n === 1;
};