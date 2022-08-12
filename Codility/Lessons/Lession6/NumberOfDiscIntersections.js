/*
11개면
(0,1) (0,2) (0,4) => 3
(1,2), (1,3), (1,4) , (1,5)=> 4
(2,3) (2,4)=> 2
x
(4,3) ,(4,5)=> 2
이렇게 11개 ?
일단 회문은 무조건 돌긴 해야겠는데
회문 돌면서 배열의 값(반지름)의 합이 두 위치의 차보다 크면 들어가는게 되네
일단 bf식으로 도전

왜 [1,1,1]이 3이 나와야하냐
(0,1) 
(0,2) => 접점이 인덱스 1에 있으므로 들어가야함
(1,2)
두개 아닌가
*/

//정확도는 다 맞지만 효율이 똥이라 56점이 나온다.
//O(N**2)

function solution(A) {
  const N = A.length;
  const answer = [];
  for(let K = 0; K < N; K++) {
      for(let j = K+1; j < N; j++) {
          let positionDiff = j-K;
          
          if(A[K]+A[j] >= positionDiff) {
              answer.push([K,j]);
              if(answer.length > 10000000) return -1;
          }
      }
  }
  
  return answer.length;
}

/*
당최 무슨짓을 해야할지 모르겠어서 찾아보니
1. 원의 가용거리의 min max를 생각하여 각자 배열에 넣고
2. 정렬을 시킨 다음
3. maxArr[maxIdx]의 값이 minArr[minIdx]의 값보다 큰 경우 카운트를 해준다.
  이때 겹치는 원의 개수를 별도로 카운트 하는 변수 (diskCount)를 사용해서 해당 minIdx에 대한 카운트를 만들어주고
  작은 경우에 이 카운트를 다시 줄이며 maxIdx의 값을 늘리며 조건에 맞을 때 까지 diskCount를 해주었던값을 제거해줌.
  해당 인덱스에 대한 계산이 끝난경우 실제로 반환할 count변수에 해당 인덱스에서 카운트 했던 diskCount를 더해준다.
  
Score: 100
T.C: O(N*log(N)) or O(N)
*/
/* Explain with example
[1,5,2,1,4,0]

min,maxArr만들기
minArr: [ -1, -4, 0, 2, 0, 5]
maxArr: [ 1, 6, 4, 4, 8, 5 ]

정렬 실행
minArr: [ -4, -1, 0, 0, 2, 5 ] 
maxArr: [ 1, 4, 4, 5, 6, 8 ]

여기서 컨셉은 maxArr의 어떤요소가 minArr의 요소보다 크거나 같으면 언제일지 몰라도 두 원은 겹치게 되는 것임(접점이니까 같은것도 포함)
그래서 카운트가 올라감.

참고 : https://study-ihl.tistory.com/175
*/
function solution(A) {
  const len = A.length;
  const minArr = new Array(len);
  const maxArr = new Array(len);

  A.forEach((radius, index)=> {
    minArr[index] = index - radius;
    maxArr[index] = index + radius;
  });

  minArr.sort((a,b)=> a-b);
  maxArr.sort((a,b)=> a-b);

  let count = 0;
  let maxIdx = 0;
  let diskCount = 0;

  for(let minIdx = 0; minIdx < len; minIdx++) {
    while(maxArr[maxIdx] < minArr[minIdx]) {
      diskCount--;
      maxIdx++;
    }

    count+= diskCount;

    if(count > 10000000) return -1;

    diskCount++;
  }
  return count;
}

