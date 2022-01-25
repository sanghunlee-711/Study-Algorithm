//ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""

// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


// Frist Trial
const strs = ["flower","flow","flight"]

const solution = (strs) => {
  //1. sorting with lenght;
  //2. use shortest one as prefix;
  //3. if not matched substring shortest one;
  strs = strs.sort((a,b)=> a.length - b.length);
  let prefix = strs[0];
  let count = 0;
  
  while(count < strs.length) {
    for(let i = 0; i < strs.length; i += 1) {
        if (strs[i].slice(0,prefix.length) !== prefix) {
          prefix = prefix.slice(0,-1);
          count --;
        }else{
          count ++;       
        }
    }
  }
  return prefix;
}

solution(strs);

//Best Answer
//이중 배열을 보는 방식처럼 이중반복문을 통해 해결함

var longestCommonPrefix = function(strs) {
  let prefix = ""
  //엣지케이스 처리
 if(strs === null || strs.length === 0) return prefix

 //제일 첫번째 문자열부터 확인
 for (let i=0; i < strs[0].length; i++){ 
   //제일 첫번째 문자열의 첫번째 글자를 char에 할당
     const char = strs[0][i] 
    // 문자열 배열 전체의  문자들을 회문함
     for (let j = 1; j < strs.length; j++){ 
       // 하나라도 다른 것이 있는 순간 공통된 접두사라는 의미에서 벗어나므로 곧바로 return
         if(strs[j][i] !== char) return prefix
     }
     //전체 문자열 배열 확인 후에도 접두사가 모두 매칭되면 접두사를 추가하여 확인
     prefix = prefix + char
 }

 return prefix
};