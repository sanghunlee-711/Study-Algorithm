// 빈 배열 생성가능
let arr1 = [];
console.log(arr1);

// 미리 초기화된 배열(Array) 생성 가능
let arr2 = [1,2,3,4,5];
console.log(arr2);

// 많은 값을 같은 값으로 초기화 할 경우 fill메서드를 사용하자
let arr3 = Array(10).fill(3);
console.log(arr3);

// 특정 로직을 사용하여 초기화 할 경우 from 메서드를 사용하자
let arr4 = Array.from({length: 100}, (_, i) => i);
console.log(arr4);

// 배열 요소 추가, 삭제 팁
const arr5 = [1, 2, 3];
console.log(arr5);

//4를 끝에 추가
arr5.push(4); //복잡도: O(1)

//여러개를 한꺼번에 추가하기는 push로도 가능
arr5.push(5, 6, 7); //복잡도: O(1)
console.log(arr5)

// 3번 인덱스에 'add' 를추가한다. ->splice의 args는(추가할 인덱스 숫자, 삭제할 원소 개수, 추가할 원소) 
arr5.splice(3, 0, 'add'); // O(n) 
console.log(arr5);

// 3번인덱스 값을 제거한다.
arr5.splice(3, 1); // O(n) 
console.log(arr5);