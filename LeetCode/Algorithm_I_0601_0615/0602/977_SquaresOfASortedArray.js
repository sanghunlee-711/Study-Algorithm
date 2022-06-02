//간단한 연산 및 정렬 문제
var sortedSquares = function(nums) {
  return nums.map((el)=> el*el).sort((a,b)=>a-b);
};