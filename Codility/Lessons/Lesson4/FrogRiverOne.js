
////set이 다 없어지는 순간이 다 된거지 뭐
// Detected time complexity:
// O(N)
function solution(X, A) {
  if(X > A.length) return -1;

  const set = new Set();
  let finalIdx = -1;
  for(let i = 1; i < X + 1; i++) {
          set.add(i);
  }
  

  A.forEach((a,idx)=> {
      if(set.has(a)) {
          set.delete(a);
          if(set.size === 0) {
              finalIdx = idx;
              return;
          }
      }
  })
  return finalIdx
}