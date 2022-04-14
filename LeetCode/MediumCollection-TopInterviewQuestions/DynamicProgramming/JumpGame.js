//ref:https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807/


// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// First Trial

//조건
//nums[1]의 값이 첫 시작 인덱스임
// nums[nums[1]]의 값만큼 인덱스를 플러스해줌
//nums[1]+nums[nums[1]] 이 길이 - 1과 같아지면 true아니면 false임
// maximum call exceed가 떠버림 ;-; ..

const helper = (index, nums, answer) =>{
  let lastIdx = nums.length - 1;
  //termination condition
  if(index > lastIdx || index === lastIdx + 1) {
      answer = false;
      return;
  }
  
  //termination condition
  if(index === lastIdx) {
      answer = true;
      return;
  }
  let nextIdx = index + nums[index]; //nums[index]값만큼 점프함
  
  helper(nextIdx, nums, answer);
}

var canJump = function(nums) {
  // let initialIdx = 1;
  // let initialVal = nums[initialIdx]; //3
  // let secondIdx = initialIdx + nums[initialIdx];
  // let secondVal = nums[secondIdx]; //
  // let thirdIdx = secondIdx + nums[secondIdx];
  // let thirdVal = nums[thirdIdx];
  // ///...
  let answer = false;
  let idx = 1;
  
  return helper(idx, nums, answer);
  // return answer;
}; 

//Finding solution
//일단 풀었던 시도에서는 종결조건이 많이 부족했음

//1. DFS + DP
const dfs = (nums, n) => {
  if (n == nums.length) {
      return false;
  }
  if (n == nums.length-1) {
      return true;
  }
  if (nums[n] < 0) {
      return Math.abs(nums[n]) == -1;
  }

  let canJump = false;
  if (n+ nums[n] >= nums.length-1 ) {
       canJump = true;
  } else {
      for(let i=0;i<nums[n];i++) {
          canJump = canJump || dfs(nums, n+i+1)
      }
  }
  nums[n] = canJump? -1: -2;
  
  
  return canJump;
}
var canJump = function(nums) {
  return dfs(nums, 0);
};

// O(n) Greedy
var canJump = function(nums) {
  let maxReach = 0;
  for(let i=0;i<nums.length;i++) {
      if (i > maxReach) {
          return false;
      }
      if (i+nums[i] > maxReach) {
          maxReach = i+nums[i];
      }
      if (maxReach >= nums.length-1) {
          return true;
      }
      
  }
  return false;
};

//Best Answer
//다른 종결조건을 가져서 false인 경우를 필터링 해줌
var canJump = function(nums) {
  let maxLength = 0;
          for (let i = 0; i < nums.length - 1; i++)
          {
              if (nums[i] == 0 && maxLength == 0) return false;
              if (nums[i] >= maxLength) maxLength = nums[i];

              maxLength--;
          }
      return true;
};