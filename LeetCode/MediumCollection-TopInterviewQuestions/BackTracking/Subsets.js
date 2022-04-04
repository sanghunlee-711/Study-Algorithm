//ref:


//First Trial 
//모든 경우의 수를 중복없이 찾는 전형적인 순열문제임

const combinations = (arr, n) =>{
    if(n === 1) return arr.map((el)=>[el]);
    const result = [];
    
    arr.forEach((fixed, index, originArr)=> {
        const rest = originArr.slice(index+1);
        const combis = combinations(rest, n - 1);
        const combine = combis.map((el)=> [fixed,...el]);
        result.push(...combine);
    })
    return result;
}

var subsets = function(nums) {
    const answer = [[]];
    for(let i = 0; i < nums.length; i++) {
        const valueArr = combinations(nums, i+1);
        //각 n개별 케이스를 모두 답변에 넣어줌.
        valueArr.forEach((el)=> answer.push(el));
    }
    return answer;
};


//Best Answer
function dfs(i, nums, slate, answer) {
  if (i === nums.length) { // leaf level인 경우 globalAnswer 배열에  넣어줌
    answer.push([...slate]);
      return;
  }
  
  // dfs recursive case 
  // exclude
  dfs(i+1, nums, slate, answer);
  
  // include
  // 메모리에 새롭게 할당하기 싫으므로 걍 push, pop을 통해서 레벨마다 활용함.
  slate.push(nums[i]);
  dfs(i+1, nums, slate, answer);
  slate.pop();
}

//O(n*2^n): T & A
var subsets = function(nums) {
  const ans = [];
  dfs(0, nums, [], ans);
  return ans;
};