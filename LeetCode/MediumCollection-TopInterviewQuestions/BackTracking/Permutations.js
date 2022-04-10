//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/795/
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

//Sketch
//가능한 모든 nPn임 순열 구하는거임 ㅇㅇ..
//순서도 상관 없다함
//강의에서 배운게 있어서 써먹었음

//이게 되네 ㅋㅋㅋㅋ
const permutation = (arr, n) => {
   //1인 경우 걍 각 하나씩 뿐이므로 하나씩만 돌려줌
  if(n === 1) return arr.map((el)=> [el]);
  //모든 순열을 반환할 배열
  const result = [];
  arr.forEach((fixed, idx, originArr) => {
      const rest = originArr.filter((_,index) => index !== idx);
      const perms = permutation(rest, n-1);
      const combine = perms.map((v)=>[fixed,...v]);
      result.push(...combine);
  });
  return result;
}

var permute = function(nums) {
  return permutation(nums, nums.length);
};

//Best Answer ?
var permute = function(nums) {
  const res = []; //답변
  const set = new Set(); //set을 통해 중복 확인을 함
  
  const helper = (curr) => {
      if(curr.length === nums.length) { //조건을 만족하는 경우, 답변 res 에 넣음
          res.push([...curr]);
          return;
      }
      
      for(const n of nums) { //nums를 반복문 돌리면서 재귀를 실행해줌
          if(!set.has(n)) { //만약 가지고 있지 않은 숫자면 다시 재귀를 돌릴거임
              set.add(n); //재귀 돌리기전에 set에 추가를 하고
              curr.push(n); //curr배열에 넣어준 뒤
              helper(curr); //그 배열로 재귀 다시 돌림
              curr.pop(); //그리고 curr배열에 그 값을 다시 빼주고
              set.delete(n); //set에서도 지워줌. -> 이렇게 해야 0 이 있는경우 0,1을 만들 수 있고 1 이 있는경우 1,0을 만들 수 있게 됨 ㅎㅅㅎ
          }
      }
  }
  
  helper([]);
  
  return res;
};