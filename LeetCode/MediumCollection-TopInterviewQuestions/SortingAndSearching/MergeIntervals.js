//ref : https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

//First Trial
var merge = function(intervals) {
  if( intervals.length <= 1) return intervals;
  //[[1,4],[0,4]]같은 테스트케이스가 있어서 선제 정렬
  intervals = intervals.sort((a,b)=> a[0]-b[0]);
  
  //미리 0번째 인덱스의 값을 넣고 시작하자.
  let answer = [intervals[0]];
  
  for(let i = 1; i < intervals.length; i++) {
      let prev = answer.pop();
      let curr = intervals[i];
      let [prevStart, prevEnd] = prev;
      let [currStart, currEnd] = curr;
      
      //둘이 범위가 겹치는게 확인되면 이전의 시작과 현재 또는 이전값 중 큰 것을 넣어줌
      if(prevEnd >= currStart) answer.push([prevStart, Math.max(prevEnd, currEnd)]);
      //범위 안겹치면 그냥 같이 넣어줌.
      else answer.push(prev, curr);
  }
  return answer;
};

//Finding And Best Answer
//찾은 답은 거의 유사한 방식에서 구조분해할당을 제외함
// 사실 저렇게 구조분해할당하면 메모리 먹기때문에 알고리즘에서 그닥 안좋을 수도 있을듯.
// 머리가 안돌아가서 인지 조건을 찾는데 생각보다 시간이 많이들었음
//효율이 좋은 답중에서 가독성이 좋다고 판단되는 답이 없어서 이번에는 패스..