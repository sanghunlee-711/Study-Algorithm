/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
pseudo
두개의 개수가 같아야함
순서도 같아야함
1. s를 해쉬맵에 카운팅하며 넣음
2. t를 돌리면서 해쉬에 카운팅한 갯수를 제거해줌 + 인덱스도 봐줘야함??
    
*/
var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false;
     
  const hash = {};
  
  for(let i = 0; i < s.length; i++) {
      //없으면 맵핑을 해줌
      if(!hash[s[i]]) hash[s[i]] = t[i];
      //이미 맵핑 되어있고 값이 기존과 다르다면 매칭이 안되므로 false
      if(hash[s[i]] && hash[s[i]] !== t[i]) return false;
  }
  //abc aaa
  //1 === 3 => false
  //중복 제거한 후 현재 해쉬가 가진 값과 실제 해쉬가 가진 값들의 개수 비교
  return new Set([...Object.values(hash)]).size === Object.values(hash).length
};

//Optimized Answer
/*
아이디어는 동일하나 Map자료형을 유연하게 사용하므로서 가독성 높임
*/ 
var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false;
     
  const map = new Map();
  
  for(let i = 0; i < s.length; i++) {
      if(!map.has(s[i])) map.set(s[i], t[i]);
      if(map.get(s[i]) !== t[i]) return false;
  }
  
  return new Set([...map.values()]).size == map.size
};

//Best Answer
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
그냥 해쉬맵 두개 만들어서 한번에 매칭안되면 false박아버림 ㅋ
성능도 좋은게 함정이다.
*/ 
 var isIsomorphic = function(s, t) {
  let hashS= {}, hashT={}
  for(let i=0; i < s.length; i++){
    let charS = s[i]
    let charT = t[i]
  
    if(!hashT[charT]){
          hashT[charT] = charS
      }
      if(!hashS[charS]){
          hashS[charS] = charT
      }
      if( hashS[charS] !== charT || hashT[charT]!==charS){
          return false
    }
  }
return true
};
