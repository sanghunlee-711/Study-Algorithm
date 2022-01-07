# 재귀함수
* 재귀함수란 자기 자신을 호출하는 함수를 말한다.
  * 자신을 호출하는 것을 재귀호출(Recursion call) 이라고 한다.
* 함수호출은 Call Stack에 쌓이기 때문에 스택 자료구조와 유사하게 동작한다.
* 함수형 프로그래밍에서는 루프구현을 재귀로 구현하는 경우가 많다.
* 올바르게 작성하지 않으면 무한루프에 빠질 수 있다.

## JS에서의 재귀
* 콜 스택에 제한이 있다.
  * JS엔진마다 제한수는 다르다.
  * 따라서 브라우저 마다 다르지만 크롬의 경우 약 1만개이다
* 꼬리재귀(Tail Recursion)가 제공되지 않음
* 성능이 좋지 않음


## 그럼에도 불구하고 쓰는 이유
재귀로 작성하면 더 편하게 풀리는경우가 있는 알고리즘이 있음(성능이 더 좋은것은 아님)
  * Union-Find
  * DFS
  * Backtracking

등 불편함을 무시한다면 JS에서는 더 빠른 성능으로 작성할 수 있지만 코딩테스트는 빨리푸는 것이 중요하므로 추천하지 않음

# 예시
```javascript
function recursion(a){
  if(a > 10){
    //무한 루프 방지를 위해 탈출코드를 작성해야한다.
    return a;
  }
  return recursion(a+1);
}

console.log(recursion(5)); //11
```

## 피보나치 수열
앞 두 항의 합이 뒤 항의 값이 되는 수열로 재귀문제로 자주나옴
피보나치의 예로는 1 1 2 3 5 8 13 의 순열이 있음
```javascript
const fibonnaci =(x)=>{
  if(x<=2){
    return 1;
  }
  return fibonacci(x-1)+fibonacci(x-2);
}
console.log(fibonacci(7)); //13
```

## 변수 없는 합병 정렬 구현
Divide and Conquer 전략을 따름

아래는 함수형프로그래밍 방식의 합병정렬 구현
```javascript
// 결합
const merge = (a,b)=>{
  if(a.length === 0) return b;
  else if(b.length === 0) return a;
  else if(a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
}

// 분해
const mergesort = (arr) =>{
  if(arr.length < 2) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergesort(arr.slice(0, mid), mergesort(arr.slice(mid))));
  }
}

console.log(mergesort([21,10,12,20,25,13,15,22]))
// [10,12,13,15,20,21,22,25]
```