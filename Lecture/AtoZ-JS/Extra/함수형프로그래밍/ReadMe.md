# 함수형 프로그래밍
패러다임이란 무엇을 해야할지를 말하기보단 안해야 될걸 말해주는 거임

## 프로그램
프로그램은 보통 순차, 분기 ,반복, 참조로 구성된다.

패러다임은 위 4가지 요소를 어떻게 이용할 것인가를 보통 다룬다.

## 객체지향VS함수형
[](./객체지향함수형.png)
* 객체지향은 객체라는 것을 통해 묶고 객체간 통신을 함으로서 프로그래밍이 작동됨.
* 함수형은 데이터를 함수를 이용해 새로운 데이터로 만들어 나가는  데이터 파이프라인의 형태로 프로그래밍이 작동 됨.


### 함수형의 패러다임
* 객체지향 추상화의 최소단위가 객체인 것 처럼 함수형은 함수가 최소단위다.
* 객체보다 더 작은단위로 추상화가 되므로 함수단위로 나눠지므로 재사용성이 높다.
* 불변성을 지향하기에 동작을 예측하기 쉽고 사이드 이펙트를 방지한다.
  * 사이드 이펙트를 방지한다는 것은 동시성 문제도 해결 된다는 의미이다.
  * 이러한 장점은 스레드등을 통한 동시성 문제도 해결해주는 큰 장점임.
* 객체지향은 제어흐름의 간접적인 전환에 부과되는 규율이다
  * 순차, 분기 ,반복, 참조 네가지 흐름의 전환을 객체를 통해 간접적으로 통제를 함.
* 함수형은 변수할당에 부과되는 규율이다.
  * 함수형은 변수할당을 통제하여 위 4가지 제어흐름을 통제한다고 보면 됨.

### 샘플 비교
N개의 숫자가 공백없이 쓰여져있을 때 이 숫자를 모두 합해서 출력하는 '프로그램'을 만들어주세여

#### 객체지향 프로그래밍
대표적인 StringNumber객체를 만들어서 할당해줌.
```javascript
function StringNumber(string) {
  this.string = string;
}

StringNumber.prototype.calculate = function () { //StringNumber객체에 calculate메서드 추가
  const stringNumber = "12345";
  this.sum = 0;

  for(let i = 0; i < stringNumber.length; i +=1){
    this.sum += stringNumber[i] - "0";
  }
}

const stringNumber = new StringNumber('12345');
const printer = new Printer();
stringNumber.calculate();
printer.log(StringNumber.sum);
```

#### 절차지향 프로그래밍
이렇게 간단한건 절차지향이 보기 편할 수도 있음.
```javascript
const stringNumber = "12345";
let sum = 0;
for (let i = 0; i < stringNumber.length; i +=1){
  sum += stringNumber[i] - "0";
}
```

#### 함수형 프로그래밍
데이터를 모두 함수실행의 연속으로 만들어줌.
```javascript
const stringNumber = "12345";
console.log(stringNumber.split("").map(x => parseInt(x)).reduce((x,y)=> x+y,0););
```


### 함수형 패러다임 장점
* 상태가 없기 때문에 사이드이펙트가 없다.
* 최소단위가 함수이므로 재사용성이 높다.
* 함수의 조합으로 코드가 짧고 간결하다.

### 함수형 패러다임 단점
* 상태가 없기 때문에 사이드이펙트가 없다. -> 객체지향인 경우 상태를 조작하여 편하게 변경할 수 있는 것도 상태가 없기 때문에 쓸데없이 메모리와 성능을 사용해야 할 필요가 있음
* 최소단위가 함수이므로 재사용성이 높다. -> 함수를 잘개 쪼개야해서 기억못할수가 있음
* 함수의 조합으로 코드가 짧고 간결하다. -> 숙련도가 높아야하므로 시간이 꽤 걸림..


## 선언형 프로그래밍
사고에 대한 패러다임으로 보면 편함.
* 기존 명령형 프로그래밍은 문제를 `어떻게`해결해야하는지 컴퓨터에게 명령을 내리는 방법
* 선언형 프로그래밍은 `무엇을`해결해야 할지에 집중하고 해결방법은 컴퓨터에게 위임하는 방법.

### 명령형 프로그래밍
Control Flow 방식을 통해 
1. Goto
2. If/Then/Else
3. Switch/Case
4. For/While
등을 통해 데이터를 제어하게 됨
```javascript
let a = [1,2,3,4,5];
for(let i = 0; i < a.length; i+=1){
  if(a[i]%2 === 0){
    console.log(a[i]);
  }
}
```

### 선언형 프로그래밍
Data Flow 방식을 통해
StateLess하고 Recursion, Pipe등을 통해 데이터가 흘러가도록 둠.

따라서 DataFlow방식을 잘 사용하면 데이터의 제어 없이 필요한 결과값이 나옴(?)

```javascript
[1,2,3,4,5].filter((item)=> item%2 === 0).forEach((item)=> console.log(item));
```

## 멀티패러다임
 JS는 멀티패러다임이 가능하고 굳이 객체지향과 함수형으로 나눌 필요없이 둘다 쓰면 됨
 