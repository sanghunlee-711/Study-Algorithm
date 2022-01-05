// Frist trial
const solution =(nums)=>{
  for(let i = 0; i < nums.length; i += 1){
    for(let j = i+1; j < nums.length; j += 1){
      if(nums[i] === nums[j]){
        return true;
      }
    }
  }
  return false;
}

// Best Answer
// set 자료형을 사용해서 변경하고 길이 다름을 확인함.
// 자료형을 잘 활용하자 ㅎㅅㅎ..
const best = (nums) =>{
  let numSet = [...new Set(nums)];
  return numSet.length !== nums.length;
}