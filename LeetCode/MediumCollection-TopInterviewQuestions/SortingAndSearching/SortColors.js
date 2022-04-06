//ref: https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/798/


// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// First Trial
//라이브러리를 써서 쉽게 하려 했는데 문제에서 주어진 거 쓰지말고 반복문으로 해보라하여 두번째 답안을 시도
var sortColors = function(nums) {
    return nums.sort((a,b)=> a-b);
};


// 문제 요구사항이 원본배열을 건드리라는 것임
// 되네 
var sortColors = function(nums) {
  const hash = {};
  
  //1. hash를 이용해서 각 숫자별 카운트를 만들어줌  
  nums.forEach((el)=> {
      hash[el] ? hash[el]++ : hash[el] = 1;
  })
  
  //2. 원본배열에 k를 nums의 인덱스로 활용하여 값을 넣어줌
  let k = 0;
  for(const el in hash) {
    //카운트 된 개수(hash[el])만큼만 원본배열에 해당 값(el)을 넣어줌
    for(let i = 0; i < hash[el]; i++) {
        nums[k] = el;
        k++;
    }
  }
};

//Finding solution (개인적으로 Best Answer) -> Bubble Sort
//배열의 값을 인덱스2개를 받아 각 위치의 값을 변경해주는 함수를 별도 생성
const swap = (A, a, b) => {
  const temp = A[a];
  A[a] = A[b];
  A[b] = temp;
};

const sortColors = (N) => {
  const pivot = 1;
  let smaller = 0, equal = 0, larger = N.length;

  while (equal < larger) {
    //반복해가면서 값의 크기 유무에따라 양 인덱스를 바꿔주는 정렬을 시도.(버블솔팅)
    if (N[equal] < pivot) swap(N, equal++, smaller++);
    else if (N[equal] > pivot) swap(N, equal, --larger);
    else equal++;
  }
};



//Best Solution(성능만)
var sortColors = function(nums) {
    //hash키 값을 미리 정해놓고 기본값을 할당 해놓음
  let counts = {
      0: 0,
      1: 0,
      2: 0
  }
  
  //반복문을 돌며 각 숫자별 개수를 카운트 함.
  for(var i=0; i< nums.length; i++){
      counts[nums[i]]++
  }
  
  //i를 0~2까지 돌게 만들어 각 키값만 순회하게 만듦
  let k = 0
  for(var i =0; i< 3; i ++){
      let c = counts[i]; //카운트 된 개수
      while (c > 0){ 
        //개수가 다 될때 까지 해당 키값을 nums의 k번째 인덱스에 해당하는 애로 바꿔줌
          nums[k] = i;
          c--;
          k++;
      }
  }
};