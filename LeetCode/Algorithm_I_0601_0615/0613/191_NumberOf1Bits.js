/*
1개수 세는 로직
*/
var hammingWeight = function(n) {
  return n.toString(2).split('0').join('').length;
  };