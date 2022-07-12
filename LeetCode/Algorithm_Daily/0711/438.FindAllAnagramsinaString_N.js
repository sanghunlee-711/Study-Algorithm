/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/*
1.s에서 하나 자블때마다 p의 길이만큼의 윈도우를 만들고 anagram인지 확인을 해줘야함
2. 아나그램인 경우 -> answer답변에 s인덱스를 넣어줌
    아나그램이 아닌경우 -> s에서 잡은인덱스를 한칸 늘려주고 end인덱스도 늘려줌
    길이 끝까지 회문
3.nO(N)
*/

//First Trial => Time limit exceed;
const isAnagram = (str, subStr) => {
  const changeS = str.split("").sort().toString();
  const changeT = subStr.split("").sort().toString();
  return changeS === changeT;
}

var findAnagrams = function(s, p) {
    
    let answer = [];
    
    for(let i = 0; i < s.length-p.length+1; i++){
        const str = s.slice(i, i+p.length);
        
        if(isAnagram(str, p)){
            answer.push(i);
        }
    }
    return answer;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/*
1. 슬라이딩 윈도우 돌리기 전에 p에 대한 값을 카운팅 해놓고
2. 범위 내에서 right를 계속 늘려가면서 
    문자열이 있으면 해당 문자에 대한 카운트를 줄이고
    문자열 카운트가 0 이면 문자열에 대한 카운트를 줄이고
    
    start를 변경하며 윈도우를 조정할 때 strCount를 다시 올려주면서 
    map에 존재하는 문자열에 대해서는 카운트를 올려줌
    
3. 답 반환
*/
var findAnagrams = function(s, p) {
  let start = 0, end = 0;
  let map = new Map();

  for(let subStr of p) map.set(subStr,map.get(subStr)+1 || 1);
  let strCount = map.size, answer = [];
  
  while(end < s.length) {
      const endStr = s[end];
      if(map.has(endStr)) map.set(endStr,map.get(endStr)-1);
      if(map.get(endStr) === 0) strCount--;
      
      while(strCount === 0) {
          const startStr = s[start];
          if(end - start + 1 === p.length) answer.push(start);
          if(map.has(startStr)) map.set(startStr, map.get(startStr)+1);
          if(map.get(startStr) > 0) strCount++;
          start++;
      }
      end++;
  }
  
  return answer;
};