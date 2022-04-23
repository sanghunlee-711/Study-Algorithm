//ref:https://leetcode.com/explore/interview/card/top-interview-questions-medium/113/math/816/
// Given an integer n, return the number of trailing zeroes in n!.
// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Example 3:
// Input: n = 0
// Output: 0

// Constraints:
// 0 <= n <= 104
// Follow up: Could you write a solution that works in logarithmic time complexity?


//First trail
//그냥 다 곱하고 그 숫자를 배열로 만들어서  뒤집은 다음에 나오는 0 만 캐치해서 카운트하려함
//비효율의 끝판왕 + 숫자 커져서 2*32-1  넘어가서 안됨 ㅎㅅㅎ
var trailingZeroes = function(n) {
  let count = 0;
  if(n === 0) return count;
  let val = 1;
  for(let i = n; i > 0; i --) {
      val = val * i;
  };
  const arr = (val+"").split("");
  
  console.log(arr);
  for(let i = arr.length-1; i > 0; i--) {
      if(arr[i] === "0") count++;
      else break;
  }

  return count;
};

//Finding Solution
/*
어차피 10은 5*2임
그리고 팩토리얼은 어차피 5나오면 2가 무조건 나오게 됨
그래서 2를 찾을게 아니라 5만 카운트해보면 답이나옴
*/ 
var trailingZeroes = function(n) {
  let count = 0;
  
// first iteration: find quantity of numbers divisible by 5
// second iteration: find quantity of numbers divisible by 25. It is numbers from first iteration / 5. 25 = 5*5,
// but we counted first 5 in first iteration, so we add only one 5 for every number divisible by 25.
//처음 돌때: 5로 나눠지는 애들 갯수 카운트
//두번째 돌때: 25로 나눠지는 숫자들 카운트
//근데 처음에 5로 나눠지는걸 카운트 했으므로 매번 25로 나눠질거를 5로 나누는걸로만 카운트 하면됨 ????

// etc for 125, 625 and so on
  while (n) {
      n = Math.floor(n / 5);
      count += n;
  }
  return count;
};

//Best Answer
//같은 맥락의 답이긴 함
//수학머리가 못따라오네 ;-; ..
var trailingZeroes = function(n) {
  if (n < 5) return 0;
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
      count += Math.floor(n / i);
  }
  return count;
};