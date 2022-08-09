
/*
    동쪽으로 이동하는(0)을 기준으로 그 이상의 값들에서 서쪽으로 이동하는 짝들을 찾아서 배열에 넣으면 될 듯.
    효율이 나오려나 이러면 ..
    N*logN정도 나오겠는데 최악이면 N^2임 흠..
*/
//응 50점 효율 0점
function solution(A) {
  if(A.length <= 1) return 0;
  const arr = [];
  A.forEach((east, eastIdx)=> {
      if(east === 0) {
          for(let westIdx = eastIdx+1; westIdx < A.length; westIdx++) {
              if(A[westIdx] == 1) {
                  arr.push([eastIdx, westIdx]);
              }
          }
      }
  });

  return arr.length;
}

//개선을 해보자
//문제를 한번 더 보니 예외처리 조건이 있었음
//머리를 써야 빅오를 줄일 수 있다..
function solution(A) {
  let eastCount = 0;
  let pairCount = 0;

  A.forEach((car)=> {
      if(car === 0) {
          //east
          eastCount++;
      }else {
          //when meet west 
          //the prev east count can make pair count
          pairCount += eastCount;
      }
  })
  return pairCount > 1000000000 ? -1 : pairCount;
}