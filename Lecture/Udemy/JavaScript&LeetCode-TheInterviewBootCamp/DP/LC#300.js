/*
  dp배열을 처음에 1로 두고 배열길이와 동일하게 만듦 -> 얘는 해당 인덱스까지의 가장 긴 increasingly subsequence를 기재해놓을 것임.
  또 j를 하나 앞에두고 i를 j까지 돌리면서 비교해볼건데
  이때 subsequence (다음숫자가 전숫자보다 크면) dp[j]에 해당하는것을 업데이트 해줄 것임
  그런데 업데이트할때 j를 포함한 갯수 (그러니까 dp[i] + 1) 이랑 dp[j] 에 해당하는 값중 더큰것으로 업데이트해주면 됨
  그리고 maxSoFar이라는 변수를 하나 만들어서 dp[j]와 업데이트된 값중 큰것으로 계속  업데이트 해줄 것임
 */
//198번 문제와 비슷한 풀이법임 -> dp를 이렇게 푸는건감.
/**
 * @param {number[]} nums
 * @return {number}
 * T.C: O(N**2) 
 * S.C: O(N) dp배열 만들어서 그럼
 */
var lengthOfLIS = function(nums) {
  if(!nums.length) return 0;
  let dp = new Array(nums.length).fill(1);
  let max = 1;
  
  for(let j = 1; j < nums.length; j++) {
      for(let i = 0; i < j; i++) {
          //if sequence
          if(nums[j] > nums[i]) {
              dp[j] = Math.max(dp[i]+1, dp[j]);
          } 
      }
      max = Math.max(dp[j], max);
  }
  return max;
};