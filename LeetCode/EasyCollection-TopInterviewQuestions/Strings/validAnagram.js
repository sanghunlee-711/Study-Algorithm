// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


//First trail
var isAnagram = function(s, t) {
  const changeS = s.split("").sort().toString();
  const changeT = t.split("").sort().toString();
  return changeS === changeT
};

// Best Answer
// 해시맵으로 카운팅으로 비교 함
var isAnagram = function(s, t) {
  if (t.length !== s.length) return false;

  const counts = {};

  for (let c of s) {
      counts[c] = (counts[c] || 0) + 1;
  }
  for (let c of t) {
      if (!counts[c]) return false;
      counts[c]--;
  }
  return true;
};