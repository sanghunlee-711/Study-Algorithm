/**
 * @param {number[]} nums
 * @return {number}
 */
//First Trial
//T.C: O(NlogN)
 var pivotIndex = function(nums) {
  let front = 0;
  
  for(let i = 0; i < nums.length; i++) {
      let behind = 0;
      
      for(let j = i+1; j < nums.length; j++) {
          behind += nums[j];
      }
      
      if(front === behind) return i;
      front += nums[i];//앞에서부터 현재까지의 합
  }
  
  return -1;
};

//Second Trial
//T.C: O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let sum = 0,
      front = 0;
  
  nums.forEach((num)=> sum+=num);
  
  for(let i = 0; i < nums.length; i++) {
      if(front === sum - front - nums[i]) return i;
      front += nums[i];
  }
  return -1;
};