const arr1 = Array.from(Array(6), (v,k)=>k+1);

// 마지막값 추가 및 삭제 (push, pop);
arr1.push(7);
arr1.push(8,9,10);
console.log(arr1);
arr1.pop(); // 마지막 값 리턴
arr1.pop(); 
console.log(arr1.pop()); // 8
console.log(arr1);

//첫번째 요소 추가 및 삭제 (shift, unshift)
arr1.shift();
arr1.shift();
console.log("shift",arr1);
arr1.unshift(100);
console.log("unshift",arr1);

//중간 요소 잘라서사용 slice
const arr2 = Array.from(Array(6), (v,k)=>k+1);
console.log("slice",arr2.slice(2,4)); //첫번째 요소가 잘라낼 배열 첫번 째,두번째 요소가 마지막 (마지막 인덱스는 나오지 않음)
console.log("slice 원본 배열은 변화없음", arr2); //원본 배열은 변화없음

// 중간 요소 삭제
const arr3 = Array.from(Array(6), (v,k)=>k+1);
arr3.splice(2,2); //2번인덱스 부터 2개 값을 삭제함.
console.log("splice", arr3);

//배열 순회
const arr4 = Array.from(Array(6), (v,k)=>k+1);
for(let i = 0; i < 6; i +=1){
  console.log("배열 순회",arr4[i]);
}

//for of:  아래에서 item이 각 배열의 요소임
for(const item of arr4){
  console.log("for of 배열 순회",item);
}

//충격적 진실
const arr5 = Array.from(Array(6), (v,k)=>k+1);
console.log("Type of Arr : ",typeof arr5); //object
arr5['key'] = 'value';
console.log('add key value in Arr5 : ', arr5);
//배열의 길이는 내부적으로 관리되어 키 값을 넣게되어도 배열 길이는 변화가 없다.
console.log("키 값 추가 전이랑 다를게 없는 길이 추가된 길이는 7이 되어야함 : ",arr5.length); 

