
// 첫번째 시도 => accepted Time complexity : O(n) -> soluton3와 유사
  // length 0 이면 return 해주는것도 넣을 필요 있긴할듯
  // 매일 사고 다음날 거보고
  // 1. 다음날 > 오늘  => 다음날 팔고(이익실현 => answer에 추가) + 또 그날 사고 ..
  // 2. 다음날 < 오늘 => 오늘 다시 팔기
var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 0; i < prices.length; i +=1){
    const now = prices[i];
    if((prices[i+1] > now) && prices[i+1]){
      profit += (prices[i+1] - now);
    }
  }
  return profit;
};

//Solution 1.
// BF를 하다니.. 이야 ;-; .. Time complexity : O(n^n)
// BF(모든 경우에 대해 가능한 값을 계산하고 최대 이율을 찾는 방법)
const calculate =(prices, s) =>{
  if(s >= prices.length) return 0; //edge케이스 처리

  let max = 0;
  for(let start = s; start < prices.length; start+=1) {
    let maxProfit = 0;

    for(let i = start+1; i< prices.length; i+=1){
      if(prices[start] < prices[i]){
        let profit = calculate(prices, i+1) + prices[i] - prices[start]; //재귀를 활용
        if(profit > maxProfit) maxProfit = profit;
      }
    }
    if(maxProfit > max) max = maxProfit;
  }
  return max
}

const maxProfit1 = (prices) => {
  return calculate(prices, 0)
}

//Solution 2.
// peekValley 접근
// BF와 같이 모든 경우의 수에 접근하게 됨

const maxProfit2 = (prices) =>{
  let i = 0;
  let valley = prices[0];
  let peak = prices[0];
  let maxProfit = 0;

  while(i < prices.length - 1){
    while(i < prices.length - 1  && prices[i] >= prices[i+1]){ //낮은 가격 찾기(valley)
      i += 1;
      valley = prices[i];
    }

    while(i < prices.length - 1 && prices[i] <= prices[i+1]){ //높은가격 찾기(peak)
      i+=1;
      peak = prices[i];
      maxProfit += peak - valley; //이율 계산
    }
  }
  return maxProfit
}