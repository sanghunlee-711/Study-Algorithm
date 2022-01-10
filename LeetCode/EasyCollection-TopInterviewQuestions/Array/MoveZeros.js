//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?


//1. FristTrial
//이렇게 그냥 돌리면서 삭제하고 끝낼려고 했으나
// [0,0,1]의 경우는 해당 로직으로 커버가 안됨
// [0,1,0]이 나오게 됨
var moveZeroes = function(nums) {
  for(let i =0; i < nums.length ; i +=1){
    if(nums[i] === 0){
        nums.splice(i,1);
        nums.push(0);
    }
  }
 return nums.filter((el)=> el !== false)   
};

//2. SecondTrial
// 뒤에서 스택처럼 pop 삭제 이런식으로 하면 위의 일처럼  인덱스를 놓칠일이 없어짐
// 보는 족족 삭제한 뒤 다시 넣기때문

var moveZeroes = function(nums) {
  for(let i = nums.length; i >= 0 ; i -=1){
    if(nums[i] === 0){
        nums.splice(i,1);
        nums.push(0);
    }
  }
 return nums.filter((el)=> el !== false)   
};

//Best Answer

var moveZeroes = function(nums) {
  let len = nums.length, start=0;
  
  for(let i=0; i<len; i++) {
      if (nums[i] != 0) nums[start++] = nums[i];
  }
  
  for(;start<len;start++)  nums[start] = 0;
  
  return nums;
  
};