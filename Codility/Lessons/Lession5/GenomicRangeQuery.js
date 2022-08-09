// Score: 62
// O(N * M)

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*
A: 1,
C: 2,
G: 3,
T: 4,
1. 들어오는 S를 위 숫자로 치환하자
2. S를 기반으로 P, Q길이만큼 회문을 돌리면 되는데..
    P,Q의 길이는 동일하게 들어오는가 ? -> 뭐 적혀있는게 없네
3. 2를 기반으로 각 인덱스별 값에서 작은 숫자만 배열에 넣어주면 됨

//bf는 이렇게하면 될 것 같은데 .. 효율은 어케잡지
*/
function solution(S, P, Q) {
  const arr = [];
  const hash = {
      A: 1,
      C: 2,
      G: 3,
      T: 4,
  }
  
  for(let i = 0; i < P.length; i++) {
      const x = P[i];
      const y = Q[i];
      
      const sub = S.slice(x,y+1);
      
      let minVal = hash[sub[0]];
      sub.split("").forEach((el)=> {
          minVal = Math.min(hash[el], minVal);
      })
      minVal && arr.push(minVal);
  }
  return arr;
}


// Prefix를 사용한 버전
function solution(S, P, Q) {
  const hash = {A: 1, C: 2, G: 3, T: 4};
  const counterHash = {A:0, C: 0, G: 0, T:0};
  const counters =[];
  const minImpacts = [];

  //Count S 
  for(let i = 0; i < S.length + 1; i++) {
      counters.push({A:counterHash.A, C: counterHash.C, G: counterHash.G});
      counterHash[S[i]]++;
  }
  
  //for every p and q
  for(let i = 0; i < P.length; i++) {
      const x = P[i], y = Q[i] + 1;

      if(counters[y].A - counters[x].A > 0) minImpacts.push(hash.A);
      else if(counters[y].C - counters[x].C > 0) minImpacts.push(hash.C);
      else if(counters[y].G - counters[x].G > 0) minImpacts.push(hash.G);
      //T
      else minImpacts.push(hash.T);
  }
  return minImpacts;
}

