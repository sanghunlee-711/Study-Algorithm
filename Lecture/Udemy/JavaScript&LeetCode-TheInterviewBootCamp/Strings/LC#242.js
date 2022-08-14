/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
hash를 사용해서 s를 먼저 카운팅하며 문자별로 카운팅해서 기록하고
t를 루핑하면서 카운트를 다 줄여줌
T.C : O(N)
S.C : O(1) 입력이 소문자 알파벳이 전부라고 하여 26개가 최대임 그래서 상수시간.
*/
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  const hash = {};
  for(let i = 0; i < s.length; i++) {
      const sChar = s[i];
      
      hash[sChar] = hash[sChar] + 1 || 1;
  }
  
  for(let i = 0; i < t.length; i++) {
      const tChar = t[i];
      if(!hash[tChar]) return false;
      hash[tChar]--;
  }
  
  return true;
}

/*
개념은 같음
map을 쓰니 확실 히 런타임이 줄어드네 ..
*/
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  const map = new Map();
  for(let i = 0; i < s.length; i++) {
      const sChar = s[i];
      map.has(sChar) ? map.set(sChar, map.get(sChar)+1) : map.set(sChar, 1)
  }
  
  for(let i = 0; i < t.length; i++) {
      const tChar = t[i];
      if(!map.has(tChar) || !map.get(tChar)) return false;
      map.set(tChar, map.get(tChar) - 1)
  }
  
  return true;
};