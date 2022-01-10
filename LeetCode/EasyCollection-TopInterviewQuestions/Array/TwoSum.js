//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//조건 자체가 풀기 좋은 문제였음
// 애초에 중복되는 케이스가 없을 경우를 만들어주기 때문에 그냥 이중 반복문 돌리고 끝냈는데 ..
// BF

const test = (nums, target) => {
  const answer = [];
  for(let i = 0; i < nums.length; i+=1) {
    for(let j =i+1; j < nums.length; j +=1){
        if(nums[i]+nums[j] === target) {
          answer.push(i);
          answer.push(j);
        }
    }
  }
  
  return answer;
}

test([2,7,11,15],9)
test([3,2,4],6)
test([3,3],6)

//Best Answer
// Map과 두수의합이라는 개념을 이용함 -> Hash도 가능할듯
const test = (nums, target) => {
  const map = new Map(); //중복 방지를 위해 map자료구조 사용
  
  for(let i = 0; i< nums.length; i +=1){
    const compile = target - nums[i]; 
    if(map.has(compile)) { //만약 지금 인덱스의 숫자가 target을 만들기에 부합한 숫자면
      return [map.get(compile), i]; // 여기서map.get(compile) 은 아래에서 저장한 인덱스가 튀어나옴
    }
    
    map.set(nums[i],i); // 부합하지 않는 숫자면 일단 map에 다 저장함.
  }
}

test([2,7,11,15],9)
test([3,2,4],6)
test([3,3],6)