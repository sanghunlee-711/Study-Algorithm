/*
ref :https://leetcode.com/explore/interview/card/top-interview-questions-medium/113/math/817/
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701

Constraints:
1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
*/

//Frist trial
//hash에 값 미리 기재해놓고 사용하면 될듯
//a-z => 1- 26임
//AA => 27이람
//AB => AZ => ZA 이렇게 가는구나
// 26* 1 + 2 => 26*1 + 26 => 26*26 + 1
//ZY => 701 => Z -> 26 * 26  + 25=> 701

var titleToNumber = function(columnTitle) {
    const hash = {};
    "abcdefghijklmnopqrstuvwxyz".split("").forEach((item, index) => hash[item] = index + 1);
    
    let answer = 0;
    columnTitle = columnTitle.toLowerCase();
    
    for(let i = 0; i < columnTitle.length; i++) {
        answer = (answer * 26) + hash[columnTitle[i]];
    }
        
    return answer;
};



//Best Answer
//charCodeAt메서드를 사용해서 별도의 해쉬를 사용하지 않고도 숫자로 만들어 냄

let titleToNumber = function(columnTitle) {
  let total = 0;
  for (let i = 0; i <= columnTitle.length - 1; i++) {
      total = ((26 * total) + (columnTitle[i].charCodeAt() - "A".charCodeAt() + 1));
  }
  return total;
};

