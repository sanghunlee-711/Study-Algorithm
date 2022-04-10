// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21




// first trial
const checkCondition = (num) => {
  return (num >= -1*(2**31) && num <= (2**31)-1) 
}

var reverse = function(x) {
  let answer = 0;
  
  if (x<0) {
  answer = -1*Number(String(x).split('').filter((el)=> el !=='-').reverse().join(''));
}else{
  answer = Number(String(x).split('').reverse().join(''));    
}
  
  return checkCondition(answer) ? answer : 0
};

//best answer

//훨씬 간결하게 가능해짐 
// 숫자는 한번만 만들어내고 들어온 인자 x를 통해 조건 판단 후 배출~
var reverse = function(x) {
  const k = parseInt(Array.from(Math.abs(x) + "").reverse().join(""));
  if(-k < -(231) || k > 231 - 1){
      return 0;
  }
  return x<0?-k:k;
};

//best answer 2
// 재귀를 활용한 조건 해결
var reverse = function(x) {
  if (x < 0) return -1 * reverse(-x); //goooood!
  const solution = (x+"").split('').reverse().join('');
  return (solution > 2**31 -1) ? 0 : solution;
};