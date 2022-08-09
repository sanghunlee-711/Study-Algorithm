/*
    조건맞춰서 알아서 increase나 max counter를 하라는거네..
    주어지는 줄 ㅎ;;
    if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
    if A[K] = N + 1 then operation K is max counter.
    배열 길이만큼 operation배열의 연산을 전체 한번씩 다 돌리나보네
    문제 설명이 ㅁ같네  아아아아
*/
//이렇게하면 성능테스트 통과 못함
// O(N*M)

const getMaxVal = (arr) => {
  return arr.sort((a,b)=> b-a)[0];
}

function solution(N, A) {
  let counter = new Array(N).fill(0);
  const aLen = A.length;
  for(let x = 0; x < aLen; x++) {
      const op = A[x];

      if(op >= 1 && op <= N) {
          counter[op - 1] += 1;
      }else if (op === N + 1) {
          const max = getMaxVal(counter);
          counter = new Array(N).fill(max);
      }
  }
  
 return counter;
}



//최대값을 계속 저장해가며 하는 방식으로 하면 ?
//이래도 bigInt timeout
//for문안에서 array.fill하는게 N이 추가되서 문제인듯

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let max = 0;
  let counters = new Array(N).fill(0);

  for(let i = 0; i < A.length; i++) {
      if(A[i] === N + 1) {
          counters.fill(max);
      }else {
          const idx = A[i] - 1;
          counters[idx] ++;
          max = Math.max(counters[idx], max);
      }
  }
  return counters;
}


//maxVal을 가지고만 있다가 채워주는건 마지막에 하는 방식
//O(N + M)

function solution(N, A) {
  let counters = new Array(N).fill(0);
  //counter중에 max값 찾는것
  let maxCounter = 0;
  //마지막에 셋팅할 최대 인자의 값
  let maxToSet = 0;

  A.forEach((a)=> {
      let x = a - 1;
      if(x === N) {
          maxToSet = maxCounter;
          return;
      } 

      counters[x] = Math.max(counters[x]+ 1, maxToSet+1);
      maxCounter = Math.max(counters[x], maxCounter);
  })

  return counters.map((val)=> Math.max(val, maxToSet));
}