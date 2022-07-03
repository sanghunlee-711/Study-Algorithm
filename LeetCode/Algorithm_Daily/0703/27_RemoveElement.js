/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*
O(N)으로 우아하게 풀어보려했는데 테스트케이스에서 털림
걍 막풀어야지
*/
var removeElement = function(nums, val) {
  while(nums.includes(val)){
      nums.splice(nums.indexOf(val),1)
  }
  return nums.length;
};

//Best Answer
var removeElement = function(nums, val) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] != val) {
          nums[left] = nums[i]
          left++
      }
  }
  return left;
};