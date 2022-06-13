/**
 * @param {string} s
 * @return {string[]}
 */
/*
BF 로 되는지 체크해보자
1. 걍 회문 돌림
    숫자면 패스 문자열 만나면 변경해서 배열에 넣으면 됨.
2. 같은거면 답배열에 안넣고
3. 다른거면 답배열에 넣으면 됨
안되네 케이스를 다 못다룸 a1b2 => A1B2

dfs로 똑같이 가기
1. dfs인자를 인덱스와 문자열 변수를 받고
2. 문자열에 인덱스마다의 문자를 붙여줌
3. 문자열의 길이가 s와 같아지면 답안에 넣어줌
4. 문자를 만나면 대문자로 바꿔서 추가한 문자를 넣어주고 인덱스 증가시켜주기
5. 문자열 아니면 그냥 인덱스만 증겨시켜 주기

*/
var letterCasePermutation = function(s) {
  s=s.toLowerCase()
  let answer = [];
  const len = s.length;
  const dfs = (i, char="") => {
      if(i < len) {
          //길이 안찬다면 dfs를 실행하며 글자를 하나씩 늘림
          dfs(i+1, char+s[i]);
          
          if(s[i].charCodeAt() >= "a".charCodeAt()) {
              //문자인경우 대문자로 변환해서 추가해주기
              dfs(i+1, char+ s[i].toUpperCase());
          }
      }else{
          //길이 다 차면 넣기
          answer.push(char);
      }
  }
  
  dfs(0);
  return answer;
};