//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

//First Trail
//내림차순으로 정렬을 한다음
// 뒤에서부터 회문을 돌건데
// 값보다 작은 경우 계속 해당 인덱스의 값을 더해주고 진행하려함
//[5,4,1] taget 8인경우 해당 답은 4[5,1,1,1]를 내놓게 되는데 실제 필요답은 2[4,4]가 됨
//이래서 결국 memoizing이 필요한것임..

var coinChange = function(coins, amount) {
  coins = coins.sort((a,b)=>b-a);

  let sum = 0;
  let count = 0;
  coins.forEach((val, idx, originArr)=> {
      //현재값 합한게 타겟보다 작은경우
      if(sum < amount){
          while(sum <= amount){
              sum += val;
              count +=1;
          }
          sum -=val;
          count -=1;
        }else{
          return;
        }
  })
  return sum === amount ? count : -1;
};

//Finding solution
const coinChange = (coins,amount) => {
  //각 dp의 테이블마다 답을 기재할 것임 -> 결국 여기서 가dp[amount]에 해당하는게 답이 될 것
  const dp = Array(amount+1).fill(Infinity);
  //Base Case
  dp[0] = 0;

  //i는  합을했을때 amount가 되기위한 모든 원소가 들어가있는거임
  // 8: [5,4,1]
  for(let i = 1; i < dp.length; i++) {
    for(let coin of coins) {
      //여기서 true는 현재 coin이 amount의 부분집합을 될 수 있는 것임

      //[7 - 5] => dp[7] = Math.min(dp[7], dp[5]+1);
      //[7 - 2] => dp[7] = Math.min(dp[7], dp[2]+1); ..이런식으로 업데이트가 지속됨
      //여기서 amount값이 기재되었다는 것은 해당 테이블에 메모된 
      if(i - coin >= 0) dp[i] = Math.min(dp[i], dp[i-coin]+1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Memoization
//Top down방식임
//경우의수 트리를 그려보면 편함
var coinChange = function(coins, amount) {
  //메모이징을 위해 Map구조 사용
  const memo = new Map();
  
  function permute(left) {
    //left인자의 값이 존재하면  left인자에 저장해놓은 값을 반환
      if(memo.has(left)) return memo.get(left)
      //0이면 해당 값 찾은것이므로 끝
      if(left === 0) return 0;
      let min = Infinity;
      //남은 계산해야할 코인값이 0이상인 경우만 계산을 위한 조건
      for(let coin of coins) {
          if(left-coin >= 0) min = Math.min(min, permute(left-coin));
      }
      //현재까지의 경우의 수중 가장 작은 것을 Memoizing해주는 것임
      memo.set(left, min+1);
      return min + 1;
  }
  const result = permute(amount);
  return result === Infinity ? -1 : result;
};

///Final Answer
//help: https://www.youtube.com/watch?v=H9bfqozjoqs&t=12s
//DFS나 Backtracking방식을 통해서 이해해보려하면 편함
//처음에 greedy로 하다가 걍 다털려서 안되서 찾아보려함(반복문 돌리면서 크거나 작거나를 판단하면서 카운트하려하였으나 min값을 찾기가 안됨)
//7을 만족하기 위해서 들어가는 코인의 개수를 트리를 그리면서 경우의수를 파악해보면 top-down방식이 이해가감(dfs, backtracking)
//그걸 반대로 생각하면(Bottom-up) dp[f] = 1(사용할 코인의 개수)+ dp[f-c] (c는 코인의 값) f는 결국 우리의 타겟(amount)값임.
var coinChange = function(coins, amount) {
  const dp = Array(amount+1).fill(Infinity);
  dp[0] = 0; //얘는 시작점
  
  for(let i = 1; i < dp.length; i++) {
      for(let coin of coins)  {
          if(i - coin >= 0) dp[i] = Math.min(dp[i], 1+dp[i-coin]);
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};