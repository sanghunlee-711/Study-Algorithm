//ref :https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

// Constraints:
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

//First Trial
//sketch
//condition
//1. should triple value in one sub arr in arr
//2. no duplicate
// idea
// - how about sort first and find with two point?
// 1. 배열 정렬 때리고 투포인터를 이용해서 줄여나가면 되겠지라고 생각함
// 그래서 첫번쨰 포인터 + 마지막 포인터가 0보다 적으면 마지막포인터를 한개 줄인값이 0이 되는지
// 반대면 그 반대로 앞에 포인터를 하나 올리려함.
// - [-1,0,1,2,-1,-4]
// - => [-4, -1, -1, 0, 1, 2]
// 시간초과 뜸 ㅎㅅㅎ..;;
var threeSum = function(nums) {
  //edge case
  if(nums.length < 3) return [];
  
  //sorting 
  nums = nums.sort((a,b)=> a-b);

  //two points
  let first = 0;
  let last = nums.length;
  let answer = [];
  
  while (first < last) {
      let subArr = [];

      if(nums[first] + nums[last] < 0){
          subArr.push(nums[first]);
          subArr.push(nums[last]);
          --last;
          subArr.push(nums[last]);
          if(subArr.reduce((a,b)=>a+b) !== 0) {
              subArr = [];
          }
      }
      
      if(nums[first] + nums[last] > 0) {
          subArr.push(nums[first]);
          subArr.push(nums[last]);
          ++first;
          subArr.push(nums[first]);
          if(subArr.reduce((a,b)=>a+b) !== 0) {
              subArr = [];
          }
      }
      
      
      if(subArr.length === 3) answer.push(subArr);    
  }
  return answer;
};

//Finding Solution
//무슨 힌트보고 20분 지나도 안풀려서 걍 discussion찾아봄
// 생각보다 조건에 대한 생각을 덜한 듯 ..
//정렬 + 투포인터까지는 접근이 좋았는데 중복에 대한 생각을 못함
// 중복을 처리하기 위해 while문을 적절하게 사용해서 푸는 방법.
var threeSum = function(nums) {
  let answer = [];
  
  //edge case;
  if(nums.length < 3) return answer;
  
  nums = nums.sort((a,b)=> a-b);
  
  //edge case 2;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] > 0) {
          return answer;
      }
      break;
  }
  
  //k가 nums.length-1이기 때문에 nums.length - 2 로 만들어야함.
  for(let i = 0; i < nums.length - 2; i++) {
      //i를 고정값으로 두고 j와 k를 포인터로 사용하는거임
      let j = i + 1;
      let k = nums.length - 1;
      
      //j 가 k보다 작을때 까지만 순환 해보자
      while(j < k) {
          const sum = nums[i] + nums[j] + nums[k];
          if(sum === 0) {
              //답이면 넣고
              answer.push([nums[i], nums[j], nums[k]]);
              // 배열내의 동일 해당인덱스의 동일값의 중복을 막기위해서 j를 변경해줌    
              while(j < k && nums[j] === nums[j+1]) {
                  j++;
              }
              //그리고 한칸만 올려 다른값 사용
              j++;
              // 배열내의 동일 해당인덱스의 동일값의 중복을 막기위해서 k를 변경해줌    
              while(k > j && nums[k] === nums[k-1]) {
                  k--;
              }
              //그리고 한칸만 내려 다른값 사용
              k--;
              
          //0보다 작으면(이미 정렬이 되어있기 때문에 j를 올려주면 됨)
          } else if(sum < 0) {
              j++;
          // 0보다 크면 k를 낮춰주면 됨
          } else{
              k--;
          }
      }
      
      // 배열내의 동일 해당인덱스의 동일값의 중복을 막기위해서 i를 변경해줌
      while(i < nums.length - 1 && nums[i] === nums[i+1]) {
          i++;
      }
  }
  return answer;
};


//Best answer
// 원리는 똑같다
// 중복 방지를 위해 index를 while문을 통해 조절해주는 것
// 답이 맞을 시 배열에 넣는 것 그리고 포인터의 인덱스를 동일 값이 나오는 것을 
//건너뛰고 다른 값이 나오는 곳으로 조절해주는 것.

//twosum함수에 정렬된 배열과, 타겟 값, 그 다음 인덱스, 결과 배열을 넘김
var twoSum = function(nums, target, i, reasultArray) {
  //j는 뒤에서 부터 시작하는 포인터
  var j = nums.length-1;

  //똑같이i, j를 통해 인덱스 관리
  while(i < j){
    //현재 sum이 타겟(for문의 i값의  * -1)
      var currentSum = nums[i] + nums[j];
      //정렬 되어있으니 현재 답이 작으면 앞에껄 올려줌
      if(currentSum < target) i++;
      //정렬 되어있으니 현재 답이 크면 뒤에껄 내려줌
      else if(currentSum > target) j--;
      else {
        //같으면 결과값에 넣어주고
          reasultArray.push([-target, nums[i] , nums[j]]);
          //i와 j업데이트
          i++;
          j--;
          
          //중복 방지를 위해 i,j인덱스 조절
          while(i < j && nums[i] == nums[i-1]) i++;
          while(i < j && nums[j] == nums[j+1]) j--;
      }
      
  }
}

var threeSum = function(nums) {
  //원본배열 정렬
  nums = nums.sort((a,b)=>a-b);
  //배열 길이를 n으로 넘김
  n = nums.length;
  
  var results = [];
  
  //찾은 답과 동일하게 길이 - 2부터 실행
  for(let i = 0; i < n - 2; i++){
    //만약에 i 인덱스가 0이 아니며 i인덱스의 값이 그전과 같으면 건너뜀.
      if(i > 0 && nums[i] == nums[i-1]) continue;
      //twosum함수에 정렬된 배열과, 타겟 값, 그 다음 인덱스, 결과 배열을 넘김
      twoSum(nums, -nums[i], i+1, results);
  }
  
  return results;
};