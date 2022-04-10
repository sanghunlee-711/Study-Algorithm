# 표현식과 연산자

* 웹프로그램은 보통 여러개의 Js파일(모듈)로 이루어짐
*  js 프로그램은 무엇으로 이루어지냐면 표현식(Expression)과 문장(Statements)으로 두가지 문법적 카테고리로 이루어짐.


## 표현식(Expression)
표현식이란 어떠한 결과 값으로 평가되는 식이며 

문자열 ,숫자 , 논리값 같은 원시값을 포함하여 변수, 상수, 함수 호출등으로 조합할 수 있다.

```javascript
const a = 10 + 32; //42
const b = a - 20; // 22
const c = "String"  + 3; //"String3"
const d = true + false + true; //2
 ```
연산자와 조합하여 새로운 표현식을 만들 수 있음 :)

## 할당 연산자
할당연산자는 오른쪽 표현식을 왼쪽 피연산 값에 할당하는 연산자로 등호(=)를 사용하며
다른 연산자와 같이 사용하여 복합 할당 연산자로 이용할 수 있다.

```javascript
let x;

//할당 연산자
x = 10;

//복합 할당 연산자
x+=5; //덧셈할당 : 15
x-=5; // 뺄셈 할당 : 10
x*=10; // 곱셈할당 : 100
x/=10; // 나눗셈할당 : 10
x%=3; // 나머지할당 : 1
x<<=4; // 비트 왼쪽 이동할당(2^4 *x와 같음) : 16
x>>=2; // 비트 오른쪽 이동 할당: 4
```

## 비교연산자
좌측 피연산자와 우측 피연산자를 비교하는 연산자로 true 혹은 false를 반환해줌
```javascript
// 비교연산자
const x = 10;
const y = 12;

x == y; // 동등: false
x != y; // 부등 - true
x === y // 일치 : false
x !== y // 불일치 true
x > y; // ~보다 큰 : false
x >=y // 보다 크거나 같은 : false
x<y; // 보다 작은  true
x<=y; // 보다 작거나 같은 true

"10" == 10; //true
"10" === 10; // false
```

## 산술연산자
덧셈 뺄셈 곱셈 나눗셈을 하는 연산자
Number를 반환한다
```javascript
const x = 10;
const y = 12;
x + y // 덧셈: 22
x-y// 뺄셈 : -2
x*y; // 곱셈: 120
x/y // 나눗셈: 0.8333...

```

## 비트연산자
비트를 직접 조작하는 연산자로
toString(2)를 통해 이진수로 만들고 확인해보면 확인이 쉬움
```javascript
const x = 10;
const y = 12;

x & y; // AND : 8
x | y; // : 14
x ^ Y; // 6

~x; // NOT : 11
 x<< 1; // Left Shift: 20
 x>>1; // Right Shift: 5
```

## 논리 연산자
 Boolean을 통해 참과 거짓을 검증하는 연산자

 ```javascript
const x = true;
const y = false;

x && y; // AND : false
x || y; // OR: true
!x; // NOT: false
 ```

 ## 삼항연산자
 조건에 따라 값을 선택하는 연산자 `조건 ? 참 : 거짓 `형태를 가짐.

 ```javascript
const x = 10;
const y = 12;
x > y ? 100 : 200;  //200
 ```

 ## 관계 연산자
 객체에 해당 속성(키값)이 있는지 확인하기 위한 연산자

 ```javascript
 const x = {
   name: "This is Name",
   email: 'this is email',
 };

  'name' in x; //true
  'This is Name' in x //false
  'test' in x; // false
 ```

 ## typeof 
 피연산자의 타입을 반환하는 연산자로 문자열로 타입이 반환됨

 ```javascript
 const x = 10;
 const  y = "String";
 const z = false;

 typeof x; // number
 typeof y; // string
 typeof z; // boolean
 ```