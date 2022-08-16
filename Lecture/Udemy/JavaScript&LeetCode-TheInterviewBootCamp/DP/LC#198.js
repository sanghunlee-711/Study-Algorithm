/**
 * @param {number[]} nums
 * @return {number}
 */
/*
pseudo
건너뛰면서 맥스값이 되는걸 계속 갱신하다가 제일 큰값을 알려주는게 핵심임
[2,1,4] => 6이 될것임
그런데
[2,7,4] => 이러면 7이 되어야함
[5,1] => [5,5]가 maxLoot배열에 들어가는게 맞겠쥬 ?
[1,5] => [1,5]가 maxLoot배열에 들어가는게 맞겠쥬 ? 

이런식으로 배열하나를 두고 max값을 인덱스를 돌면서 갱신하며 제일 큰걸 넣어준 다음
마지막에 들어가는것이 어차피 제일 큰것이기 때문에 그걸 반환해주면 됨.

*/
 var rob = function(nums) {
    if(!nums.length) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);

    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

    for(let i = 2; i < nums.length; i++) {
      maxLootAtNth.push(Math.max(nums[i]+ maxLootAtNth[i-2], maxLootAtNth[i-1]));
    }

    return maxLootAtNth.pop();
};