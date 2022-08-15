/**
 * 일렬로 학생 배열이 들어오고 정렬이 되어 있지 않음
 * 제일 앞에서 선생님이 볼 수 있는 최대 학생수를 구하라.
*/

//앞에서 부터 제일 큰학생을 계속 갱신해주면서 그것보다 작으면 안보이는거네
const solution = (students) => {
  let count = 0;
  let max = Number.NEGATIVE_INFINITY;

  students.forEach((el)=> {
    if(max < el) {
      count ++;
      max = Math.max(el, max);
    };

  });
  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])) //5

//해설 답안
// max를 0으로 잡고 1부터 회문돌아줌, 그래서 count 초기값을 1로 둠.
const solution2 = (students) => {
  let count = 1;
  let max = students[0];

  for(let i = 1; i < students.length; i++) {
    if(students[i] > max) {
      count++;
      max = students[i];
    }
  }

  return count;
}


console.log(solution2([130, 135, 148, 140, 145, 150, 150, 153])) //5