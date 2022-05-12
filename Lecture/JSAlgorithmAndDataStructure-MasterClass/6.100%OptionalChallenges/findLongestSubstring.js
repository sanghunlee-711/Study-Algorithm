function findLongestSubstring(str){
  let start = 0;
  let longestVal = 0;
  let hash = {};
  
  for(let i = 0; i < str.length; i ++) {
      let char = str[i];
      //현재 문자가 기록되어 있으면 start를 업데이트
      if(hash[char]) {
          start = Math.max(start, hash[char])
      }
      
      //더 큰값을 비교하여 업데이트
      longestVal = Math.max(longestVal, i - start + 1);
      //start업데이트를 위해 해시에 인덱스를 저장해놓기
      //(다음 문자의 인덱스를 저장, 현재것이 두번 카운트 되지 않도록)
      hash[char] = i+1;
  }
return longestVal;
}
