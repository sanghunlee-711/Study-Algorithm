/*
in memory로 문자 뒤집기
*/

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

var reverseString = function(s) {
  for(let i = 0; i < Math.floor(s.length / 2) ; i++) {
      swap(s, (s.length - 1 - i), i);
  }
};