/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * nums를 포인팅할 i,j를 만들고
 * 각 인덱스별로 점프를 통해 접근이 가능한지 여부를 말해줄 배열 하나를 0인덱스를 제외하고 기본값을 false로 세팅해줌
 * 회문을 돌면서 i부터 j까지 한번더 회문을 돌리는데 만약에 i가 접근가능여부 배열의 true값을 가지고 있고 j인덱스에 접근이 가능 (=== nums[i] + i >= j)
 * 하다면
 * j인덱스에 해당하는 접근가능여부의 배열 값을 true로 업데이트해주면서 j인덱스를 하나 더올림
 *  만약 i에서 j에 접근이 안되면 두번쨰 루프는 그냥 통과
 * 회문을 마친 뒤 반환하는값을 접근가능여부 판단 배열의 마지막인자값을 주면 됨.
 */
 var canJump = function(nums) {
    // let dp = Array.from({length: nums.length}, (_,i)=> false);
    let dp = new Array(nums.length).fill(false);

    for(let j = 1; j < nums.length; j++) {
      for(let i = 0; i < j; i++) {
        if(dp[i] && i + nums[i] >= j) {
          dp[j] = true;
          break;
        }
      }
    }

    return dp[dp.length - 1];
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//원래했던방식은 dp라기보단 회문을 돌면서 계속 maxIdx를 업데이트해나아가는 방식이다.
//근데 이게 훨씬 빠르게 돌아간다
 var canJump = function(nums) {
  let maxIdx = 0;
  
  for(let i = 0; i < nums.length; i++) {
      if(i > maxIdx) {
          return false;
      }
      
      if(i+ nums[i] > maxIdx) {
          maxIdx = i + nums[i];
      }
      
      if(maxIdx >= nums.length - 1) {
          return true;
      }
  }
  return false;
};