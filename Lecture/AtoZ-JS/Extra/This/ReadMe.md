# This
## 특징
* JS에서 this는 다른언어들과 다르게 값을 호출하는 방법에 의해 결정되는데 
* 다른언어 (예를들어 Java)들은 보통 ***인스턴스 자신을 가리키는 참조변수*** 로 많이 쓰인다.
* JS는 ***해당함수의 호출방식에*** 의해 this가 결정됨

## 함수가 호출되는 방식
크게 함수가 호출되는 방식은 4가지가 존재함
```md
1. 함수호출 -> this는 '글로벌 객체'와 바인딩 됨
2. 메소드호출 -> this는 '메서드를 호출한 객체'와 바인딩 됨
3. 생성자 함수 호출 -> this는 '생성자 함수가 생성한 인스턴스'와 바인딩 됨.
4. apply/call/bind 를 통한 호출 -> 메서드에 '첫번째 인수로 전달하는 객체'에 바인딩 됨.
```

아래 예제들을 보며 샘플을 통해 확인해보자

## 예제
### 1. 함수 호출
```javascript
var foo = function() {
  console.log(this);
}

foo(); //window
window.foo(); //window
``` 
두 호출 모두 정확히 this는 윈도우를 가리키고 있음
기본적으로 this는 전역객체에 바인딩 되고 전역함수는 물론 함수의 내부함수도 this는 그를 감싸는 외부함수가 아닌

전역객체에 바인딩 됨.

```javascript
function foo() {
  console.log("this is foo's this", this); // window
  function bar() {
    console.log("this is bar's this", this); // window
  }
  bar();
}

foo();
```

또 메서드의 내부함수일 경우에도, 콜백함수의 경우에도 this는 전역객체(window or global)에 바인딩 됨.
***내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 관게없이 this는 전역객체를 바인딩한다.***라고 하는데 이는 설계단계의 결함이라고 하고 이를 해결(회피)하기 위해서는 아래처럼 this를 변수에 할당해놓고 제대로 참조하게 하여 사용하는 방법이 있음
```javascript
var value = 1;
var obj = {
  value: 100,
  foo: function() {
    var that = this; //this === obj
    console.log("foo's this", this) // obj
    console.log("foo's this value", this.value) // 100
    function bar () {
      console.log("bar's this: ", this) // window
      console.log("bar's this value: ", this.value) // 1;
      console.log("bar's that!!: ", that)//obj
      console.log("bar's that value:", that.value) // 100
    }
    
    bar()
  }
};

obj.foo();
```

### 2. 메서드 호출
함수가 객체의 프로퍼티이면 메서드라고 하는데 이때 메서드를 호출하는 객체에 this가 바인딩 됨
```javascript
var obj1 = {
  name: "HunHoon",
  sayName: function () {
    console.log(this.name);
  }
}

var obj2 = {
  name: "Ronaldo",
}

obj2.sayName = obj1.sayName; //새로운 함수를 객체에 할당해줌

obj1.sayName(); //HunHoon
obj2.sayName(); //Ronaldo
```

obj2에 기존 함수를 할당해주었음에도 불구하고 예상과 다르게 obj2에서 메서드 호출 시 obj2의 이름이 나오는 것을 알 수 있음
이로서 this는 메서드 호출을 하는 객체에 자동으로 바인딩 됨.

### 3. 생성자 함수 호출
JS 생성자 함수 호출은 그냥 함수에 new 연산자 붙여서 호출하면 해당함수는 생성자 함수로 작동함(arrow function은 해당 x)
```javascript
function NewOne (name){
  this.name = name
}

const me = new NewOne("Lee")
console.log(me);
//NewOne {
//   name: 'Lee',
//   __proto__: { constructor: ƒ NewOne() }
// }

const testMe = NewOne("Test");
console.log(testMe); //undefined
```

### 4. apply/call/bind 호출

#### 4.1 apply
일단 apply는 아래와 같은 명세가 있음
```javascript
func.apply(thisArg, [argsArray])

// thisArg: 함수 내부의 this에 바인딩할 객체
// argsArray: 함수에 전달할 argument의 배열
```

