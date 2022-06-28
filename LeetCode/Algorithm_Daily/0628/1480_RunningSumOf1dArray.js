/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
그전에 더한값을 메모이징 해놓고 끝까지 더해주면 될듯
*/
var runningSum = function(nums) {
  let memo = 0;
  
  return nums.map((el)=> {
      el = el + memo;
      memo = el;
      return el;
  })
};