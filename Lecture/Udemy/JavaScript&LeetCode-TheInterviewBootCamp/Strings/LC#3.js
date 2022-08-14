/*
O(N)의 시간복잡도를 위해서는 슬라이딩 윈도우를 활용하면 됨 
슬라이딩 윈도우는 반복되지 않는 현재의 부분 문자열을 나타내주는 용도로 사용할 것임.
슬라이딩 윈도우는 사이즈를 계속 바꿔가면서 사용할 것임(사이즈 고정 x)
회문중 현재의 인덱스와 값은 슬라이딩 윈도우의 항상 마지막 값이(위치가)될 것임
그래서 인덱스가 오를수록 윈도우의 크기도 커지게 됨
조건부로 슬라이딩 윈도우의 시작 지점도 키울 것임.

pseudo
1. 해쉬맵을 사용해서 회문하며 각 문자와 인덱스를 저장할 것임
2. start, max변수를 만들어서 0으로 시작할 것임

입력된 문자열을 회문하면서 현재 문자가 hash에 존재하고 그 인덱스가 start보다 크거나 같으면
  해쉬에 해당 문자열의 인덱스를 찾은 인덱스에 + 1을 해줌
없는경우 해쉬에 현재문자의 키와 인덱스는 계속 기재
만약 윈도우의 크기가 max보다 커지면 max변수를 현재 윈도우의 크기로 업데이트 해줌.
T.C : O(N)
S.C : O(min(M,N)) 해쉬맵의 크기를 고려하면 알 수 있음 (나머지 변수는 상수임.)
  여기서 M은 해쉬맵의 크기, N은 s의 길이임.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let hash = {}, windowStart = 0, maxLen = 0;

  for(let i = 0; i < s.length; i++) {
    const endChar = s[i];
    //같은걸 찾은 경우가 됨
    if(hash[endChar] >= windowStart) {
      windowStart = hash[endChar] + 1;
    }
    hash[endChar] = i;
    maxLen = Math.max(maxLen, i - windowStart + 1);
  }

  return maxLen;
};