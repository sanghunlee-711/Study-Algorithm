# Prototype


## 1.프로토타입이란?
간략하게 말해 Java,C++와 다르게 자바스크립트는 ***프로토타입 기반*** ***객체지향 프로그래밍 언어*** 이다.

클래스 기반 객체지향 언어는 객체 생성 이전 클래스를 정의하고 이를 통해 인스턴스(객체)를 생성하는데 프로토타입 기반은 클래스없이 객체 생성이 가능하다.

그래서 프로토타입이라 함은 JS의 모든 객체는 자신의 부모역할을 담당하는 부모 객체들과 연결되어있고 이런 부모 객체를 Prototpye 객체 또는 줄여서 Prototype이라고 한다.

사실 다른 Java, C++과 유사하게 클래스를 객체(인스턴스)를 만들 수 있도록 ES6에서는 클래스 기능이 추가 되었다. 하지만 이는 Syntatic Sugar이며 작동방법은 결국 프로토타입 기반으로 작동하게 된다.


## 그래서 뭘 알아야할까
크게 6가지 정도를 알면 된다

1. 프로토타입 객체란 
부모객체라고 생각하면됨(클래스의 상속 시 클래스(프로토타입)와 인스턴스의 관계)
2. [[Prototype]] vs prototype
[프로토란](./프로토프로토.png)
  * [[Prototype]] : 함수를 포함한 모든 객체가 가지고 있음, `__proto__`를 통해 접근이 가능함 -> 객체 입장에서는 자신의 부모역할을 하는 프로토타입 객체, 함수객체의 경우 Funtion.prototype가리킴
  * prototype 프로퍼티 : 함수객체만 가지고 있는 프로퍼티임(속성임) -> 함수객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체를 가리킴
3. constructor
프로토타입 객체는 constructor객체를 가지는데 이 constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킴

4. 프로토타입 체인
특정 객체의 프로퍼티(or메서드)에 접근 시 해당객체에 없으면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티(or 메서드)를 차례 대로 검색함 
-> hasOwnProperty()라는 메서드가 대표적 예 (Object.prototype 의 메소드임)

5. 프로토타입 객체의 확장
  * 프로토타입 객체도 객체이므로 일반객체와 같이 프로퍼티(속성)를 추가 삭제할 수 있다.

6. 원시타입의 확장
  * JS에서는 원시타입인 숫자, 문자열, boolean, null, undefined를 제외한 모든것이 객체이다.
  * 그런데 string은 객체 같이 작동할 때가 있음 -> String 생성자 함수로 새로운 스트링을 만드는 경우
  * 원시타입은 객체가 아니므로 프로퍼티나 메서드를 직접추가할 수는 없으나 
    String객체의 프로토타입 객체인 String.prototype에 메소드를 추가하면 원시타입과 객체 모두 사용 가능해짐

7. 프로토타입 객체의 변경
  * 객체는 생성시 prototype이 정해지는데 다른 임의의 객체로도 변경이 가능함
    * 변경 시점 이전에 생성된 객체는 기존 프로토타입 객체를 [[Prototype]](__proto__)에 바인딩 함
    * 변경 시점 이후에 생성된 객체는 변경된 프로토타입 객체를 [[Prototype]](__proto__)에 바인딩 함

8. 프로토타입 체인 동작조건
  * 객체의 프로퍼티 참조 시 해당 객체에 프로퍼티가 없는 경우 프로토타입 체인 작동
  * 객체의 프로퍼티에 값을 할당 시 프로토타입 체인은 미동작
  * 객체에 해당프로퍼티가 있는경우 값을 재할당하고 없는 경우 해당객체에 값을 동적으로 추가하기 때문.

## 프로토타입의 장점
메모리를 덜 사용할 수 있게 된다.

```javascript
function Animal(){
    this.walk = function(){};
    this.talk = function(){};
    this.jump = function(){};
}
var cat = new Animal();
var dog = new Animal();
console.log(cat.walk === dog.walk) // false 
```

만약 위의 코드처럼 계속해서 새로운 인스턴스를 생성할 때 각 생성자함수 내부의 메서드는 별도의 다른 메모리 공간을 차지하게 된다.
새로운 인스턴스들이 new키워드를 통해 새롭게 생성되기 때문이다.
이렇게 되면 동일한 역할을 하는 것이 메모리를 중복차지하고 있으므로 비효율적일 수 있다.

```javascript
function Animal(){};
Animal.prototype.walk = function(){};
Animal.prototype.talk = function(){};
Animal.prototype.jump = function(){};

var cat = new Animal();
var dog = new Animal();
(cat.walk === dog.walk) // true
```
그래서 이렇게 prototype에 지정을 해놓고 쓰면 굳이 메모리 낭비를 하는 수고를 덜 수도 있다.

## 프로토타입의 단점
  * 프로토타입 체인에 걸친 속성검색으로 성능에 나쁜영향을 줄 수도 있고
    존재하지 않는 속성에 접근하려는 시도는 항상 모든 프로토타입 체인 전체를 탐색해서 확인하게 만듦으로 비효율적임.
  * prototype을 잘못 건드리면 언어의 오작동확률이 높음



# 참고
>
![프로토타입-딥다이브자바스크립트](https://poiemaweb.com/js-prototype)
![Why Use Prototype in JavaScript-idallo.com](https://idiallo.com/javascript/why-use-prototypes)