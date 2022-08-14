/**
 * @param {string} s
 * @return {string}
 */
/*
pseudo
1. 미러링을 하자
2. 중간점부터 좌우를 늘리면 됨 ABBA(B사이가 중간) ABA (B가 중간)
    좌우를 늘리면서 범위를 벗어나거나 다른 경우가 있으면 회문을 멈추면 됨.
    
3. 전체 문자의 인덱스를 다 돌아보면 됨.
4. 찾은 최대 길이와 시작점을 통해 s를 잘라서 반환하면 됨.
*/
var longestPalindrome = function(s) {
  let startIdx = 0, maxLen = 1;
  
  const helper = (left, right) => {
      while(left >= 0 && right < s.length && s[left] === s[right]) {
          const currentPalindromeLen = right - left + 1;
          if(maxLen < currentPalindromeLen) {
              maxLen = currentPalindromeLen;
              startIdx = left;
          }
          left -= 1;
          right += 1;
      }
  }
  
  for(let i = 0; i < s.length; i++) {
      helper(i-1, i+1); //홀수인 경우를 위함
      helper(i, i+1); //짝수인 경우
  }
  return s.slice(startIdx, startIdx + maxLen);
};