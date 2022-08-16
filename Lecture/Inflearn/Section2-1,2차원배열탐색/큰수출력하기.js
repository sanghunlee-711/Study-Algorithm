/*
N(1<=N<=100)개의 정수를 입력받아,
자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.
(첫 번째 수는 무조건 출력한다)
*/
/**
 * 
 * @param {*} num 
 * @param {*} nums 
 * 첫번째 수는 무조건 출력하는데
 * 자신의 바로 앞수가 뭔말이야 .. => 배열내에서 인덱스 위치에서 말하는것임
 * 
 */
const solution = (nums) => {
  const arr = [nums[0]];

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i-1]) arr.push(nums[i]);
  }
  return arr.join(" ");
}

console.log(solution([7,3,9,5,6,12])) //[7,9,6,12]