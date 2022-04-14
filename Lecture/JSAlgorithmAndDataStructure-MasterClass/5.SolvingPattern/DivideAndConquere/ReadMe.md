# 분할과 정복
정렬 알고리즘으로 가면 최소 두가지 (퀵, 병합정렬 이진탐색, 이진트리 탐색 등)은 분할과 정복 알고리즘인 것 중 하나임.
배열이나 문자열 같은 큰규모의 데이터셋을 처리할 때 씀
배열에서 값을 찾기 위해서 왼쪽부터 끝까지 가는것보다 배열을 작은 조각을 세분화 해서 각 조각들을 어디로 이동할지 정하는 것
문제에 따라 항상 도움이 될수도 있지만 아닐 수도 있음
이진탐색이 가장 전형적인 패턴임

## 예시
오름차순으로 정렬된 배열에서 타겟값의 인덱스를 반환하셈 없으면 -1반환

### Naive Solution
T.C: O(N)
```javascript
const solution = (arr, val) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) return i;
  }
  return -1;
}
``` 

### Refactored Solution
T.C: O(logN)
```javascript
const search = (arr, val) => {
  let start = 0;
  let end = arr.length-1;
  while(start <= end) {
    let middle = Math.floor((start+end)/2);
    let current = arr[middle];

    if(arr[middle] < val) {
      start = middle + 1;
    }else if(arr[middle] > val) {
      end = middle - 1;
    }else{
      return middle;
    }
  }
  return -1;
}
```