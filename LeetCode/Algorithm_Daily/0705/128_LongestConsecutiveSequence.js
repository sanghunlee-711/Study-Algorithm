/**
 * @param {number[]} nums
 * @return {number}
 */
/*
1. 일단sorting때림
2. maxLen하나 두고 업데이트 함
3. 1차이나게 연속되는것만 연속적인것이라 판단함.
    현재거랑 그전거랑 비교했을때 1차이나면 maxLen을 올려주면 될 듯
    만약 1차이나지않고 다른 차이가 난다면 현재까지의 max값을 메모이징하고 다시 시작 시킴
  3. 마지막에 이떄까지의 maxLen값 중 최대값만 리턴해줌.
  T.C: O(N)
24min
*/

var longestConsecutive = function(nums) {
  if(!nums.length) return 0;
  let maxLen = 1;
  let check = [];
  nums = nums.sort((a,b)=> a-b);
  //중복제거
  nums = [...new Set([...nums])];
  for(let i = 1; i < nums.length; i++) {
      if(Math.abs(nums[i] - nums[i-1])  === 1){
          maxLen++;
      }else{
          check.push(maxLen);
          maxLen = 1;
      }
  }
  check.push(maxLen);
  
  
  return check.sort((a,b)=> b-a)[0];
};

//Best Answer
/*
set을 적절히 활용함
O(N)이라는 것에 빠져서 반복문안에 반복문을 안돌리려 그리 애썼느데 이리 해도 통과가 됨
while문을 통해서 연속적으로 계속 확인을 하고 max값을 업데이트하며 나아감.
*/
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let longestSeq = 0;
  
  for(let num of set) {
      if(set.has(num - 1)) continue;
      let consecutiveLen = 1;
      while(set.has(num + consecutiveLen)){
        consecutiveLen++;
      } 
      longestSeq = Math.max(longestSeq, consecutiveLen);
  }
  return longestSeq;
};