const array = [5,9,10,3,8,3,2];

// 아래와 같이 정렬 시 ASCII문자 순서대로 정렬되어 우리가 원하는 크기대로 정렬되지 않음.
array.sort();
console.log(array); //[10,2,3,3,5,8,9]
// 10이 먼저 나오는 이유는 ASCII 문자 '1' 이 '2' 보다 작기 때문이다.

array.sort((a,b)=> a - b) // 오름차순 정렬
console.log(array); //[2,3,3,5,8,9,10]

array.sort((a,b)=> b-a) // 오름차순 정렬
console.log(array); // [10,9,8,5,3,3,2]