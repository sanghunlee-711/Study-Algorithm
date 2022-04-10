//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

//First Trial
//an+1[i] = an[i-1] +an[i] //그리고 존재안하면 걍 0을 더해주면 됨.
//새로운 줄의 I번째 인덱스는 그 전줄의 i-1번째 인덱스 + i번째 인덱스 더한거임

var generate = function(numRows) {
  if(numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let answer = [];
  
  for(let i = 0; i < numRows; i ++) {
      let eachRow = new Array(i+1).fill(1);
      
      for(let j = 1; j < eachRow.length-1; j ++) { //마지막값은 1이니께
          eachRow[j]= answer[i-1][j-1]+ answer[i-1][j]; 
      }
      answer.push(eachRow);
  }
  return answer;
};

//Best Answer;
//미리 끝처리를 다 해놓고 반복문을 돌렸다.
// 그리고 eachRow에 할당하고 넣는게 아닌 답변 배열에 다이렉트로 할당해주었다.
//그리고 두번째 반복문에서 굳이 길이를 구하지 않고 어차피 인덱스가 길이란점을 활용함.
//메모리 아낄 수 있을듯
var generate = function(numRows) {
  let resultArr = [];
  
  for (let i = 0; i < numRows; i++) {
      resultArr[i] = [];
      resultArr[i][0] = 1;
      resultArr[i][i] = 1;
      
      for (let j = 1; j < i; j++) {
          resultArr[i][j] = resultArr[i - 1][j] + resultArr[i - 1][j - 1];
      }
  }
  
  return resultArr;
};

//결론 : 그래도 점화식을 통한건 이제 어느정도 풀어내긴 할 수 있나보다