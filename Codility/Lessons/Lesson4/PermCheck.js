/*
    2*O(N)
*/
//85
// O(N) | O(N*logN)
function solution(A) {
  A = A.sort((a,b)=> a - b);
  const max = A[A.length - 1];
  let idx = 0;
  
  for(let i = 1; i < max + 1; i++) {
      if(A[idx] !== i) return 0;
      idx++
  };
  return 1;
}

/*
  set에 기억하고 확인각
  O(N) or O(N * log(N))
*/
function solution(A) {
  //중복없이 만들어지니까
  const set = new Set([...A]);
  const max = set.size; //어차피 1부터니까길이가 맥스임
  if(A.length !== max) return 0;

  for(let i = 1; i < max + 1; i++) {
      if(!set.has(i)) return 0;
  }
  return 1;
}