//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

//First Trial
// 도대체 sub array의 합을 구하는데 O(n)으로 어케 가능한지 감이 안옴
// 이전문제처럼 start, maxSum 만 바꿔줘서는 풀 수없음
// 큰 값 나오면 Math.max(a,max) 를 통해서 업데이트
// 시작 인덱스를 계속 바꿔주면서 돌리면 되려나
var maxSubArray = function(nums) {
  let subSum = nums[0];
  let maxSum = nums[0];
  
  for(let i = 1; i < nums.length; i++) {
      subSum = Math.max(nums[i]+subSum, nums[i]); //더 큰 시작점이 있으면 시작점이 변경될 것임
      maxSum = Math.max(subSum, maxSum);    // 둘 중 더큰 값이 맥스니께
  }
  return maxSum
};


// Best solution도 왜 다 똑같냐
//Finding Solution 
// Divide and Conquer를 썻다고 함
var maxSubArray = function(nums) {
	// Return the results of the recursive function
    return findMaxSumInArr(nums);
    
	// Recursive function that will divide and conquer to find the maximum sum from a subarray of the array provided as a parameter
    function findMaxSumInArr(arr){
        // BASE CASES: 
        // if there is only one arr item, then you can simply return that value
        if (arr.length === 1){
            return arr[0];
        }
		
        /* if there isn't an arr item, then return -Infinity (we need a valid number for the calculations below. 
		Since JS can only store numbers > -Infinity, -Infinity will never be the max) */
        if (arr.length === 0){
            return -Infinity;
        }
        
		// Declare zero-indexed length and midpoint
        let length = arr.length - 1;
        let mid = Math.floor( length/2 );
        
        // DIVIDE: Recursively find max sum in the left and right sub arrays
        let lMaxSumInSubArr = findMaxSumInArr( arr.slice(0, mid) );
        let rMaxSumInSubArr = findMaxSumInArr( arr.slice(mid + 1, length + 1) );
        
        /* MERGE: The divide step gave use the max sum on the left and right side, but we still need to account
		for the possibility of a contiguous array that goes from left to right through the midpoint */
		
        // Declare variables to record the maximum contiguous sums for each side
        let lMaxContiguousSum = 0,
            rMaxContiguousSum = 0;
        
        // On the left side, find sum of contiguous array and keep an updated record of the maximum
        /* (NOTE: in order to account for contiguous arrays that traverse the midpoint, start the search from
		the midpoint - 1 index and traverse leftwards towards index 0. This directionality guarantees that
		a contiguous array traversing the midpoint will be able to add the midpoint itself and the right side's
		contiguous arr [this is exactly what is checked in the final return statement below]) */
        for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--){
            currContiguousSum += arr[i];
            lMaxContiguousSum = Math.max(lMaxContiguousSum, currContiguousSum);
        }
       
        // On the left side, find sum of contiguous array and keep an updated record of the maximum
        /* (NOTE: in accordance with the last note, to account for sub arrays that traverse the midpoint, 
		start the search from the midpoint + 1 index and traverse rightwards */
        for (let i = mid + 1, currContiguousSum = 0; i <= length; i++){
            currContiguousSum += arr[i];
            rMaxContiguousSum = Math.max(rMaxContiguousSum, currContiguousSum);
        }
        
        /* RETURN the max sum from the current array: either from the left side, right side, or a contiguous
		sub arrary traversing from left to right through the midpoint */
        return Math.max(
            // The maximum sum from a contiguous subarray that traverses the midpoint
            lMaxContiguousSum + arr[mid] + rMaxContiguousSum, 
            // The max sum from each side (whether it was a single value or a contiguous sum) 
            lMaxSumInSubArr, 
            rMaxSumInSubArr  
        );
    }
}

// Extra Notes:

// For the divide step, slicing the array made the most sense to me, 
//but you could also keep the original array unaltered and simply update left and right bounds
// (this would necessitate changing code throughout the function, like the initial base cases would have to check for left === right and left > right respectively)