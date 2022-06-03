/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//pseudo
/*
1. 0을 포인팅 할 변수하나 설정(zeroEnd)
2. 0이 아닌걸 찾으면 zeroEnd변수를 늘려줌
3. 그리고 0을 포인팅하던 위치를 0이 아닌 숫자로 만들어줌
*/
var moveZeroes = function(nums) {
  let zeroEnd = 0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] !== 0){
          nums[zeroEnd] = nums[i];
          zeroEnd++;
      }
  }
  
  for(let i = zeroEnd; i < nums.length; i++){
      nums[i] = 0;
  }
  
};