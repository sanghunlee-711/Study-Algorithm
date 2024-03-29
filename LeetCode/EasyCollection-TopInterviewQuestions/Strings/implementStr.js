//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/


// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

// Constraints:
// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

// First trial
const solution = (haystack, needle)=>{
  return haystack.indexOf(needle);
}

// Best Answer
var strStr = function(haystack, needle) {
  if(!needle.length) return 0;
  if(!haystack.includes(needle)) return -1;
    return haystack.indexOf(needle);
}