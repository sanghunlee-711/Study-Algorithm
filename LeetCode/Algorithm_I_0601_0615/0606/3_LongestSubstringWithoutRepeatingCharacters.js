
/**
 * @param {string} s
 * @return {number}
 */
/*
sliding window 각
두개의 포인터로 윈도우를 만들면 됨
1. 첫째는 0 으로 시작
2. 둘째는 1로 시작해서
만약 start와 end가 다르면 end를 늘려주고
같으면 start를 다시 end로 업데이트 하고 end는 start + 1로 만듦 
문자열 중 하나라도 반복되면 안되기 때문에 슬라이딩윈도우는 힘드네 ;;
결국 해쉬맵에 저장을 해야함
*/
var lengthOfLongestSubstring = function(s) {
  const hash = {};
  let maxLen = 0;
  let start = 0;
  
  for(let i = 0; i < s.length; i++) {
      if(hash[s[i]] >= start) {
          start = hash[s[i]] + 1;
      }
      hash[s[i]] = i;
      
      maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen
};


//Best Answer
/*
set 자료구조 사용 + while문 사용
*/ 
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  let max = 0;
  let left = 0;
  let visited = new Set();
  for (let right = 0; right < s.length; right++) {
      while (visited.has(s[right])) {
          visited.delete(s[left]);
          left++;
      }
      visited.add(s[right]);
      max = Math.max(right - left + 1, max);
  }
  return max;
};