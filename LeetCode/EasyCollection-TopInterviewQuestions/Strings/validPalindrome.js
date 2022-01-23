//ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


// First Trial
//간단하게 하나 전체를 바꿔서 비교
const s = "A man, a plan, a canal: Panama";
const d = "race a car"
const f = "0p";
const solution =(str) =>{
  const lowerConvert = str.replace(/[^a-zA-Z0-9]/gi,'').toLowerCase();
  const reverse = lowerConvert.toLowerCase().split("").reverse().join("");
  console.log(lowerConvert, reverse);
  return lowerConvert === reverse;
}

solution(s);
solution(d);
solution(f);

// Best Answers
// 투포인터를 통해 앞 뒤로 검색을 동시에 시작
//palindrome특성상 하나라도 다르게 되면 그대로 false이므로 탐색시간을 줄일 수 있음.
const isPalindrome = (s) =>{
  s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}