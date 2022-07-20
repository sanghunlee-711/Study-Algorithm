/**
 * @param {string} s
 * @return {boolean}
 */
/*
처음부터 절반까지 회문하면서 subStr을 인덱스만큼 업뎃 해주고
전체 길이에서 suStr 길이를 나눈 몫 만큼 repeat을 시켜본게 s와 같으면
subStr이 포함된게 확인이 됨
ex) a -> aaa === aba => false
ex) ab -> abab === abab => true
*/
var repeatedSubstringPattern = function(s) {
  let subStr = '';
  
  for(let i = 0; i < Math.floor(s.length/2); i++) {
      subStr += s[i];
      if(s === subStr.repeat(s.length / subStr.length)) return true;
  }
  return false;
};

//Best Answer
/*
  이해하는데 꽤 걸렸던 풀이법
  만약 s가 반복적인 패턴을 가진다고 가정해보자
  s = SxSx
  여기서 s+s(S) = SxSxSxSx 가 됨
  앞 뒤를 때어내면  S = ScSxSxSz 와같이 변경이 되지만
  중간에 sub패턴들은 존재하게 됨
  이런 방법을 이용한 것임
*/
var repeatedSubstringPattern = s => {
  let newString = (s + s).substring(1, s.length * 2 - 1)
  
  return newString.indexOf(s) !== -1
}