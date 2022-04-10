//ref : https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/
// You are a product manager and currently leading a team to develop a new product. 
// Unfortunately, the latest version of your product fails the quality check. 
// Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// bad version다음은 무조건 bad version
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// n 중에 bad one있음
// You are given an API bool isBadVersion(version) which returns whether version is bad. 
// Implement a function to find the first bad version. 
// You should minimize the number of calls to the API.
// isBadversion은 버전을 인자로 받아서 무슨 버전이 꽝인지 알려줌
// API회출호수 최소로 짜보셈

// Example 1:
// Input: n = 5, bad = 4

// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:
// Input: n = 1, bad = 1
// Output: 1

// Constraints:
// 1 <= bad <= n <= 231 - 1

//First Trial -> O(N)
var solution = function(isBadVersion) {
  return function(n) {
    for(let i = 1; i <=  n ;i +=1) {
      if(isBadVersion(i)){
          return i
      }
    };
  };
};

//Best solution -> O(logN)
//이진탐색을 왜 생각 안했을깡 흠..
const solution = (isBadVersion) => {

  return function (n) {
    let start = 0;
    let end = n;

    while(start <= end){
      let mid = Math.floor((start+end)/2);
      if(isBadVersion(mid)){
        end = mid -1;

        if(!isBadVersion(mid-1)){ 
          //현재것이 true이고 그 앞에것이 false이면 현재것이 에러의 시발점이 된 버전의 값의 인덱스임ㅇㅇ
          return mid;
        }
      }else{
        start = mid + 1;
      }
    } 
  }
}
