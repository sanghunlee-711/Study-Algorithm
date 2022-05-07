function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let answer = 0;
  
  const helper = (obj) => {
      if(!Object.values.length) return;
      
      Object.values(obj).map((el)=>{
          if(typeof el === "object") {
              helper(el);
          }else if(typeof el === "number" && el % 2 === 0){
              answer += el;
          }
      })
  }
  
  helper(obj);
  return answer;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10