아래는 apply를 통해 생성자 함수인 Person을 불러옴과 동시에 foo라는 빈객체에 바인딩 시킨 예제
```javascript
var Person = function (name) {
  this.name = name;
}

var foo = {};

//apply 메서드는 생성자 함수인 Person을 호출하고 이때 객체 foo에 바인딩을 시킴
Person.apply(foo, ['name']);
console.log(foo); //{name: 'name'}
```
* 주의 해야할점은 apply()메서드는 this를 특정객체에 바인딩 할 뿐 
* 본질적 기능은 함수 호출임
* 위 예제에서는 Person함수의 this가 foo객체가 되고
* Person함수는 this(이미 foo로 된)의 name 프로퍼티에 매개변수로 받은 name을 할당함
* 그래서 빈 객체인 foo에 없던 name프로퍼티에 name프로퍼티가 동적으로 추가되고 값이 동적할당 됨.


#### 4.2 call
call()메서드의 경우 apply()와 같은 기능을 하지만 apply()의 두번째 인자에서 배열형태로 arguments를 넘겼다면
call메서드는 각각 하나의 인자로 넘김

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function(callback) {
  if(typeof callback == "function") {
    //1. 여기서 this는 Person임
    callback()
    //CHANE: 이렇게하면 this를 Person에 바인드 함으로써 원하는 값을 얻을 수 있음
    callback.call(this)
  }
};

function foo() {
  console.log(this.name); //여기서 this는 window(전역객체) 임
}

var p = new Person("Lee");
p.doSomething(foo);
```

#### 4.3 bind
apply, calll과 다르게 bind는 인자로 넘겨준 this가 바인딩 된 새로운 함수를 리턴한다
그래서 apply,call처럼 즉시 실행 되는것이 아니라 명시적으로 실행을 시켜줄 필요가 있다.
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    callback.call(this);
    // this가 바인딩된 새로운 함수를 호출
    callback.bind(this)(); //함수에 인자로 전달한 this가 바인딩 된 새로운 함수를 리턴한다
    //실제로 실행을 안하므로 명시적으로 함수를 호출할 필요가 있음
  }
};


function foo() {
  console.log('#', this.name);
}

var p = new Person('Lee');
p.doSomething(foo);   // "#" "Lee"
```

## EX
#### apply의 활용처
  apply()메서드의 대표적인 용도는 arguments와 같은 ㅠ사배열 객체에 배열메서드를 사용하는 경우에 유용하다.
  arguments객체는 배열이 아니기 때문에 slice()같은 배열의 메서드를 사용할 수 없으나 apply를 통해 가능하다.

  `Array.prototype.slice.apply(arguments)` 는 Array.prototype.slice()메서드를 호출할 건데 this는 arguments객체로 바인딩할거야
  라는 말이다. 그래서 Array.prototype.slice()메서드를 arguments객체 자신의 메서드인것 처럼 호출이 가능해지는데
  `arguments.slice()`와 같은 형태이다.

```javascript
```


# 정리
* this는 함수의 호출방식에 따라 동적으로 결정됨(다른언어랑 다름 짜증남)
* 함수호출방식은 크게 4가지가 존재함
    1. 함수호출 -> this는 '글로벌 객체'와 바인딩 됨
    2. 메소드호출 -> this는 '메서드를 호출한 객체'와 바인딩 됨
    3. 생성자 함수 호출 -> this는 '생성자 함수가 생성한 인스턴스'와 바인딩 됨.
    4. apply/call/bind 를 통한 호출 -> 메서드에 '첫번째 인수로 전달하는 객체'에 바인딩 됨.
* 콜백함수는 대부분 this가 윈도우로 할당됨
* apply,bind,call을 통해 콜백의 this을 해결할 수 있음
* apply, call은 this를 특정객체에 바인딩하고 함수를 `호출`함
* bind는 this를 `바인딩 한 함수를 다시 리턴`해줌




## 참고
>
* [모던자바스크립트 DeepDive-this](https://poiemaweb.com/js-this)
* [MDN-화살표 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)