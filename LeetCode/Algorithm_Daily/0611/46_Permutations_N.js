/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
pseudo
백트래킹은 모르겠고 dfs로 가능하다고 하니 해봄

*/

const dfs = (nums, current, answer) => {
  if(nums.length === current.size) {
      //현재 방문된 길이와 nums의 길이가 동일하다면 필요한 경우의수를 채운 케이스가 되므로 
      //답에 넣음
      answer.push([...current]);
      return;
  }
  
  //아직 길이가 맞지 않은 경우
  for(let i = 0; i < nums.length; i++) {
      //이미 카운팅한 수에 대해서는 넘어뛰고 
      let now = nums[i];
      if(current.has(now)) continue;
      //현재 배열에 각 요소들을 넣어주며 다시 dfs를 돌림
      current.add(now);
      dfs(nums,current,answer);
      //돌리고 나서는 다시 지워줌(현재 회문에서만 체크하기 위함)
      current.delete(now);
  }
  
}


var permute = function(nums) {
  let answer = [];
  dfs(nums, new Set(), answer);
  return answer;
};