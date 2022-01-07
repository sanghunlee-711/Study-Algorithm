# 스코프
유효 범위라고도 부르며 변수가 어느범위까지 참조되는지를 뜻한다.

```javascript
//here is global scope
const a = 5;

{
  //here is local scope
  const b = 3;
  console.log(a,b); // 5,3
}
console.log(a,b) // ReferenceError: b is not defined
```

var를 사용하면 호이스팅 되어 변수선언이 상단으로 올라가기 때문에 스코프의 개념이 무 의미해짐 -> 개발자가 예상치 못한 오류가 생길 수 있다.

```javascript
var a = 5;

{
  var a = 10;
  console.log(a); // 10
}
console.log(a) // 10
```

# 클로저
함수가 선언된 환경의 스코프를 기억하여 함수가 스코프 밖에서 실행될 때에도 

기억한 스코프에 접근할 수 있게 만드는 문법
```javascript
const makeGreeting =  (name)  => {
  const greeting = "Hello There ";
  
  return () =>{
    console.log(greeting + name);
  }
}

const world = makeGreeting("World");
const hoon = makeGreeting("HUNHOON!!!");

world(); // Hello There World
hoon(); // Hello There HUNHOON!!!
```

원래라면 함수가 종료되면 지역스코프로서 내부 변수들은 GC(Garbage Collecting)을 당해 자동으로 메모리에서 사라져야함.
그런데 greeting이라는 변수가 살아있는 것을 볼 수가 있다. 이는 반환된 함수가 지역변수(greeting)를 계속 참조하고 있어 메모리에서 사라지지 않기 때문이다.
클로저는 더 이상 외부에서 접근 불가능한 영역을 접근할 수 있게 해주는 문법임.

## 클로저를 유용하게 사용하는 법

1. 은닉화
클로저를 이용하여 내부변수와 함수를 숨길 수 있다.
아래 Counter함수를 보면 내부의 함수와 변수에 접근을 할 수 가 없게 됨.

``` javascript
const Counter = () =>{
  let privateCounter = 0;

  const changeBy = (val) => {
    privateCounter += val;
  };

  return {
    increment: ()=>{
      changeBy(1);
    },

    decrement: ()=>{
      changeBy(-1);
    },
    vlaue: () =>{
      return privateCounter;
    }
  }
}

const counter = Counter ();
console.log(counter.value()); // 0
counter.increment(); 
counter.increment(); 
console.log(counter.value()); // 2
counter.decrement(); 
console.log(counter.value()); // 1
```

## 클로저를 알아야하는 이유
저 개념을 유용하게 사용하는 것 보다 알기힘든 버그를 수정할 수 있어야할 능력이 필요하기 때문

```javascript
const counting= ()=> {
  let i = 0;
  for(i = 0; i < 5; i+=1){
    setTimeout(()=>{
      console.log(i);
    },i*100);
  }
}
counting();
```

5가 5번 나온다 -> setTimeOut이 돌기전에 이미 루프가 끝나기 때문

아래는 루프마다 클로저를 만들어 해결하는 방식이다.
setTimeOut을 실행시키는 즉시실행 함수는 number 라는 인자를 받아 console.log를 실행시켜준다
이때 인자를 i로 받음으로서 루프마다 실행을 시키게 되는 것.
```javascript
const counting= ()=> {
  let i = 0;
  for(i = 0; i < 5; i+=1){
    ((number)=>{
      setTimeout(()=>{
        console.log(number);
      },i*100);
    })(i);
  }
}
counting();
```

아래는 블록 수준 스코프인 let을 이용하여 해결하는 방식이다.
블록수준 스코프로서 매 실행마다 새롭게 생성된다.
```javascript
const counting= ()=> {
  for(let i = 0; i < 5; i+=1){
    setTimeout(()=>{
      console.log(i);
    },i*100);
  }
}
counting();
```