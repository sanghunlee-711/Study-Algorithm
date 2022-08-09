//O(N) or O(N * log(N))
//Score: 100
/*
1. set에 복사해서 중복 날림
2. set의 맥스값까지 회문 돌거임
3. 만약 없는 값이 존재하면 걔가 max 값임
4. 만약 없는 값이 존재하지 않으면 max의 + 1임
5. max값이 음수이면 걍 1 리턴할거임.
*/
function solution(A) {
    
  A = A.filter((el)=> el > 0);
  //5. max가 음수인경우
  if(!A.length) return 1;
  //1.중복제거
  A= A.sort((a,b)=> b-a);
  const set = new Set([...A]);
  const [max] = set;
  
  //2.set의 맥스값까지 회문 돌 거임.
  for(let i = 1; i < max+1; i++) {
      if(set.has(i)){
          set.delete(i);
      } else {
          //중복을 이미 제거하여서 괜찮음.
          set.add(i);
      }
  }
  
  if(set.size !== 0) {
      //리스트 내에서 빈값만 남게 됨
      //smallest positive intege
      const [first] = set;
      return first;
  }else{
      //4.없는값 미존재로 max+1리턴해주면 됨
      return max + 1;
  }
}