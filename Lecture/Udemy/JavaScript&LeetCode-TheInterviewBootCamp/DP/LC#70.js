/*
  * 점화식 방식으로 푸는 것 과 동일함

*/

const climbStairs = (n) => {
  const dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;
  for(let i = 3; i <= n; i++) {
    dp[n] = dp[n-1] + dp[n-2];
  }
  
  return dp.pop(); //마지막 값을 빼와야하므로
}

/*
  * 점화식 방식으로 푸는 것 과 동일함

*/

const climbStairs = (n) => {
  if(n<=3) return n;
  let ways = [0,1,2,3];

  for(let i = 4; i <= n; i++) {
    ways.push(wys[i-1] + ways[i-2]);
  }

  return ways.pop();
}

