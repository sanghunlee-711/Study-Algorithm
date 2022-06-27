/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//시간 초과 떠서 통과 안됨
 var checkInclusion = function(s1, s2) {
  let hash = {};
  let answer = false;
  //hash에 카운팅하며 기록 (중복이 허용되므로)
  s1.split("").forEach((el)=> hash[el] =(hash[el]+1 || 1) );
  
  const isContinuous = (idx) => {
      let originHash = {...hash};
      for(let i = 0; i < s1.length; i++) {
          let s2Arr = s2.split("");
      
          if(hash[s2Arr[idx+i]] === undefined){
              hash = originHash;
              return false;
          }else if(hash[s2Arr[idx+i]] >= 1){
              hash[s2Arr[idx+i]]--;
          }else if(hash[s2Arr[idx+i]] <= 0){
              hash = originHash;
              return false;
          }
      }
      
      return true;
  }
  
  s2.split("").forEach((el, idx, originArr)=> {
      if(isContinuous(idx)){
          answer = true;
          return;
      }
  });
  
  return Object.values(hash).every(el => el >= 1)  ? false : answer;
  
};

//Sliding Window를 생각하면 한 큐에 돌릴 수 있게 됨..
// 개멍청 BF를 쓰면서 시간 초과가 뜬 것
//  s1 = "ab", s2 = "eidbaooo"
/*
Sliding Window

*/

var checkInclusion = function(s1, s2) {
  //edge case
  if (s1.length > s2.length) return false;

  const hash = {};
  
  //hash에 기록
  s1.split("").forEach((el) => hash[el] = (hash[el] || 0)+1);
  
  let left = 0, right = 0, count = s1.length;
  
  // 오른쪽  포인터가 배열끝에 도달할때까지 진행
  while(right < s2.length) {
      if(hash[s2[right]] > 0) count --;
      //해당 글자 카운트를 줄이고 오른쪽으로 윈도우 확장
      hash[s2[right]]--;
      right++;
      
      //만약 다 카운팅 된 거라면 true반환
      if(count === 0) return true;
      
      //윈도우크기가 카운트 해야할 s1과 동일 해졌다면 왼쪽에서 윈도우를 줄여야함
      if(right - left === s1.length){
          if(hash[s2[left]] >= 0) count++;
          //윈도우에서 해당 요소를 빼고 있으므로 줄였던 카운트를 늘려줘야함
          hash[s2[left]]++;
          left++;
      }
  }
  
  return false;
};