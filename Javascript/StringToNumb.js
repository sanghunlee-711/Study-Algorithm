//문자열을 정수로 바꾸기
//https://programmers.co.kr/learn/courses/30/lessons/12925

//Number 메서드를 그냥 사용함
//잘못된 값이 입력되는 경우가 없다는 전제가 있기 때문
function solution(s) {
  var answer = Number(s);
  return answer;
}

//다른사람의 풀이
// 자바스크립트의 특성을 이용하여 숫자로 나눠 줌으로써 str -> numb으로 전환
function strToInt(str) {
  return str / 1;
}
