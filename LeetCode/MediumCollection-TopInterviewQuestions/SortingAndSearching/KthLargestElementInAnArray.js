//ref 
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:
// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104

//First Trial
//이게 왜 미드레벨인지 이해가 안감 ;
var findKthLargest = function(nums, k) {
  const sortedArr = [...nums].sort((a,b)=>(b-a));
  return sortedArr[k-1];
};

//다른 답변들도 index대신 splice로 리턴값 내는 것 이외에는 특별한 것이 없어서 생략.