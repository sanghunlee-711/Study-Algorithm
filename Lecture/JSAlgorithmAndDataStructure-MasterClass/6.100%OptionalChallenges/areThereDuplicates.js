/*
다수의 변수를 받게 되는데 여기서 중복되는 것이 있으면 True 아니면 false를 반환하라
Examples
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,3) // true
areThereDuplicates('a', 'b','c','a') // true
*/ 



function areThereDuplicates(...args) {
  let answer = false;
  let hash = {};
  
  args.forEach((el)=>{
      if(hash[el]){
          answer = true;
          return;
      }
      hash[el] = (hash[el] || 0) + 1;
  })
  return answer;
// good luck. (supply any arguments you deem necessary.)
}

//Solutions

//Multiple Pointer
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b); // O(n)
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}


//One liner
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}