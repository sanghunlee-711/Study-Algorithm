//ref : https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/722/
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

//First Trial
//정렬한거랑 다 만들어진거랑 비교해서 없으면 나가리..
//상수시간으로 메모리를 쓰라는건 흠.. 그대로 리턴하란건가
const solution = (nums) =>{
  const answerArr = Array.from(Array(nums.length+1).keys());
  const sortedArr = nums.sort((a,b)=>(a-b));
  
  for(let i = 0; i < answerArr.length; i +=1) {
    if(sortedArr[i] !== answerArr[i]) return answerArr[i];
  }
  return null
}

//Best solution
//현재 인덱스는 결국 현재 가지고 있는 값이랑 같아야함을 이용함
//for loop를 실제 필요한 배열처럼 사용하는 방법임
// 그래서 각자 매칭이 되는 것이면 0으로 sum이 더해지고 비게 되면
// 빈 값만 sum에 합쳐지게 되어 답이 되는 원리
//clever..
var missingNumber = function(nums) {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
      sum += (i - nums[i - 1]);
  }
  return sum;
};