
//3개를 곱한 경우의 수에서 가장 큰 값을 리턴해달라가 요구사항
/*
    max면 마이너스 걍 없애면 되지않나
    안되겠넴 ㅋ [-2, -4, 5, 1, 2] -> 없애면 60이 없어지니까 안됨
    무난한 접근법은 bf네 -> O
    prefix는 애당초 안될텐고 -> X
    정렬은 무슨의미가 있을까 -> -2 -4 1 2 5
    정렬 한 뒤에서 부터 돌려도 의미가 없음 -> 어차피 다 돌려봐야 알거니까
    그럼 다 돌려봐야아네
    아닌데 흠
    그렇다면 
    
    1. 정렬을 때림
    2. 그러면 음수로 제일큰 애들이 앞으로 올거임
    3. 양수로 제일큰애들은 뒤로감
        2와 3중 더 큰애를 고르면 되지 않나?
*/
function solution(A) {
  A = A.sort((a,b)=>a-b);
  const N = A.length;
  //뒤에서 큰애들 세가지 곱
  let max = A[N-1] * A[N-2] * A[N-3]; 
  //길이 3개면 무조건 3개를 곱해야하는 조건으로 인해 이게 무조건 max
  if(N === 3) return max;
  
  let negativeMultiple = A[0]*A[1];
  //음수가 하나뿐이면 두개 처음 두가지 항을 곱해도 어차피 -케이스이므로 max를 찾는것에 의미가 없음
  if(negativeMultiple < 0) return max;

  const filtered = A.filter((el)=> el > 0);

  for(let i = 0; i < filtered.length; i ++) {
      //양수 부터만 돌릴 것임.
      max = Math.max(negativeMultiple*filtered[i], max);
  }
  return max
}
