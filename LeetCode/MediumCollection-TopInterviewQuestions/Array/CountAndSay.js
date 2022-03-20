//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/4153/
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
// For example, the saying and conversion for digit string "3322251":
// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:
// Input: n = 1
// Output: "1"
// Explanation: This is the base case.

// Example 2:
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// Constraints:
// 1 <= n <= 30
//숫자만큼 말을 해주는 로직임
// 조건
// 1. 
var countAndSay = function (n) {  
  if(n === 1) return "1";

  let result = "1";

  for(let i = 1; i <n; i+=1){ 
    // countAndSay(n) 은 n-1번째의 숫자를 말해주는 재귀 로직을 넣으면 됨
    let temp = "";
    let str = "";

    for(let j =0; j < result.length; j+=1) {
      temp += result[j]; //같은거 나오면 계속 붙임
      if(result[j] !== result[j+1]) { 
        //다른거 나오면
        str += `${temp.length}${temp[0]}`; //몇개있는지  말해주는거를 str에 붙이고(two 1 -> 21)
        temp = ""; //임시 문자 초기화
      }
    };
    result = str;
  }
  return result;
}

//Best Answer
var countAndSay = function(n) {
  let arr = [1]; // base case

  for (let i = 2; i <= n; i++) {
      let temp = [];
      let point = arr[0];
      let index = 0;
      
      for (let j = 0; j < arr.length; j++) {
          if (point === arr[j]) index++;
          else {
              temp.push(index, point);
              point = arr[j];
              index = 1;
          }
      }
      
      temp.push(index, point);
      arr = temp;
  }
  
  return arr.join('');
};