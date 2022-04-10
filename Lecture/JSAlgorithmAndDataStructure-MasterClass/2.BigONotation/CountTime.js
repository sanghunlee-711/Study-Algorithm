const addUpto = (n) =>{
  let total = 0;

  for(let i = 1; i <= n; i ++) {
      total += i;
  }
  return total;
}

//performance 내장함수를 이용해서 측정 가능함

let t1 = performance.now();
addUpto(10000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`);