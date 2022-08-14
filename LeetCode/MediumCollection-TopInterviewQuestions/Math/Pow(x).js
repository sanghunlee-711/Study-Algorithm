//First Trail

/*
원래의 제곱방식과 동일하게 while루프를 돌리니 정확도는 나오나 시간초과가 뜨게 됨.
*/
var myPow = function(x, n) {
  //0승이면 걍 1
  if(n === 0) return 1;
  //-n승이면 분모로
  if(n < 0) return 1 / myPow(x, Math.abs(n));
  
  let answer = 1;
  
  //n을 계속 줄여줄 것임.
  while(n >= 1) {
      if(n%2) answer *= x;
      x *= x;
      n = n/2 || 0;
  }
  return answer;
};

/*
그래서 제곱할 횟수를 계속 반으로 줄여주며 진행하면 logN으로 줄일 수 있게 됨
제곱하는 횟수를 홀수일때만 답으로 보낼 변수에 제곱을 시켜주는 방식으로 진행
홀수가 아닌 경우 제곱할 숫자인 x를 계속 갱신해주고 그에따라서 제곱할 횟수를 반으로 줄일 수 있게 됨.
*/
var myPow = function(x, n) {
  //0승이면 걍 1
  if(n === 0) return 1;
  //-n승이면 분모로
  if(n < 0) return 1 / myPow(x, Math.abs(n));
  
  let answer = 1;
  
  //n을 계속 줄여줄 것임.
  //근데 회문 횟수를 줄이기 위해 x를 몇제곱 동시에 할 것임
  //그래서 n이 홀수일때만 answer에 x를 홀수횟수만큼 곱해줄 것임
  
  while(n >= 1) {
      //홀수 일 때
      if(n%2 !== 0) answer *= x;
      //홀수가 아니면 x를 계속 곱해버리고 n을 반씩 줄여나갈 수 있음
      x*=x;
      //계속 2로 나눈 몫으로만 갱신할 것임.
      n = Math.floor(n / 2);
  }
  return answer;
};