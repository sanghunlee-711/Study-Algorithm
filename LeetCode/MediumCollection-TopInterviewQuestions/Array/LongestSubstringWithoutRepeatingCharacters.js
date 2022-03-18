//First trial
//중복 안되게 Substring을 때렸을 때 가장 긴 길이를 리턴하면 된다.
//중복안되게 -> hash, set
//어케 활용해볼까
//하나의 회문을 돌면서 -> 해당값이 hash에 존재하는 순간 멈추고 그전까지의 길이를 업뎃해준다.
// 이중반복문은 시간초과뜸
var lengthOfLongestSubstring = function(s) {
  if(s.length <= 0) return 0;
  
  const hash = {};
  let maxlen = 0;
  let answerArr = [];
  
  
  for(let i = 0; i < s.length; i++) {
      const str = s[i];
      if(hash[str]) { 
          maxlen = 1; //중복부터 길이를 1로 잡아줌
      }else{
          //없는경우 hash를 업데이트해줌
          hash[str] = hash[str] || 1;
          //길이를 추가 해줌
          maxlen ++;            
      }
      //최고길이들을 배열에 넣어줌
      answerArr.push(maxlen);
  }
  //걔중 최고값 구함
  return Math.max(...answerArr);
};

//FindingSolution
//처음 아이디어접근까지는 굉장히 좋았던 것 같음
// 다만 내부에서 로직 구현이 머리로도 정리가 안되었던듯..
// 어케 상세하게 정할 수 있을까 싶다.
var lengthOfLongestSubstring = function(s) {
  const hash = {};
  let maxlen = 0;
  let startIdx = 0;
  
  for (let i = 0; i < s.length; i++){
    const str = s[i]; //현재 하나의 문자
    //hash에 해당키가 현재의 시작 인덱스보다 크거나 같다면(이부분을 내가 처리를 못했네 ..)
    //시작 인덱스(startIdx)를 현재의 hash[str]이 가지고 있는 값 + 1로 만들어 준다.
    hash[str] >= startIdx && (startIdx = hash[str]+1);
    //시작인덱스를 업데이트했으므로 hash[str]의 값은 현재 인덱스로 업데이트
    hash[str] = i;
    //가장 긴 길이는 현재 가지고 있는 최고값과 현재인덱스 - 시작인덱스 + 1중(길이임) 큰것임
    maxlen = Math.max(maxlen, i - startIdx + 1);
  }
  return maxlen;
};

//Best Answer
//map 자료형을 사용한 것 말고는 모두 동일하게 진행됨.
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let maxlen = 0;
  let map = new Map();

  for(let i = 0; i < s.length; i ++) {
    let char = s[i];
    if(map.get(char) >= start) start = map.get(char) + 1;
    map.set(char, i);
  
    maxlen = Math.max(maxlen, i - start + 1);
  }
}