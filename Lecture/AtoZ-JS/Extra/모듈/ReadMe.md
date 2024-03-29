# 모듈
JS는 파일들을 각각 별개의 프로그램으로 취급함

웹사이트가 하는일이 많아져서 스크립트 파일도 많아짐

스크립트 파일간의 통신을 위해 전역스코프에 존재하는 변수와 함수를 사용해야 했음

스크립파일간 의존도 확인 및 실행순서 제어의 한계점이 생김

이런 불편한점을 해결하려고 모듈이 태어남


## 용어정리
* 모듈과 컴포넌트는 자주 혼용됨
* 모듈은 설계 시점에 의미 있는 요소이며 컴포넌트는 런타임 시점에 의미있는 요소임

## 모듈
* JS 모듈은 직접적으로 런타임 환경에 발생하는데 왜 모듈이라 하는지는, JS는 파일 하나가 프로그램이기 때문에 모듈이라는 이름을 지었을 것으로 추측 됨
  *  설계 시 용어가 혼동되는 경우 가 많음
  * 제대로된 모듈 역할을 하기 위해 디렉토리 단위를 모듈 개념에 가깝게 사용하는 경우가 많음
* `import` `export` 를 통해 모듈 불러오기와 내보내기를 수행할 수 있음
* 모듈은 로컬파일에서 동작하지 않고 http, https프로토콜을 통해서만 동작하게 됨
  * [http-server](https://github.com/http-party/http-server)를 쓰면 간단하게 테스트 가능


## 모듈 예제
  * hello.js
  ```javascript
  export function hello(name) {
    alert(`Hello, ${name}!`)
  }
  ```

  * index.html
  ```html
    ...
  <html>
    ...
    <body>
      <script type="module">
        import {hello} from './hello.js';
        hello('Hello')
      </script>
    </body>
  </html>
  ```

 ### 모듈의 특징
  1. 항상 use strict로 실행된다.
     - 일반 script태그는 let, var등 선언자를 제외하고도 변수선언이 됨(전역스코프에 자동 저장) 
     - 그런데 use strict는 허용이 되지 않음
  2. 일반 script는 최상위 선언 시 전역으로 등록되어 다른 스크립트 태그에서도 사용 가능하나 
      - 모듈 스콥에서는 레벨 스코프를 가지므로 참조할 수 없게 됨 
  3. 단 한번만 평가 됨
      - 이미 평가된 걸 사용 함
  4. 지연 실행이 가능 함
      - defer옵션을 넣지 않아도 DOM이 모두 만들어진 후 실행 되므로 defer를 적용한 것 과 같음
  5. 사실 요즘은 webpack등을 이용해 번들링한 스크립트를 불러오면 크게 `type="module"`을 사용할 일이 별로 없음
      - 알아서 다해주므로 .. 하지만 작동방식은 꼭 알 고 있자!

