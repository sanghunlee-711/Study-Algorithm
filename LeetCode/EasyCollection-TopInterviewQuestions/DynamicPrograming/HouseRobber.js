//ref : https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

//First Trial
// 이전문제 처럼 Math.max를 통해 매 회문마다 현재 가진 값을 매 회문마다 확인해주고 
// 추가로 조건만 넣으면 될 것 같음
// 못품
var rob = function(nums) {
  let subSum = nums[0];
  let maxSum = nums[0];
  let robbedIdx = 0;
  for(let i = 1; i < nums.length; i++){
    if(robbedIdx + 1 < i) {
      subSum = Math.max(nums[i], subSum + nums[i]); //subSum의 조건만 바꾸면 될 것 같은데
      robbedIdx = i;
    }else{
      subSum = Math.max(nums[i], subSum); 
    }

      maxSum = Math.max(maxSum, subSum);
  }
  return maxSum;
};

//Finding Solution
// 이해안가는 dp코드
const rob = (nums) =>{
  let[robn1, robn2] = [0,0];

  nums.forEach(num => {
    let temp = Math.max(num+robn2, robn1);
    robn2 = robn1;
    robn1= temp;
  });

  return robn1;
}

//Finding Solution 2
//각 집마다 털거나 스킵하거나를 고를 수 있음
// 털면 다음집 못텀
// 안털면 다음집 털 수 있음
//dp[i]는 i인덱스 집에서 경보음 울리지 않고 털 수 있는 최대 돈의 양임
// dp[i] = max(dp[i-2] + nums[i], dp[i-1]); 이 됨 (점화식 어케 짜냐 도대체)

const rob = (nums) => {
  if(!nums || !nums.length) { //엣지 케이스
    return 0;
  }

  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for(let i = 2; i < nums.length; i ++) {
    dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1]);
  }
  return dp[nums.length - 1]; //dp 배열 마지막 값.
}


//Best Solution
var rob  = function(nums) {
  if(!nums.length) return 0;
  let res = [0, nums[0]];

  for(let i = 1; i < nums.length; i++) {
    let curr = nums[i]; //현재값
    let max = Math.max((curr+res[i-1]), res[i]); // 사실상 같은 점화식
    res.push(max); //사실상 dp와 같은 배열
  }
  return res[nums.length]; //마지막 값.
}
//결론은 점화식..
//문제점 : 점화식을 짜보고 싶으면 그냥 인덱스 하나씩 늘려가면서 조건을 맞춰 나가보자
// 이렇게 안하면 시도도 안해보네 ;-;..
