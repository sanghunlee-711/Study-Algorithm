/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * A:amount, C: coins
 * T.C : O(A*C) 
 * S.C: O(A) -> DP Array
 */
/*
dp문제들과 동일한 방식으로 진행한다면 amount를 1부터 amount까지 만족하는 값들을 기재할 dp배열을 하나 만들어서 (이게 핵심인듯)


*/
var coinChange = function(coins, amount) {
  let dpMinCoin = new Array(amount+1).fill(Infinity);
  dpMinCoin[0] = 0;

  for(let i = 1; i <dpMinCoin.length; i++) {
    for(let j = 0; j<coins.length; j++) {
      const coinValue = coins[j];
      if(coinValue <= i) {
        dpMinCoin[i] = Math.min(dpMinCoin[i - coinValue]+ 1, dpMinCoin[i]);
      }
    }
  }

  const answer = dpMinCoin[dpMinCoin.length - 1];
  return answer === Infinity ? -1 : answer;
};