//ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/

// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:
// 1 <= n <= 104



//First trial
// concept: 
// idx start with 1
// push idx in arr with real idx + 1
// if idx + 1 is divided with 3 === fizz
// if idx + 1 is divided with 3 === buzz
// if idx + 1 is divided with 3  and 5 === fizzbuzz
const solution = (n) =>{
  return Array.from(Array(n), (_, i)=> i+1).map((el)=>{
    if(el % 3 === 0 && el % 5 === 0){
      return 'FizzBuzz'
    }else if(el%5 === 0){
      return 'Buzz'
    }else if(el%3 === 0){
      return 'Fizz'
    }
    else{
      return el+"";
    }
  })
}

solution(15);


// Best Answer;
// 방식은 똑같고  다른건 새로운 배열에 넣어주는 것 
// 아마도 위에서 한 방식은 새롭게 배열에 인덱스+1을 다 집어넣고 
//다시 map을 돌려서 효율이 떨어지는 것으로 사료됨
 var fizzBuzz = function (n) {
  let array = [];
  for (let i = 1; i <= n; i++) {

      if (i % 3 == 0 && i % 5 == 0) {
          array.push("FizzBuzz");
          continue;
      }

      if (i % 3 == 0) {
          array.push("Fizz");
      } else if (i % 5 == 0) {
          array.push("Buzz");
      } else {
          array.push(String(i));
      }

  }

  return array;

};