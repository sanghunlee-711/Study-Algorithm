/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//First Trial -> Fail

/*
1. map만들어서 s 다 false로 체크하면서 인덱스 넣어놓기
2. t회문 돌릴 때 map에 있는 값 가져오면서 checkIdx보다 크면 변경 아니면 변경 x
3. map에 true가 다 되어 있는지 확인
    size ===1 && only true
*/
var isSubsequence = function(s, t) {
  const map = new Map();
  let checkedIdx = -Infinity;
  
  if(s.length > t.length) return false;
  if(!s.length) return true;
  
  s.split("").forEach((char, idx)=> {
      map.set(char, [idx, false]);
  });
  
  t.split("").forEach((el)=> {
      const val = map.get(el);
      if(val){
          const [index, isChecked] = val;
          if(index > checkedIdx && !isChecked) {
              map.set(el, [index, true]);
              checkedIdx = index;
          };
      }; 
  });
  
  const checkArr = [...new Set([...map.values()])];
  for(let i = 0; i < checkArr.length; i++) {
      
      if(!checkArr[i][1]) return false;
  }
  return true;
};


//Second Trial
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
1.s와 t인덱스를 변수로 만듦
2. while문을 돌리면서 둘중하나가 끝까지 갈때까지 돌림
3. s와 t가 같은것을 찾으면 s와 t동시에 인덱스를 올리며 탐색하고
    그렇지 않으면 t만 올림
4. 끝날때 s의 인덱스와 길이가 같다면 부분집합이 되는 것
*/
var isSubsequence = function(s, t) {
    let sIdx = 0, tIdx = 0;
    
    while(sIdx < s.length && tIdx < t.length) {
        if(s[sIdx] === t[tIdx]) sIdx++;
        tIdx++;
    };
    
    return sIdx === s.length;
};