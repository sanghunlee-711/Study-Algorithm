// JS의 Arr는 다른언어와 조금 다릅니다.
// 배열이 동적입니다.
const arr = [];
console.log(arr);
arr.push(1);
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

// JS의 Arr는 HashMap에 가깝습니다.
console.log(arr.length);

//index가 number가 아니어도 작동하기 대문입니다.
//다른 문자열이나 boolean을 넣으면 자동으로 키값이 되는데 이는 JS배열이 근본적으로 객체이기 때문에 그렇다.
// length가 내부적으로 관리가 된다
// 이게 정상적 특징이 아니므로 유의하고 사용은 지양하자.
arr['string'] = 10;
arr[false] = 0;
console.log(arr);
console.log(arr.length);
arr[4] = 5;
console.log(arr.length);
