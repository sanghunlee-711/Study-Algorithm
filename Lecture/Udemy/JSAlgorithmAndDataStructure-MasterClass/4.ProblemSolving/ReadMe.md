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

## Break it down
밟아야할 단계를 명확하게 만들어보기 해결책의 기본요소들을 적어보자

### Examples
아래 코드내의 주석과 같이 각 단계별로 유사코드(그러니까 설명)를 통해 적어 놓는 것임
Wirte a function which takes in a string and returns counts of each character in the string.
(문자열을 취하고 각 문자의 수를 반환하는 함수를 작성하세여)
```javascript
const charCount =(str) =>{
  //make object to return at end
  // loop over string, for each character ...
    // if the char is a number/ltter  AND a key in object, add one to count
    // if the char is a number/letter AND not in object , add it to object and set value to 1
    // if character is something else (space, period, etc) don't do anything

  // return object at end

}
```

## Solve/Simplify
1. 문제를 풀기 위해 제일 어려운 파트를 분리해봄
2. 일단 어려운거 좀 무시함
3. 간단한 파트부터 해결 해봄
4. 그 다음 다시 어려운것으로 넘어가기 + 쉬운것과 통합하기
```javascript
const charCount =(str) =>{
//문자나 숫자가 아니면 모두 무시하고 모든 문자는 소문자가 되어야함
// 루핑에 익숙하지 않은 사람들은 그냥 문자 하나 하나를  소문자로 바꾸고 그것을 객체에 넣는 패턴을 하나의 인덱스 씩 실행하다보면 패턴을 발견할 거임
// 대문자 소문자를 바꾸는게 어렵다면 루핑만 먼저하고 면접관한테 이거 안 익숙해서 이거는 그냥 넘어갓고 검색해도 되냐고 물어보는게 차라리 나음

//make object to return at end
var result = {};
//loop over string, for each character ...
for(var i = 0; i < str.length; i ++) {
  var char = str[i].toLowerCase();
    // if the char is a number/ltter  AND a key in object, add one to count
  if(result[char] > 0) {
    result[char]++ ;
    // if the char is a number/letter AND not in object , add it to object and set value to 1
  }else{
    result[char] = 1;
  };
};
  // if character is something else (space, period, etc) don't do anything
  // return object at end
return result;
}
```