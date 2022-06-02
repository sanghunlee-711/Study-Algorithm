var searchInsert = function(nums, target) {
  //찾는건 이진탐색이면 됨
  //없다면?.. 적절한 순서에 넣어야하는데 logN을 원함
  //사실 넣지 않아도 됨
  //마지막에 바라본 인덱스가 어디인지만 알면 될 것 같음
  if(target <= nums[0]) return 0;
  
  let start = 0;
  let end = nums.length-1;
  let middle = Math.floor((start+end)/2);
  
  while(start <= end) {
      middle = Math.floor((start+end)/2);
      if(nums[middle] > target) {
          end = middle -1;
      }else if(nums[middle] < target){
          start = middle +1;
      }else {
          return middle;
      }
  }
  //그림그려보면 이런 결론
  if(start > end) return end+1;
  return -1; //엣지케이스
};
