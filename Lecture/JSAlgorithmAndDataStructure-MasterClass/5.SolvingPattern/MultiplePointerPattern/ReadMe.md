# 다중포인터 패턴
인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 포인터를 중간지점에서부터 시작지점이나 끝지점이나 양쪽지점을 향해 특정조건하에 이동시키는 것

# 예시
## SumZero
오름차순으로 정렬된 배열을 인자로 받고 그 중 합이 0 이되는 첫번째 쌍을 반환하는 sumZero라는 함수를 작성해보자
없으면 undefined리턴
```javascript
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3])// undefined
```
### Naive Solution
T.C: O(N^2)
S.C: O(1)
```javascript
function sumZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i],arr[j]];
      }
    }
  }
  return undefined;
}
```

### Refactored solution
T.A - O(N)
S.A - O(1)
```javascript
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  let target = 0; //이해를 위해 일부러 타겟으로 변수할당함
  while(left < right) {
    let sum = arr[left] + arr[right];

    if(sum === target) {
      return [arr[left], arr[right]];
    } else if (sum > target) {
      right--;
    } else{
      left++;
    }
  }
}
```


## countUniqueValue
오름차순(Ascending)으로 정렬된 배열을 인자로 받고 배열의 고유한 값의 개수를 반환하는 함수를 만들자.
값이 없으면 0 반환.
1. 두개의 포인터를 사용(i,j = 0,1에서 각 시작)
2. i와 j가 같으면 j를 다음으로 이동
3. i와 j가 다르면 i를 하나 상승시켜서 그 자리에 j의 값을 넣음

```javascript
countUniqueValues([1,1,1,1,1,2])//2
countUniqueValues([-2,-1,-1,0,1])//4
```

## 시도

```javascript
function countUniqueValues(nums) {
  if(!arr.length) return 0;

  let i = 0, j = 1;
  while(j !== nums.length){
    if(nums[i] === nums[j]){
      j++;
    }else{
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  
  return i+1;
}
```

## solution
```javascript
function countUniqueValues(arr) {
  if(!arr.length) return 0;
  
  let i = 0;
  for(let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}
```