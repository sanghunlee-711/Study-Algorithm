//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// First Trial

// idea sketch
//1. looping with 0 
//2. 숫자나 +,-면 stack에 넣고 length 1 이상인 상태에서 white space 만나면 break,
// 문자만나도 break;
// 제한시간 30분 안에 못품
// 조건 하나를 놓침 (만약 -,5가 stack에 들어있는 경우 다음 -가 오면 멈춰지고 리턴되야함. )
const solution = (s) =>{
  const stack = [];
  const possilbe = /0-9+-/gmi
  const regExChar = /[0-9' '+-]/gmi;
if(!regExChar.test(s[0])) return 0; //숫자나 +- 또는 공백이 아닌경우로 시작하는 경우 처리를 위함

for(let i = 0; i < s.length; i+=1){
  const temp = s[i];

  if(possilbe.test(temp)){ 
    stack.push(temp); 
  } else{ 
    if(stack.length >=1 && !possilbe.test(temp)) break;
  }
}
const answer = +stack.filter((el)=> el !== ' ').join("");

if(!answer) return 0;

if(answer >= 2**31 - 1) {
  return 2**31 - 1
}

if(answer <= -1*2**31) {
  return -1*2**31
}

return answer;
}

// Finding Solution
//  js의 regEx 매치기능을 숫자에 포함되는 것만 가져오게 했다
// regEx를 잘쓰면 이렇게 해결될 일이다 ㅋ..ㅋㅋㅋ.ㅋ.ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
var myAtoi = function(s) {
  const regexpWords = /^(([ ]*)?([+-])?)?[0-9]+[0]*/g;
  const arr = s.match(regexpWords);
  if(arr==null || arr.length==0) return 0
  const num = Number((arr.join('')).replace(/[ ]/g, ""))
  if(num < Math.pow(-2,31)) return Math.pow(-2,31)
  if(num > (Math.pow(2,31)-1)) return (Math.pow(2,31)-1)
  
  return num 
};


//Best Solution
const myAtoi = (s) => {
  const MAX = 2 ** 31 - 1, MIN = -(2 ** 31);
  s = s.trim(); // 배열로 다 짜름
  let res = 0;
  //시작기호가 + or - 면 그 다음부터 시작
  for (let i = s[0] === '-' || s[0] === '+' ? 1 : 0; i < s.length; i++) {
    //공백이거나 문자면 멈춤
    if (s[i] === ' ' || Number.isNaN(+s[i])) break;
    // res를 증가 시켜줌
    res = res * 10 + (+s[i]);
  }
  //최대 최소 범위 지켜줌.
  return s[0] === '-' ? Math.max(MIN, -res) : Math.min(MAX, res);
};

//Best Solution 2
var myAtoi = function(s) {
  // extracts unique numbers until is undefined
  const parseIntWithRadix = parseInt(s, 10);
 return getConstraints(parseIntWithRadix)
};


function getConstraints(num){
  if(isNaN(num)) return 0;
  const upperBound = Math.pow(2,31) - 1;
  const lowerBound = Math.pow(-2,31);

  if(num > upperBound){
   return upperBound
  }else if(num < lowerBound){
    return lowerBound;
  }else {
    return num;
  }
}

// 잘못 접근한 것
// 1. 조건까지는 잘 찾은 것 같음
// 2. 내장 메서드인 Number.isNaN을 쓰기위해 찾아보지않고
// 굳이 여러개의 regEx를 쓴점은 좀 에바같음


// 교훈
// 조금 더 아이디어 스케치 시간을 가지고 문제를 풀어보자

