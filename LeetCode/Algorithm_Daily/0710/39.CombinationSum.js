/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/*
target을 만족할 수 있는 모든 경우의수 (중복포함)를 배열로 나타내어줘야함
dfs(백트래킹)힌트가 있음

if(currentSum === 0) push answer Arr
next) currentSum = currentSum - candidates[i];

*/
var combinationSum = function(candidates, target) {
  const len  = candidates.length;
  let result = [];
  //루프 덜 돌기 위해 정렬한번 돌림
  candidates = candidates.sort((a,b)=>a-b);
  
  const helper = (currentSum, currIdx, subArr) => {
      //base case (인덱스가 범위 밖 또는 합이 0 미만인 경우 끊어줘야함)
      if(currIdx >= len || currentSum < 0) return;
      //합이 target과 동일해지면 답이 되므로 answer에 넣어줌
      if(currentSum === 0) result.push([...subArr]);
      
      for(let i = currIdx; i < len; i++) {
          //중복방지를 위한 백트래킹 위해 방문한 것 처리가 필요함
          //여기서 중복은 케이스들의 중복임(인자의 중복 x -> 2,2,3인 케이스가 중복되는걸 방지하고 싶어서 진행하는것임)
          subArr.push(candidates[i]);
          //현재 인덱스 부터 끝까지의 경우를 재귀로 돌림
          helper(currentSum - candidates[i], i, subArr);
          //방문했던것은 초기화
          subArr.pop();
      }
  };
  
  helper(target, 0 , []);
  return result;
};

//Best Answer
/*
거의 비슷한데 target을 맞춰가는 방식으로 연산이 한번 더 들어가긴 하나 
전체적으로 이해하기가 수월해짐
*/ 

var combinationSum = function(candidates, target) {
  const c = [];
  
  const dfs = (i, path, sum) => {
      if (i > candidates.length || sum > target) return;
      if (sum === target) {
          c.push([...path]);
          return;
      }
      
      for (let j = i; j < candidates.length; j++) {
          path.push(candidates[j]);
          sum += candidates[j];
          dfs(j, path, sum);
          sum -= candidates[j];
          path.pop();
      }
  }
  
  dfs(0, [], 0);
  return c;
};