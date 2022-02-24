//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//First Trial
// 제일 쉬운 방법은 그냥 반복문 두개 돌리며 새로운 배열 만들고 그중에 최고값 뽑아내는 것 같은데 ..
//시간초과 뜸 -> 투포인터나 이런걸 써봐야하나
var maxProfit = function(prices) { // O(n2)
  let answer = 0;
  
  for(let i = 0; i < prices.length-1; i+=1) {
      for(let j = i+1; j < prices.length; j +=1) {
        const profit = prices[j]-prices[i];
          if(profit > answer) answer = profit;
      }
  }
  
  return profit > 0 ? profit : 0
};


// solution이 열려있어서 봤다
// 단순하게 그래프를 그린다 생각해보면 해결이 됨 ..
// 동일 인덱스를 사용해도 상관 없는것이 어차피 0으로 기본값을 설정해놓으면 0 보다 크지 않으면 profit을 변경하지 않기 때문임

const solution = (prices) =>{ //O(n)
  let smallest = prices[0];
  let profit = 0;

  for(let i = 0; i < prices.length; i +=1) {
    if(smallest > prices[i]) smallest = prices[i];
    if(prices[i] - smallest > profit) profit = prices[i] -smallest;
  }
  return profit;
}

//문제점: 문제를 풀면서 아이디어가 떠오르지 않으면 배열을 그림으로 또는 그래프로 나타내어보자