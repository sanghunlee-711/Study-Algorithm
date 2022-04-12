//ref:

//First Trial
//조건 안보고 풀면 걍 정렬해서 이진탐색으로 값만 찾아버리면 됨
//하지만 중간에 pivot이 존재함
// 피벗을 어떻게 관리하느냐가 O(logN)으로 가는 방향 같음
//1. Math.min을 통해서 index를 찾는다 ? (이미 n이 됨)
//일단 아래와 같이 메서드를 사용하면 테스트케이스는 모두 통과가 됨
var search = function(nums, target) {
  return nums.indexOf(target);
};


//Finding solution
/*
조건을 보면 두가지의 subArr가 존재함
이진탐색을 하면서 추가 조건을 수행해주면 됨
1. target넘버가 타겟한 subArr에 없으면 다른 subArr로 이동하면 됨
2. 그럼 subArr를 어케알아낼까
3. 선택한 subArr에 마지막값은  ... => 내일 마무리하자
How do we figure out if we are in the correct subarray? 
The last value of given array is the maximum value of second sorted subarray.
Therefore, if our target is smaller than or equal to that value, we should try to
go to second sorted subarray. If our target is greater than that value, we should try to
go to first sorted subarray.
*/
var search = function(nums, target) {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    let low = 0, high = nums.length - 1;
    let lastVal = nums[nums.length-1];
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let inCorrectSubarr = (nums[mid] <= lastVal && target <= lastVal) || 
            (nums[mid] > lastVal && target > lastVal);
        if (nums[mid] > target) {
            inCorrectSubarr ? high = mid-1 : low = mid+1;
        } else if (nums[mid] < target) {
            inCorrectSubarr ? low = mid+1 : high = mid-1;
        } else {
            return mid;
        }
    }
    return -1;
    // T.C: O(log(N))
    // S.C: O(1)
};

//Best Answer
var search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  
  //이진탐색 돌림
  while(l <= r) {
      let mid = Math.floor((l + r) / 2);
      
      //같은 값이면 리턴
      if(nums[mid] === target) return mid;
      //피벗 체크를 위해 start가 mid보다 작은경우와그렇지 않은 경우를 구분
      if(nums[l] <= nums[mid]) {
        //여기서 start,end를 mid값에 따라 조절
          if(nums[l] <= target && target < nums[mid]) {
              r = mid - 1;
          } else {
              l = mid + 1;
          }
      } else {
          if(nums[mid] < target && target <= nums[r]) {
              l = mid + 1
          } else {
              r = mid - 1;
          }
      }
  }
  return -1;
    
};