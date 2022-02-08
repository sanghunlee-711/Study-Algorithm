// ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/878/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].


// First Trial
// 일단 해쉬맵을 만들어서 매칭 시키고 힌트와 같이 뒤에서부터 값을 연산하려 함
// if문으로 해결하려고 했으나 조건이 많아져서 규칙을  찾으니 왼쪽을 앞으로 전제하에 뒤에것이 더 크면
// 마이너스를 때림 + 다시플러스를 하면 됬음
// 해결
const MAP = {
I:1,
V:5,
X:10,
L:50,
C:100,
D:500,
M:1000,
}
var romanToInt = function(s) {
    let answer = 0;
    for(let i = 0; i < s.length; i+=1){
        const now = s[i];
        const next = i+ 1 < s.length && s[i+1];
        if(MAP[now] < MAP[next]){
            answer -= MAP[now]
        }else{
            answer += MAP[s[i]];    
        }
    }
    return answer;
};

//Best Answer 
// while문을 사용해서 뒤에서부터 해결하는 방식
// 값이 작다면 더할 curr자체를 바꿔서 더해주는 방식
var romanToInt = function(s) {
  var roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
  
  var len = s.length;
  var i = len - 1;
  var int = 0;
  
  while (i >= 0) {
      var curr = roman[s[i]];
    if (i > 0) {
          var prev = roman[s[i-1]];
          if (prev < curr) {
              curr = curr - prev;
              i--;
          }
      }
      int = int + curr;
      i--;
  }
  
  return int;
};