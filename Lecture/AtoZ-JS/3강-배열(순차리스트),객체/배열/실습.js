const arr1 = new Array();
const arr2 = [];
const arr3 = [1,2,3,4,5];
const arr4 = new Array(5); //빈값으로 공간만 존재
const arr5 = new Array(5).fill(5);  // fill함수는 입력받은 값으로 모든요소를 초기화 시켜줌.
const arr6 = Array.from(Array(5), function(valueInArray, idxInArr){
  console.log(valueInArray)
  return idxInArr + 1;
}) //from 메서드는 특별한 로직을 통해서 배열을 초기화 시킬 수 있게 도와줌
// 첫번째 메서드는 초기화할 배열, 두번째는 콜백 함수

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

// 아래 방법은 별로 유용하지는 않음 -> 사용 지양
const lengthArr = Array.from(Array(5), (v,k)=> k+1);
console.log("lengthArr",lengthArr);
console.log("length of lengthArr", lengthArr.length);
lengthArr.length = 3; //length 조작시 뒤의 요소가 삭제 됨
console.log('modified lengthArr', lengthArr); 
lengthArr.length = 10; //length 조작시 뒤의 요소가 빈 값으로 채워짐
console.log('Added lengthArr', lengthArr); 