//First Trail

/*
재귀로 빠르게 끝내려하였으나 소수점이 있네 ?
숫자와 소수점을 따로 계산해야하나봄
숫자는 재귀로 금방 됨
이렇게 하니까  아래케이스 정도에서 Maximum CallStack이 뜸
0.00001
2147483647
어케 하란말인가;;
*/
var myPow = function(x,n) {
  const absValue = (val, how) => {
      if(how === 0) return 1;
      if(how === 1) return val;
      return val * absValue(val, how - 1);
  }

  let val = absValue(x,Math.abs(n));
  return n < 0 ? 1/val : val;
}

//Finding Solution
//이해가 안되는데
const myPow = (x, n) => {
  if (n === 0) { return 1; }
  if (n < 0) { return 1 / myPow(x, Math.abs(n)); }
  
  let y = 1;
  
  while (n > 1) {
    //홀수승일때 y에 x값을 추가로 곱해줌
      if (n % 2 !== 0) { y *= x; }
      //x에 자기값을 곱해줌
      x *= x;
      //n을 계속 반으로 줄여감 (????)
      n = n / 2 | 0;
  } 
  return x * y;
};