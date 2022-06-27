/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
  let isDecrease = true,  
      isIncrease = true;
    
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i+1]) {
            isIncrease = false;
        }
        
        if(nums[i] < nums[i+1]) {
            isDecrease = false;
        }
    }
    //둘중 하나라도 참이면 monotonic(단조)배열이 됨
    return isIncrease || isDecrease;
};