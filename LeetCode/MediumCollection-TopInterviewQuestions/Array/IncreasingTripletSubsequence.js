//ref:https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
// Example 1:
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.

// Example 3:
// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:
// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

//First Trial
// sketch 
// 요구사항은 순차적 증가하는 것들이 있는지에 대한 판단임
// 그리고 연속된것이 아니어도 됨
// 정렬?.. -> 할필요가 굳이 없어보임 (연속으로 판단할거였으면 해도 됬음)
// 순회돌면서 1을 저장하고 1보다 크면 2를 저장 2보다 크면 3을 저장하면 있는게 되는거잖여

// 걍 메모리에 1,2를 저장하고 3과 비교한다면
// 오 맞음 ..;
var increasingTriplet = function(nums) {
  let first = Infinity;
  let second = Infinity;

  for(let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if(num > first && num > second) return true; //현재값이 두번째 보다 크고 두번째가 첫번째 보다 크면 조건 만족
      if(num > first) second = num; //첫번째 보다 크면 두번째로 저장해줌
      else first = num; //저거 다 아닌경우 첫번째로 저장해줌.
  }
  return false;
};

//Best Answer;
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false; //엣지케이스 처리
  //최소값을 제일 첫번째 값으로 설정
  var min = nums[0];
  // 얘가 second와 같은 역할
  var mid = Infinity;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= min) { //첫번째 보다 작은값이 나타나면 일단 min으로 설정해줌
      min = nums[i];
    } else if (nums[i] <= mid) {//미드보다 작은 값이 나타나면 mid로 설정해줌
      mid = nums[i];
    } else {
      //nums[i]가 첫번째(min)보다 크고 두번째(mid)보다 큰 값인경우 true로 보내줌
      return true;
    }
  }
  //회문에서 트루로 못나오면 false로 보냄
  return false;
};

