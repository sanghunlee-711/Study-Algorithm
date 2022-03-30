# Problem Solving

1. Understand the problem (문제 이해하기)
2. Explore Concrete Examples (구체적 예시 살펴보기)
3. Break it down
4. Solve/Simplify
5. Look Back and Refactor

## Understand the problem
본인 자신 또는 면접관에게 물어볼 수 있는 여러 질문들

1. 문제를 나의 방식대로 다시 생각해서 구체화하여 질문이 무엇인지를 실제로 이해하기
2. 문제가 무슨 입력값을 가지고 있는지
3. 문제에 대한 해결책에서 output으로 무엇이 나와야 할지를 명확하게 하기
4. 입력값이 출력값을 결정할 수 있는지(다른 말로는 문제를 풀어낼 충분한 정보가 있는지)-> 여기서 시간 많이걸리지만 그래도 생각해보기
5. 문제의 일부 데이터 중 중요부분에 어떻게 라벨링을 지정할 수 있을지.(이 문제에서 정말 중요한 것은 무엇인지)

### Exmaple
Write a function which takes two numbers and returns their sum.
1. 숫자를 더하기를 실행
2. 숫자 두개 -> 정수일지 소수점일지 얼마나 클지 언어에따라 달라짐(BigInt나 Infinity가 될 수도 있음)
3. 정수나 소수나 실수나 등등..
4. 만약 하나의 숫자만 입력하면 어쩜 -> 이때 null? undefined ?
5. 필요한 전부는 입력 출력 두개임 ㅎㅅㅎ

## Expore Examples
1. Start With simple examples
  - 입력값과 출력값의 순서대로 예시를 두세개 작성해보기
  - 기억해두었다가 다시 사용할 수 있으므로
2. Progress to More Complex Examples
  - 간단한 예시부터 복잡한 예시까지 작성해보기
3. Explore Examples With Empty Inputs
  - 유효하지 않은 입력값이 주어진 상황에서 문제를 어떻게 해결해야할지 해결 능력을 갖출수있게 도와줌
4. Explore Examples with Invalid Inputs
  - 예를들어 유저가 이상한 값을 넣으면 어케할건지 엣지케이스임

### Examples
Wirte a function which takes in a string and returns counts of each character in the string.
(문자열을 취하고 각 문자의 수를 반환하는 함수를 작성하세여)
```javascript
//1 start with simple examples
charCount("aaaa") // {a:4}
charCount("hello") // {h:1, e:1, l:2, o: 1}
//2. Progress to more complex examples
"my phone number is 123124" //숫자를 넣을 것인지 공백은 어떻게 할 것 인지?? _로 처리??
"Hello hi" //대문자 소문자를 구분할 것인지 말 것인지?
charCount("") //이러면 어떻게 return할 것인지 error ? , null ? ,undefined ? 만약 입력값이 이렇다면 ??

```
