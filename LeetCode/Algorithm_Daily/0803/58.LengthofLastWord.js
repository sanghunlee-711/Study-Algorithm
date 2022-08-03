/**
 * @param {string} s
 * @return {number}
 */
/*
1. 제일 마지막값만 보는 것이므로 뒤에서부터 루프 돌면서 공백빼고만 카운트해서 공백 나오면 끝내고 리턴
2. 걍 배열 메서드 잘 써서 하기
*/
//2번 방법의 해답
var lengthOfLastWord = function(s) {
  const arr = s.split(" ").filter((el)=> el !== '');
  
  return arr[arr.length - 1].length;
};

//1번방법의 해답
var lengthOfLastWord = function(s) {
  //마지막 문자열 길이 체크할 변수
  let length = 0;
  // 뒤에서부터 회문 시작
  for (let i = s.length - 1; i >= 0; i--) {
      // 공백이 아닐때는 길이를 올려주자!
      if (s.charAt(i) != ' ') {
          length++;
      }
      // 공백이면서 길이가 0이 아니면 끝이다!
      else if(length != 0) {
          break;
      }
  }
  return length;
};
