//ref:  https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
// For example, the saying and conversion for digit string "3322251":
// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:
// Input: n = 1
// Output: "1"

// Explanation: This is the base case.

// Example 2:
// Input: n = 4
// Output: "1211"

// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// Constraints:
// 1 <= n <= 30

// First Trial
//다른거 나오면 그제서야 카운트 때려야함
const solution = (n) =>{
  if(n === 1) return "1";

  let result = "1";

  for(let i = 1; i <n; i+=1){ // countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1)
    let temp = "";
    let str = "";
    for(let j =0; j < result.length; j+=1) {
      temp += result[j]; //같은거 나오면 계속 붙임
      if(result[j] !== result[j+1]) { //다른거 나오면
        str += `${temp.length}${temp[0]}`; //몇개있는지 + 그거 붙임 (two 1 -> 21)
        temp = ""; //임시 문자 초기화
      }
    }
    result = str;
  }
  return res;
}

// Best Answer
// 별도로 saying 이라는 함수 만듬
var countAndSay = function(n) {
  let current='1'
  for(let i=2;i<=n ; i++){ // 한개 덜 카운트 하기위해서 2부터 n포함까지 카운트
      current=saying(current);
  }    
  return current;
};

function saying(str){
  const res=[];    
  let counter=1;
  if(str.length===1){ //엣지케이스 처리
      res.push(1);
      res.push(str);
  }
  for(let i=1 ; i< str.length; i++){
      if(str.charAt(i)===str.charAt(i-1)){ //이 전 것과 같으면 카운팅 개수 올려줌(length같은 역할)
          counter++;
      }else{ //다르면 카운트랑 현재 무슨 문자인지 배열에 넣어줌
          res.push(counter);
          res.push(str.charAt(i-1));
          counter=1; //카운트는 초기화
      }

      if(i===str.length-1){ //마지막에 도달한 경우 카운팅된 개수와 현재 문자열을 넣어줌
          res.push(counter);
          res.push(str.charAt(i));
      }
  }
  
  return res.join(''); //join시켜 문자열로 만들고 끝
}

//Best Answer 2
// 재귀 활용
var countAndSay = function(n) {
  if(n===1) return "1"; //엣지케이스 처리
  let numb = '';
  const inp = countAndSay(n-1); //재귀되는 문자열을 할당
  let i = 0;
  while(i<inp.length){ //길이 직전까지 돌림
    let temp = 1;
    while(inp[i]===inp[i+1]){ //같으면 개수 카운팅 및 다음으로 넘어감
      ++temp; 
      ++i
    };
    ++i; // 다르면 넘어가기만 하고 개수 카운팅 x
    numb += ''+temp+''+inp[i-1]; // 문자열로 이전의 결과값과 붙임(개수 + 해당 문자)
  }
  
  return numb;
};