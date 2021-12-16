const obj1 = new Object();
const obj2 = {};
const obj3 = {name: '이름', company: '회사'};
console.log(obj1);
console.log(obj2);
console.log(obj3);

//객체 값 추가
// 1번 방법
obj1['email'] = 'email';
console.log("add email : ",obj1);

// 2번 방법
obj1.phone = 01234;
console.log("add phone : ",obj1);

//객체 요소 삭제 (delete)
delete obj1.phone;
console.log("delete phone : ",obj1);

//실제 키값 존재하는지 확인 : in연산자
console.group('email' in obj1);
console.group('phone' in obj1);
  //키와 value만 따로 빼와서 배열로 반환 받기 : Object.keys , Object.values

//객체 순회 방법
  //for in
  for(const key in obj1){
    console.log("객체 순회",key, obj1[key]);
  }