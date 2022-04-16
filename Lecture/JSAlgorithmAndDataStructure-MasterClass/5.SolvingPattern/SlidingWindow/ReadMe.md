# Sliding Window Pattern
슬라이딩 윈도우는 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정방식으로 연속적인 해당 데이터의 하위 집합을 찾는경우에 유용하다.

창문을 하나 만듦. 창문은 단일변수, 하위배열, 또는 필요한 경우 다른 문자열도 될 수 있다.

조건에 따라 창문을 이동시키며, 시작위치에서 시자하면 보통 왼쪽에서 오른쪽으로 이동함(오른쪽에서 왼쪽도 가능 ㅎㅅㅎ).

여튼 규모가 큰 데이터 셋에서 데이터의 하위 집합을 추적하는 문제에 있어서 유용한 패턴음

## 예시
"hellothere"의 가장 긴 시퀀스의 고유 문자를 찾는 함수를 작성해보자.
1. hel은 다음 l이 존재하므로 hel에서 끊김
2. ell은 성립되지않음
3. lother가 가장 긴 고유 문자의 배열길이로 업데이트 됨  e때문에 끊어지므로
...
```
```

## 예시2
maxSubArraySum함수를 만들어라
배열과 숫자를 인자로 받는데 숫자만큼 인접한 원소들을 합칠때 가장 큰 숫자가 나오는 것을 반환하면됨.
```javascript
maxSubarraySum([1,2,5,2,8,1,5],2); //10
maxSubarraySum([1,2,5,2,8,1,5],4); //17
maxSubarraySum([4,2,1,6],1); //6
maxSubarraySum([4,2,1,6,2],4); //13
maxSubarraySum([],null); //13
```

Naive Solving
T.C: O(N^2)
```javascript
const maxSubarraySum = (arr,num) => {
  if(num > arr.length) return null;
//배열에 음수들어와도 처리해야하기때문에 initial value를 -Infinity로 처리함.
  let max = -Infinity;
  for(let i =0; i < arr.length - num + 1;  i++) {
    let temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i+j];
    }

    if(temp > max) max = temp;
  }
  return max;
}
```

Sliding Window Solution
T.C: O(N)
```javascript
const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum  += arr[i];
  }

  tempSum = maxSum;

  for(let i = num; i < arr.length; i++) {
    //그 전 인덱스에 해당하는 부분집합의 첫값을 빼고 현재인덱스의 부분집합에 해당하는 것의 마지막값만 기존의 값에다가 더해주면 연산을 줄이게 됨.
    //이러면 부분집합처럼 다루기 위해 모든것을 재연산하는 for loop을 두번 돌리지 않아도 됨.
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```