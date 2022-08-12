/*
이게 couting을 하는게 아니라 하나라도 있으면 걍 1을 주는거네 ... ㅂㄷㅂㄷ..
정렬을 먼저때리고 걍 앞에서부터 한바퀴 돌리면 될듯
*/
// O(N*log(N))
// Score: 100
function solution(A) {
  A = A.sort((a,b)=> a-b);

  for(let i = 0; i < A.length - 2; i++) {
      let P = A[i], Q = A[i+1], R= A[i+2];

      if(P+Q > R && Q+R > P && R+P > Q){
          return 1;
      } 
  }
  return 0;
}