// 1. 구조분해 할당을 이용한 변수 Swap
// ES6의 구조 분해 할당 문법을 사용하여 두 변수를 swap을 할 수 있습니다.
let a = 5, b = 10;
[a, b]=[b, a];
console.log(a,b); // 10 ,5

// 2. 배열 생성으로 루프 제거하기
// 보통 단순히 범위 루프를 돌고 싶다면 다음과 같이 코드를 작성합니다.
let sum = 0;
for(let i = 5; i < 10; i +=1 ){
  sum += i;
}

// 만약 범위 루프를 함수형 프로그래밍 방식으로 사용하고 싶다면 배열을 생성해서 사용할 수 있습니다.
const sum2 = Array.from(new Array(5), ( _, k) => k + 5).reduce((acc,cur)=> acc+cur, 0);

// 3. 배열 내 같은 요소 제거하기
// Set을 이용할 수 있다.
const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

// 4. Spread연산자를 이용한 객체 병합
// 두 객체를 별도 변수에 합쳐줄 수 있다.
const person = {
  name: 'Lee SangHun',
  familyName: 'Lee',
  givenName: 'SangHun',
};

const company = {
  name: 'Dtime. Inc.',
  address: 'Seoul'
};

const assemble = {...person, ...company};
console.log(assemble);


// 5. &&와 || 활용
// &&와 ||는 조건문 외에서도 활용될 수 있습니다.

/// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있습니다.
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당됩니다.
const participantName = null;
const name = participantName || 'Guest';
const flag = true;
/// &&
// flag가 true일 경우에만 실행됩니다.
flag && console.log("Hello there");

// 객체 병합에도 이용할 수 있습니다.

const makeCompany = (showAddress) => {
  return {
    name: 'Cobalt. Inc.',
    ...showAddress && { address: 'Seoul' }
  }
};
console.log(makeCompany(false)); // { name: 'Cobalt. Inc.' }
console.log(makeCompany(true)); // { name: 'Cobalt. Inc.', address: 'Seoul' }

// 6. 구조 분해 할당 사용하기
// 객체에서 필요한 것만 꺼내 쓰는 것이 좋습니다.

const person11 = {
    name: 'Lee SangHun',
    familyName: 'Lee',
    givenName: 'SangHun',
    company: 'NaverWebtoon. Inc.',
    address: 'Seoul',
}

const { familyName, givenName } = person11;
console.log(familyName, givenName);

// 객체 생성시 키 생략하기
// 객체를 생성할 때 프로퍼티 키를 변수 이름으로 생략할 수 있습니다.

const name2 = 'Lee Sanghun';
const company2 = 'Nweb';
const person2= {
  name2,
  company2
}
console.log(person2);
// {
//   name: 'Lee Sanghun'
//   company: 'Nweb',
// }

// 7. 비구조화 할당 사용하기
// 함수에 객체를 넘길 경우 필요한 것만 꺼내 쓸 수 있습니다.

const makeCompany2 = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName
  }
};
const cobalt = makeCompany2({ name: 'a.', address: 'b', serviceName: 'c' });


// 8. 동적 속성 이름
// ES6에 추가된 기능으로 객체의 키를 동적으로 생성 할 수 있습니다.

const nameKey = 'name';
const emailKey = 'email';
const person3 = {
  [nameKey]: 'Lee Sanghun',
  [emailKey]: 'cloudlee711@gmail.com'
};
console.log(person3);
// {
//   name: 'Lee Sanghun',
//   email: 'cloudlee711@gmail.com'
// }


// 9. !! 연산자를 사용하여 Boolean 값으로 바꾸기
// !! 연산자를 이용하여 0, null, 빈 문자열, undefined, NaN을 false로 그 외에는 true로 변경할 수 있습니다.

function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log('잘못된 값');
  }
}
check(null); // 잘못된 값
check(3.14); // 3.14
check(undefined); // 잘못된 값
check(0); // 잘못된 값
check('Good'); // Good
check(''); // 잘못된 값
check(NaN); // 잘못된 값
check(5); // 5