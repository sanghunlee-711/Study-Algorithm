

// First trial 
// 걍 메서드 쓰니 해결 되었다.
var reverseString = function(s) {
  return s.reverse()  
};


// Best Answer
// 절반을 구함 -> 절반을 기준으로 전환시켜줌
// 굿..
var reverseString = function(s) {
  n = s.length
  half = Math.floor(n / 2);
  for (i = 0; i < half; i ++) {
      let temp = s[n-i-1];
      s[n-i-1] = s[i];
      s[i] = temp;
}
};