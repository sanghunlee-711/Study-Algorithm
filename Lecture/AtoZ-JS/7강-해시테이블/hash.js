//배열도 js에서는 원래 객체니까 해시테이블 처럼 사용은 할 수 있지만 올바른 사용법이 아니므로 제외 (추천 노노)
const tableArr = [];
tableArr['key'] = 100;
tableArr['key2'] = "Hello";
console.log(tableArr['key']); // 100
console.log(tableArr);
tableArr['key'] =  349;
console.log(tableArr['key']); // 349
console.log(tableArr);
delete tableArr['key'];
console.log(tableArr['key']); // undefined
console.log(tableArr);

//객체 사용이 유용함. JS Hash Object == Hash Table
const tableObj = {};
tableObj['key'] = 100;
tableObj['key2'] = "Hello";
console.log(tableObj['key']); // 100
console.log(tableObj);
tableObj['key'] = 349;
console.log(tableObj['key']);
console.log(tableObj);
delete tableObj['key'];
console.log(tableObj['key']);
console.log(tableObj);

// Map 객체 사용
const tableMap = new Map();
tableMap.set('key', 100); //set함수를 이용해서 값을 넣을 수 있음.
tableMap.set('key2', 'Hello'); //set함수를 이용해서 값을 넣을 수 있음.
console.log(tableMap['key']) // undefined
console.log(tableMap.get('key')) // undefined
const obj = {a:1};
tableMap.set(obj, 'A1'); //Map은 Object로 키로 쓸 수 있다.
console.log(tableMap.get(obj)); // A1
tableMap.delete(obj);
console.log(tableMap.get(obj)) // undefined
console.log(tableMap.keys()); //{ 'key', 'key2' }
console.log(tableMap.values()); //  { 100, 'Hello' }
tableMap.clear();

//Set 객체 사용
const tableSet = new Set();
tableSet.add("key"); // key와 value가 동일하게 들어가게 됨
tableSet.add("key2");
console.log(tableSet.has('key')) // true
console.log(tableSet.has('key3')) // false
tableSet.delete("key2")
console.log(tableSet.has("key2")); // false
tableSet.add('key3');
console.log(tableSet.size); // 2
tableSet.clear();
console.log(tableSet.size); // 0 

