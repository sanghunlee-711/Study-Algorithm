//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/793/
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

//First Trial
//sketch
// input : 숫자만 들어옴
// output: 알파벳으로 조합된 값들이 존재하는 배열 (중복 허용 x ->조합)
// 1. 해쉬맵이 필요함(숫자에 들어가는 알파벳들을 모두 가진)
// 2. arg에 맞는 알파벳들이 모두 들어간 배열
// 3. 해당 조합 nCr 에서 r은 digits의 길이로 표현하면 됨
// 4. n은 알파벳이 모두 들어간 배열
// 5. 조합의 알고리즘은
//arr중 n개를 뽑는 로직
// 그런데 키 마다 값을 하나만 쓸 수 있으므로 조합으로 간단하게는 힘들 것 같음..


//Second Sketch
//걍 이중반복문으로 다 체크하면 안되는감
// 안되겠네 .. 배열안에 여러개의 배열이 들어가있고 그 배열들 끼리 원자를 모두 비교해서 조합을 만들어야하는데
// 반복문을 계속 늘릴수 밖에 없는 노릇임.

var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let combs = digits ? [""] : [];
  for (const digit of digits) {
    //들어온 숫자들 회문 돌림
    let newCombs = [];
    for (const comb of combs) {
      //답으로 보낼 배열을 회문 돌림
      for (const letter of map[digit]) {
        //해당 매핑된 숫자가 가지고 있는 알파벳을 하나 기존답에 추가하여 회문돌려줌(경우의수 커버)
        newCombs.push(comb + letter);
      }
    }
    //새로운 값(경우의수들)을 추가한 배열을 다시 업데이트 해주며 digits를 계속 회문돌림
    combs = newCombs;
  }
  //3중반복문 돌린 걸 내보냄..
  return combs;
};

//DFS 로 해결한 방법

const dfs = (result, choices, digits, n, path) => {
  if(n === digits.length) {
    result.push(path);
  } else{
    const choice = choices[digits[n]];
    
    for(let i = 0; i <choice.length; i++) {
      dfs(result, choices, digits, n+1, path+choice[i]);
    }
  }
}

var letterCombinations = function(digits) {
  if(!digits.length) return [];

  //키값이 숫자이니 배열의 인덱스로 대체 가능
  const choices = ['','', 'abc','def', 'ghi','jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const result = [];
  dfs(result, choices, digits, 0, '');
  return result;
}

// BackTracking으로 해결한 방법
//digits: "23",
var letterCombinations = function(digits) {
  let obj = {2: 'abc', 3: 'def', 4: 'ghi', 5:'jkl', 6:'mno', 7:'pqrs', 8:'tuv', 9:'wxyz'};
  let res =[];

  const backtrack = (i, curStr) => {
    //first:backgrack(0,''), second: backtrack(1, 'a') , backtrack(1, 'b') , backtrack(1, 'c') 
    // thrid: backtrack(2, 'ad') => length === 2이므로 멈춤 끝!
      if(curStr.length === digits.length){
        //digits의 길이만큼의 하나의 조합 예시가 나와야하므로 ex) digits = "23" -> 하나의 샘플 "ab" 
          res.push(curStr); 
          return;
      };

      const currDigit = digits[i]; //first: "2" , second:"3"
      const currChars = obj[currDigit];  //first: "abc", second: 'def'

      for(let j=0; j< currChars.length; j++){
          backtrack(i+1, curStr + currChars[j]) //first: backtrack(1, 'a') , backtrack(1, 'b') , backtrack(1, 'c') 
          //second: backtrack(2, 'ad'), backtrack(2, 'ae'), backtrack(2, 'af') , backtrack(2, 'bd'), backtrack(2, 'be') ...
      }
  };

  if(digits.length>0){
      backtrack(0, '');
  }

  return res;
};

//결론
// 일단 백트래킹이 뭔지 모르므로 찾으면서 공부하는 겸 문제를 풀어봐야겠다
//ref: https://www.geeksforgeeks.org/backtracking-algorithms/
//백트래킹은 dfs를 이용해서 하위 노드와 인접한 하위노드들을 깊게 탐색한 다음 
//하나라도 조건에 부합하지 않으면 다시 상위노드로 돌아와 다음 하위노드를 검색하는 방식이라고 한다