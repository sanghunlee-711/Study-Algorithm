/*
7개의 수가 주어지면 그중 가장 작은수를 출력하는 프로그램을 작성하세요
*/

const solution = (...arg) => {
  const arr = [...arg];
  if(!arr.length) throw new Error("인자를 입력해주세요.")
  if(arr.length === 1) return arr[0];

  const minVal = arr.sort((a,b)=> a-b);

  return minVal[0];
}

const solution2 = (...arg) => {
  const arr = [...arg];
  if(!arr.length) throw new Error("인자를 입력해주세요.")
  if(arr.length === 1) return arr[0];

  let minVal = Number.MAX_SAFE_INTEGER;

  arr.forEach((el)=> {
    if(el < minVal) minVal = el;
    }
  )
  return minVal;
}


const solution3 = (...arg) => {
  const arr = [...arg];
  if(!arr.length) throw new Error("인자를 입력해주세요.")
  if(arr.length === 1) return arr[0];
  
  let minVal = Number.MAX_SAFE_INTEGER;

  arr.forEach((el)=> {
    minVal = Math.min(el, minVal);
    }
  )
  return minVal;
}

const solution4 = (...arg) => {
  return Math.min(...[...arg]);
}

const solution5 = (...arg) => {
  return Math.min.apply(null,[...arg]);
}

console.log(solution(5,3,7,11,2,15,17)); //2
console.log(solution2(5,3,7,11,2,15,17)); //2
console.log(solution3(5,3,7,11,2,15,17)); //2
console.log(solution4(5,3,7,11,2,15,17)); //2
console.log(solution5(5,3,7,11,2,15,17)); //2