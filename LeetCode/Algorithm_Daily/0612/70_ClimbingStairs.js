/**
 * @param {number} n
 * @return {number}
 */
/*
간단한 점화식 되겠다.
2 = 1+1
3 = 2 + 1
4 = 3 + 1
dp[n+2] = dp[n] + dp[n+1]
*/
var climbStairs = function(n) {
  const dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;
  for(let i = 3; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2];
  };
  
  return dp[n];
};