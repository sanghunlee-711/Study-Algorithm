/*
 which accepts an array and a callback. 
 The function returns true if a single value in the array returns true when passed to the callback. 
 Otherwise it returns false.
*/

function someRecursive(arr, callback){
  let isTrue = false;
  arr.forEach((el)=> {
    if(callback(el)) {
      isTrue = true;
    }
  })
  return isTrue ? true: false;
}

//solution
//길이 0 인경우의 엣지케이스 추가
//여기도 slice를 이용해서 하나씩 자른것 다음부터의 window를 넘겨줌
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}