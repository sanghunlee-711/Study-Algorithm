//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//First Trial
//sketch
//condition
//1. 중복되면 안됨 -> set ?
//2. 동일한 애들만 하나의 arr에 들어가야함
//3. 하나만 있는애도 answer에 들어가야함
//4. 그럼 배열을 변환해서 체크 됬는지확인을  아나그램인지 확인 하고 넣어버리자

//두개의 스트링을 아나그램인지 체크하는 별도 함수
const checkAnagram = (fix, check) => {
  //길이 다르면 걍 안 됨
  if(fix.length !== check.length) return false;
  
  const chars = {};
  for(let char of fix) {
      chars[char] = (chars[char] || 0) + 1;
  }
  
  for(let character of check) {
      if(!chars[character]) return false;
      chars[character] --;
  }
  return true;
}


var groupAnagrams = function(strs) {
  let answer = [];
  //체크가 되었는지 확인을 위해 배열을 변형함
  const checkStrs = strs.map((str)=> {
      return {
          val:str,
          isChecked: false,
      }
  });
  
  for(let i = 0; i < checkStrs.length; i++) {
      let subArr = [];
      const condition = checkStrs[i];
      
      //한번도 아나그램이라고 체크되지 않은 값이라면 answer arr에 넣을  subArr에 넣어줌
      if(!condition.isChecked) subArr.push(condition.val);
      
      //다음 것 부터 비교
      for(let j = i+1; j < checkStrs.length; j++) {
        //아나그램인것이 맞으며 한번도 아나그램이라고 체크 되지 않은 값이라면
          if(checkAnagram(condition.val, checkStrs[j].val) && !checkStrs[j].isChecked) {
            //이제 아나그램인지 체크해주고
              checkStrs[j].isChecked = true;
              //subArr에 해당값을 넣어준 뒤
              subArr.push(checkStrs[j].val);
          }
      }
      //subArr가 빈 배열이 아닌 경우 answer 배열에 넣어줌
      subArr.length > 0 && answer.push(subArr);
  }

  return answer;
};
//Best Answer

//나는 왜 반복문을 두개나 돌리게 두개나 함수를 만들었을까 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
var groupAnagrams = function(strs) {
  
  const assiiMap = {}
  for (const str of strs) {
    let key = str.split('').sort().join('') //한번 배열 돌면서 키를 다 동일하게 만들어 버림
    //해당 해시키의 값으로 배열을 미리 만들어 놓음..
    // ||처리를 함으로서 값이 중복되는 경우 다시 리셋 시킬수가 있음.
    assiiMap[key] = assiiMap[key] || []
    //값이 있다면 거기에 나머지 값을 push해줌
     assiiMap[key].push(str)
  }
  //해시의 값들만 배열로 풀어서 반환 ..
  return Object.values(assiiMap)
};

//결론: 
// 그래도 나름 습득한것들로 짱돌은 잘 굴렸다.
// 중복을 피해야한다고 판단이 들면 hash나 set부터 생각해보자
// || 연산자를 이용한 해시값에 대한 할당은 굉장히 유용해보이므로 습득하자.