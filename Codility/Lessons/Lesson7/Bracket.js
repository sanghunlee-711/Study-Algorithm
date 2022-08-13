// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*
    1. 페어를 정해놓은 hash맵을 미리 만듦(open을 키 값을 close)
    2. 짝이 없으면 스택에 넣고 있으면 뺌
    3. 스택이 비어있지 않으면 리턴 0 비어있으면 1
*/
const hash = {
  "(" : ")",
  "[" : "]",
  "{" : "}",
};

function solution(S) {
if(!S.length) return 1;
if(S.length % 2 !== 0) return 0;


let stack = [];

for(let i = 0; i < S.length; i ++) {
  const el = S[i];
  //push open keys in stack
  if(Object.keys(hash).includes(el)) stack.push(el);
  else {
      const open = stack.pop();
      if(hash[open] !== el) return 0;
  }
}

return !stack.length  ? 1 : 0
}