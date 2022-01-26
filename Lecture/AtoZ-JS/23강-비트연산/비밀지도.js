//이진법으로 해결 가능
// 1과 0 이 만나면 1임
// 0과 0 이면 0임
// 1과 1이면 1임


// Trial
function solution(n,arr1, arr2) {
  let answer = [];

  for(let i = 0; i < n; i+=1){
    const binaryOr= arr1[i] | arr2[i]; //둘중하나 1이면 1과 1이면 1 0과 0 이면 0
    const bit = binaryOr.toString(2);
    const blank = '  '.repeat(n-bit.length);
    const change = bit.replace(/1/gi, "#").replace(/0/gi, ' ');
    answer.push(blank+change);
  }

  return answer;
}


// Solution
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i += 1) {
      const result = arr1[i] | arr2[i]; // 합집합
      const bit = result.toString(2); // 이진수 문자열로 변환
      const blankString = ' '.repeat(n - bit.length); // 부족한 만큼 빈 문자열을 채운다
      const bitString = bit.replace(/1/gi, '#').replace(/0/gi, ' ') // 1을 #으로 0을 공백으로 바꾼다
      answer.push(blankString + bitString); // 빈 문자열과 비트 문자열을 합친다.
  }

  return answer; // 반환
}