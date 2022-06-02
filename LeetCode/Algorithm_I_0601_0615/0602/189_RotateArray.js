/*
일전에 풀어본 문제
답변이 남아 있어서 아쉬웠음
splice를 통해 원본 배열에서 실제로 삭제 
삭제 시 필요한 인덱스를 유연하게 계산할때 % 연산자를 이용함
[1,2,3,4,5,6] ,7 인경우 7%6 -> 1이 되므로 하나만 돌리면 됨
[1,2,3,4,5,6] ,7 인경우 2%6 -> 2이 되므로 두개만 돌리면 됨
*/ 

var rotate = function(nums, k) {
  const arr = nums.splice(nums.length - k % nums.length);

  nums.unshift(...arr)
  return nums;
};