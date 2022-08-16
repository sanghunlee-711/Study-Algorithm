/**
 * A이기면 A, B이기면 B 비기면 D출력
 * {
 *  가위: 1.
 * 비위: 2.
 * 보: 3,
 * }
 * 
 * 입력: 배열두개받음
 * 출력: 배열로 승부여부 출력하면 됨
 */
//가위 -> 보를 이김, 바위 -> 가위를 이김, 보 -> 바위를 이김
const solution = (A,B) => {
  const hash = {
    1: 3,
    2: 1,
    3: 2
  }
  if(A.length !== B.length) throw new Error("정확하지 않은 입력값 입니다.");
  
  const result = [];
  A.forEach((a, idx) => {
    const b = B[idx];
    if(a === b) result.push("D");
    if(hash[a] === b) result.push("A");
    if(hash[b] === a) result.push("B");
  })
  return result.join(" ")

}

console.log(solution([2,3,3,1,3], [1,1,2,2,3])); //A B A B D

//해설은 모든 조건을 다 달아서 문자열에 붙이는 방식으로 푸심..

function solution(a, b){         
  let answer="";
  for(let i=0; i<a.length; i++){
      if(a[i]===b[i]) answer+="D ";
      else if(a[i]===1 && b[i]===3) answer+="A ";
      else if(a[i]===2 && b[i]===1) answer+="A ";
      else if(a[i]===3 && b[i]===2) answer+="A ";
      else answer+="B ";
  }
  
  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));