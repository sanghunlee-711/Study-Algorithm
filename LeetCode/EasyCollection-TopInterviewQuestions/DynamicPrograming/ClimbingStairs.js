//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

//first trial
//1 or 2 를 조합해서 n이 만들어지는 경우의 수를 구하라 이거군
  //중복 허용
  // nth 스텝을 밟기 이전(n-1)th에 스텝은 nth stpe의 -1 또는 -2 의 값을 가진 게 됨
  // 계속 줄여간다고 가정하에 마지막 값이 1이나 2면 해당하는 경우의 수가 되잖여
  // 그럼 반복을 생각해봤을때 ..
  // 44에서 시간초과가 뜨네 허허허헣
var climbStairs = function(n) {  
  let result = 0;
  let target = n;
  const helper = (n) =>{
    //종결
    if(n <= 0) return;
    if(n === 1 || n === 2){
        result += 1;
    }
    
    helper(n-1);
    helper(n-2);
}
  helper(target);
  return result;
};

//finding solution
// dp는 무슨 배열을 겁나 써재끼네
// dp[i] represents the total number of different ways to take i steps
// dp[i]는 i스텝을 밟을 다른 방법들의 전체 수를 나타냄
// 그래서 dp[i]를 구하면 됨
// 먼저 변수를 만들어 놓을 거임
// dp[1]은 1스텝까지 가는 경우의 수임 => 1 임
// dp[2]는 2스텝까지 가는 경우의 수임 1+1 & 2 이렇게임
// dp[3]을 생각해보면 3스텝까지는 112 211 121  3개가 됨 이건 dp[1]+dp[2]가 됨

//피보나치 처럼 풀어버리네
const solution = (n) =>{
  const dp = new Array(n+1); dp[1] = 1; dp[2] = 2;
  for(let i = 3; i <= n; i +=1) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n]
}

//finding solution2
//나처럼 재귀로 푸는 방법임
// 더하는게 핵심이구나 ..
const solution = (n, memo = new Array()) => {
  if(n === 1) return 1;
  if(n === 2) return 2;
  if(memo[n]) return memo[n];

  let result = solution(n-1, memo) + solution(n-2, memo);
  memo[n] = result;
  return result
}

// Best solution
//인덱스 별 가능한 경우의 수 arr 에 미리 넣어놓고
// arr길이가 n이 될 때 까지 n-1 + n-2 더한 값을 계속 넣어줌
//while과 push를 기가막히게 씀..
var climbStairs = function(n) {
  let arr=[0,1,2];
  while(arr.length-1<n){
      arr.push(arr[arr.length-1]+arr[arr.length-2]);
  }
  return arr[n];
};


//문제점: 점화식을 잘 짜야한다.
// 논리 짜고 재귀로 돌려봐도 얼추 안맞으면 점화식이 무조건 존재할 것임
