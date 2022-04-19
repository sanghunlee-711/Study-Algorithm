//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/810/

// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

//First Trial
// [10,9,2,5,3,7,101,18] -> [2,3,7,101]
// 도대체 여기서 dp를 뭘 어떻게 메모이징해서 점화식을 쓰라는건지 모르겟고 ..
// 1.start변수를 만듦 
// 0번째 idx값을 미리할당
// 회문을 1번째 인덱스 부터 돌면서 
// start변수보다 작으면 start를 업데이트
// start변수보다 크면 stack에 push
// stack.length가 1이상이 된 경우 stack[-1]의 값보다 회문중인 값이 작은 경우stack.pop & stack.push
// stack.length가 1이상이 된 경우 stack[-1]의 값보다 회문중인 값이 큰 경우 stack.push
// stack.length + 1을 return;
// 이러면 3,7,18이 배열에 담겨버리네 ㅂㄷㅂㄷ
// 이중포문 각인가
var lengthOfLIS = function(nums) {
  const stack = [nums[0]];

  for(let i = 1; i < nums.length; i++) {
      //stack회문을 돌리자
      for(let j = 0; j < stack.length; j++){
          //현재 회문돌리는 nums값보다 stack값이 더 작거나 같으면
          if(nums[i] <= stack[j]) {
              //현재 스택의 값을 회문돌리는 nums로 업데이트
              stack[j] = nums[i];
              break;
          }
          //만약 회문 다 돌때까지 더 작은게 없으면 현재 값이 stack내부보다 큰것이므로 넣어줌
          if(j === stack.length - 1) stack.push(nums[i]);
      }
  }
  
  return stack.length;
};
// Best Answer
//subStree는 무조건 정렬되어서 이진탐색을 쓸 수 있다는 것을 활용한 답변
var lengthOfLIS = function(nums) {
  const subs = [nums[0]];
  
  for (let i = 1; i < nums.length; i += 1){
      const current = nums[i];
      if (current > subs[subs.length - 1]){
          subs.push(current);
      }else {
        //현재값이 마지막값보다 더 작으면 업데이트가 필요하므로 이때 subStack의 idxf를
        //이진탐색으로 찾아서 subs배열에 해당값을 업데이트해줌 (어차피 정렬되어있는  상태라 이진탐색하면 logN임)
          const found = bSearch(subs, current)
          subs[found] = current;
      }
  }
  return subs.length;
};

var bSearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  
  while (start <= end){
      const mid = Math.floor((start+end)/2)
      const current = array[mid];
      if (current === target){ 
          return mid
      }else if (current < target){
          start = mid + 1;
      }else {
          end = mid - 1;
      }
      
  }
  return start
}