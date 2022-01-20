# 투포인터
* 투포인터 알고리즘은 굉장히 간단한 알고리즘임
* 일차원 배열에 두개의 포인터를 두고 조작하는 알고리즘.
* 보통 연속적인 구간에 대한 계산, 탐색을 할 때 많이 사용함
* 일차원 배열에 인덱스를 각 가리키는 두개의 변수를 포인터라 하는 것.

## 예시
* 보통 구간합 문제로 예시를 많이듦
```javascript
// 다음 배열에서 합이 10인 수열의 수는
const array = [7,1,3,5,1,4,2,2,8];
```
1. `count = 0, partialSum=7, p1=0, p2=0`이라고 가정해보자 -> 이때 구간합은 7
2. 구간합이 10이 안되서 2번째 포인터가 증가되고 partialSum이 10이 됨 
    -  `count = 0, partialSum=8, p1=0, p2=1 `
3. 구간합이 10이 안되므로 p2를 또 증가시켜줌 11이 되어버림 
    -  `count = 0, partialSum=11, p1=0, p2=2 `
4. 구간합이 10을 넘어서 p1를 증가시켜줌 그리고 동시에 기존 p1의 값을 partialSum에서 빼줌 
    - `count = 0, partialSum=4, p1=1, p2=2 `
5. 구간합이 10보다 작으므로 2번째 포인터(p2)를 증가시킴 구간합을 더함
- `count = 0, partialSum=9, p1=1, p2=3 `
6. 구간합이 10보다 작으므로 2번째 포인터(p2)를 증가시킴 구간합을 더함, 10이 되므로 count증가
- `count = 1, partialSum=10, p1=1, p2=4 `
7. ***다음수가 0 일수도 있으므로*** `두번째` 포인터를 증가시킴
- `count = 1, partialSum=14, p1=1, p2=5 `
8. 14가 부분합이므로 10보다 크기에 또 첫번째 포인터 증가시킴
- `count = 1, partialSum=13, p1=2, p2=5 `
9. 13이 부분합이므로 10보다 크기에 또 첫번째 포인터 증가시킴, 증가 시키고 보니 10됨 카운터 올림 
- `count = 2, partialSum=10, p1=3, p2=5 `

...
두번째 포인터가 끝에 도달한 경우 첫번째 포인터만 계속 증가시켜 줌
그리고 첫번째 포인터가 끝에 도달하면 모든포인터가 끝에 도달했으므로 종료가 됨.

이런방식으로 진행됨 ..


# 정리
* 어려운개념은 아니나 모를때 당하게 되는 유형(많이 당해봄)
* 백트래킹을 사용하거나 완전탐색으로 풀려다 시간제한에 걸리는 경우가 생길 수 있음
* 이런 유형이 있는것을 인지하고 있는 것이 좋음.


```javascript
//들어오는 배열과 target을 확인하여 해당 target을 만족하는 합을 가진 수열의 개수를 구하여라
//들어오는 배열과 target을 확인하여 해당 target을 만족하는 합을 가진 수열의 개수를 구하여라

const arr = [7,1,3,5,1,4,2,2,8];
//           ^                    ^
const k = 10;

function solution(array, k) {
  let start = 0;
  let end = 0;
  let count = 0;
  let result = 0;
  
  while(array[start] !== undefined) {
    while(result < k && end < array.length){
      result += array[end];
      end ++;
    }
    
    if(result === k) count ++;
    result -= array[start];
    start ++;
  }
  return count;
}

console.log(solution(arr, k));
```