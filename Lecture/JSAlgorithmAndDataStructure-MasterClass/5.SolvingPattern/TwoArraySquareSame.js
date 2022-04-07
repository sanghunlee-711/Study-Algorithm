// write a function called same, which accepts two arrays.
//The function shoul retrun true if every value in the array has 
//it's correspoinding value squeared in the second array.
// The frequency of values must be the same.
//Input:[1,2,3],[4,1,9] output: true
//Input: [1,2,3] , [1,9] output: false
//Input: [1,2,1] , [4,4,1] output: false //must be same frequency

//Naive Solution T.C: O(n^2)
//중첩된 루프의 인덱스를 사용하면서 비교하는 방식.
const same = (arr1, arr2) => {
  //길이가다르면 무조건 답이 안되므로
  if(arr1.length !== arr2.length) return false;

  for(let i = 0; i < arr1.length; i ++) {
    let correctIdx = arr2.indexOf(arr1[i] ** 2); //여기서 또 O(n)
    if(correctIdx === -1) return false;
    arr2.splice(correctIdx, 1); //찾으면 제거
  }
  return true;
}

//Frequency Counter Pattern T.C: O(n)
//n개의루프가 n개의 중첩된 루프보다 훨나음 ㅎㅅㅎ
function same_refactor (arr1,arr2) {
  if(arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 ={};
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1) {
    if(!(key**2 in frequencyCounter2)) return false;
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
  }

  return true;
}