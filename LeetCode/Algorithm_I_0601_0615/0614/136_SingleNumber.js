/**
 * @param {number[]} nums
 * @return {number}
 */

/*
pseudo
set에 넣으면서 중복 보이면 set에서도 삭제해버리기
그러면 중복안된애만 set에 남을거니까 걔만 따로빼서 리턴
*/

var singleNumber = function(nums) {
  let set = new Set();
    
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) set.delete(nums[i]);
        else set.add(nums[i]);
    }
    
    return [...set][0];
    
};