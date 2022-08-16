//빈도 카운터로 아나그램 찾기를 풀어보자
// 두개의 문자가 각 같은 알파벳의 같은 회수를 가지고 있는지 확인하는 것임
// 정확한 횟수 및 같은 값이 핵심
// 목표는 빈도 카운터 패턴에 익숙해지는것이므로 그거로 풀어보자

//Challenge
function validAnagram(str1, str2){
  const freqStr1 = {};
  const freqStr2 = {};
  for(const str of str1) {
      freqStr1[str] = (freqStr1[str] || 0) + 1;
  }
  for(const str of str2) {
      freqStr2[str] = (freqStr2[str] || 0) + 1;
  }
  
  for(let key in freqStr1) {
      if(!(key in freqStr2)) return false;
      if(freqStr1[key] !== freqStr2[key]) return false;
  }
  return true
}

//Answer
//객체하나로도 +-로 카운팅을 하여 해결할 수 있음 ㅎㅅㅎ
function validAnagram_ans (first, second) {
  if(first.length !== second.length) return false;
  const lookup ={};

  for(let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup = 1; 
  };

  for(let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or it's size is zero then it's not an anagram
    if(!lookup[letter]){
      return false;
    } else{
      lookup[letter] -= 1;
    }
  }
  return true;
}