/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
1. sorting때려서 오름차순 만들고
2. 투포인터로 좁혀가면서
    * 3개의 합이니까 for문안에 while
* currentSum 이 target보다 작으면 start를 올리고
* 크면 end를 내림
    * 종결은 start < end
3. 찾으면 카운트 올리면 됨
4. 제일 가까운 합을 찾는게 문제임 ;;..
*/
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b)=> a-b);
  
  let answer = 0;
  let minDiff = Infinity;
  
  //start를 위해 줄여줌
  for(let i = 0; i < nums.length-1; i++) {
      let start = i+1,
      end = nums.length -1;
      
      while(start < end) {
          const currentSum = nums[i] + nums[start] + nums[end];
          const currentDiff = Math.abs(currentSum - target);
          
          if(currentDiff < minDiff) {
              minDiff = currentDiff;
              answer = currentSum;
          }
          
          if(currentSum < target) {
              start++;
          }else{
              end--;
          }
      }
  }

  return answer;
};

//Another Answer
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
diff만 업데이트 하고 마지막에 target과 diff를 계산해서 반환하는 점이 다름
위 답변의 경우 계속해서 answer를 업데이트 해줌.
*/
var threeSumClosest = function(nums, target) {
        let diff = Infinity;
        let sz = nums.length;
        nums.sort((a, b) => a - b);

        for (let i = 0; i < sz && diff != 0; i++) {
            let lo = i + 1;
            let hi = sz - 1;

            while (lo < hi) {
                let sum = nums[i] + nums[lo] + nums[hi];

                if (Math.abs(target - sum) < Math.abs(diff)) {
                    diff = target - sum;
                }
                if (sum < target) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
        return target - diff;
};