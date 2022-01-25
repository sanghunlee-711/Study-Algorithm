const strs2= ["ba","na","n","a"];
const t2 = "banana";


function solution(strs, t) {
  //편의를 위해 t의 길이에 +1 만큼의 배열을 만든다.
  const dp = Array.from({length:t.length+1}, ()=>0);
  
  //빠른 문자열 검사를 위해 문자열 리스트를 set자료형으로 만든다
  const strsSet = new Set(strs);
  
  //1부터 문자열길이 +1 까지 루프를 돈다.
  for(let i=1;i<t.length+1; i+=1) {
    //해당 문자열의 최소값을 무한으로 설정
    dp[i]= Infinity;
    
    //사용 가능한 단어 조각들은 문자열 형태이며, 모든 단어 조각의 길이는 1 이상 5 이하
    //문자열을 자르면서 단어조각을 찾기 위한 루프를 돌게 만든다
    for(let j = 1; j< Math.min(i+1,6); j+=1) {
      const start = i-j;
      const end = i;
      
      //단어 조각 존재시
      if(strsSet.has(t.slice(start,end))) {
        //이전 조합과 더해서 최소값인지 체크 후 대입한다.
        dp[i] = Math.min(dp[i], dp[i-j]+1);
        
      }
    }
  }
  
  return dp[dp.length-1] === Infinity ? -1: dp[dp.length-1];
}

solution(strs2,t2);