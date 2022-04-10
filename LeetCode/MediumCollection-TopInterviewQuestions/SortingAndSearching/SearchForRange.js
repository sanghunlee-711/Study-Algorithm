//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/802/

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

//First Trail
//이진탐색으로 값 찾아서 배열에 넣고 엣지케이스만 처리해주면 될 것 같음.

//런타임 에러??
var searchRange = function(nums, target) {
  let answer = [-1,-1];
  
  let start = 0;
  let end = nums.length-1;

  while(start <= end){
    let mid = Math.floor((start+end)/2);
    if(target === nums[mid]){
      answer[0] = mid;
      //왼쪽의 answer인자 채울거니까 뒤를 당겨야함
      end = mid - 1;
    }else if(nums[mid]  > target) {
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }
  start = 0 ;
  end = nums.length - 1;


  while(start <= end){
    let mid = Math.floor((start+end)/2);
    if(target === nums[mid]){
      answer[1] = mid;
      //왼쪽의 answer인자 채울거니까 뒤를 당겨야함
      start = mid + 1;
    }else if(nums[mid]  > target) {
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }

  return answer;
};


//Best Answer
//분리도 잘 되어 있고 답   찾기도 쉽게 만들어놓음
var searchRange = function (nums, target) {
  let start = searchStart(nums, target, 0, nums.length - 1);
  let end = searchEnd(nums, target, 0, nums.length - 1);
  if (start <= end) {
    return [start, end];
  }
  return [-1, -1];
};

function searchEnd(nums, target, l, r) {
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return r;
}

function searchStart(nums, target, l, r) {
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) { //등호 유무로 찾는걸 다르게 만듦.
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
}