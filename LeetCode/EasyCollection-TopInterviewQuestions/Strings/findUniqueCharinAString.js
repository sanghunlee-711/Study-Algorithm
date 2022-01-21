// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.


const s = "loveleetcode"
const b = 'aabb';
// const map = {'a': [idx, count]};


//first trial
const solution = (string) => {
  const map ={};
  for(let i = 0; i < string.length; i +=1) {
    map[string[i]] = [];
  }
  for(let i = 0; i < string.length; i +=1) {
    map[string[i]].push(i)
  }
  const filteredValue = Object.values(map).filter((el)=> el.length ===1);
  
  return filteredValue.length ? filteredValue[0][0]: -1;
}

solution(b);


//best answer
var firstUniqChar = function(s) {
  const usedChars = new Set([]);
  
  for (let i = 0; i < s.length; i += 1) {
    const currentChar = s[i];
    
    if (usedChars.has(currentChar)) {
      continue;
    }

    if (s.indexOf(currentChar, i + 1) === -1) {
      return i;
    }
    
    usedChars.add(currentChar);
  }
  
  return -1;
};