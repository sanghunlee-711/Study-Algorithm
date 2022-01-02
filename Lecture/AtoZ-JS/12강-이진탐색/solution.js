// 숫자가 겁나큼 (10억명 10억 분 등 ..)
// 무조건 로그시간으로 풀어야하는데 -> 이진탐색 필요
// times -> 선형로그시간으로도 충분히 가능
// 1.특정 값을 찾는 로직이 아니다
// 2.우리가 찾는 것은 최소 몇분에 모든 심사가 끝나는가 임.
// 3.이런 것을 결정문제라고 하는데 이것을 이진탐색 == 파라메트릭서치(Parametric Search)라고도 함.

// 최소 1분에서 10억분*n명 사이
// 면접관들이 몇명을 처리하는가
// 처리 가능한 입국자가 n보다 작다면, 분을 올려야하고, 입국자가 n보다 크다면 분은 낮춰야한다 ??? 이게 뭔소리임
// 면접관이 시간대비 몇명을 처리할 수 있는가
// 시간 / 심사시간 = 심사관당 처리가능한 입국자 수

function solution(n,times) {
  const sortedTimes = times.sort((a,b)=> a-b); // O(n logn);
  let left = 1;
  let right = sortedTimes[sortedTimes.length -1] * n; // 면접관중 가장 긴 처리시간 * 전체 입국자수로 잡음
  
  while(left <= right) { //left와 right가 크로스오버 될때 최적시간 탄생할 것
    const mid = Math.floor((left+right)/2);
    //sum(시간/심사시간)
    const sum = times.reduce((acc,time)=> acc + Math.floor(mid/time), 0); // 계속 현재 처리한 인원 체크
    
    if(sum < n) { //처리해야할 인원보다  처리된 인원이 적다면
      left = mid + 1; // 왼쪽에서 시간 증가
    }else{ //처리해야할 인원보다  처리된 인원이 많거나 같다면
      right = mid - 1; //시간 감소
    }
  }
  return left;
}