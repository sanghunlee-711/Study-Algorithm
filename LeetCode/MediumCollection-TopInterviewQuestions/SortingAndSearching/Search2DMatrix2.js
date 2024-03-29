//ref:https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/806/

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matrix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -109 <= target <= 109

//First Trial
//정렬되어 있으므로 이진탐색이 좋겠음
//row, col모두 정렬되어있어서 양 방향으로 탐색을하면서 좌표를 줄여갈 수 있을것 같다는 생각을 하긴 했지만
//구현력이 떨어져서 일단 이런방식으로 제출을 해봤는데 Accept가 뜨긴함.

var searchMatrix = function(matrix, target) {
  let start = 0, end = matrix[0].length - 1;
  let answer = false;
  //findInrow
  for(let i = 0; i < matrix.length; i ++) {
      while(start <= end) {
          let mid = Math.floor((start+end) / 2);
          if(matrix[i][mid] === target) {
              answer = true;
              break;
          }

          if(matrix[i][mid] < target) {
              start = mid + 1;
          }else{
              end = mid -1;
          }
          
      }
      if(answer) break;
      start = 0, end = matrix[0].length - 1;
  }

  return answer;
};

//Best Answer(Efficient)
//뭐여 이게 ..
//문제를 잘 생각해보면 오른쪽 하단 대각선 방향으로 갈수록 숫자가 커지는 구조가 될 수 밖에 없음
//그걸 이용한 거임
var searchMatrix = function(matrix, target) {
  //엣지케이스 처리
  if(matrix.length == 0) return false;
  var i = 0;
  var j = matrix[0].length - 1;

  while(i < matrix.length && j >= 0){
    //타겟되면 가져옴
      if(matrix[i][j] == target) return true
      if(matrix[i][j] > target){
        //타겟값 보다 큰경우 column을 줄여줌
          j--
      } else {
        //타겟값보다 작은 경우 row를 올려줌
          i++
      }
  }
  return false
};

