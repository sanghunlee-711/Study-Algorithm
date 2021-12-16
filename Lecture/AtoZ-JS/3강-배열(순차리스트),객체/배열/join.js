const arr = Array.from(Array(5), (v,k)=> k+1); //[1,2,3,4,5]
const arr2 = Array.from(Array(4),(v,k)=> k+6);
// join
console.log(arr.join(", "));

//reverse => 배열 거꾸로 뒤집어짐
console.log(arr.reverse());
console.log(arr); //이렇게 한번 사용하면 원 배열에도 영향이 감
arr.reverse();
console.log(arr); //이렇게 한번 사용하면 원 배열에도 영향이 감
//concat
console.log(arr.concat(arr2));
