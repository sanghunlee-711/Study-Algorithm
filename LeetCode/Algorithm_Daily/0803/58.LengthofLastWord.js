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
  // Initialize length...
  let length = 0;
  // Create a loop starting from last character...
  for (let i = s.length - 1; i >= 0; i--) {
      // If the character is not a space...
      if (s.charAt(i) != ' ') {
          length++;
      }
      // Here it is the end of last word...
      else if(length != 0) {
          break;
      }
  }
  return length;
};
