//문자(알파벳)만 비교해서 팰린드롬인지 확인하기

const solution = (str) => {
  str = str.replace(/[^a-zA-Z]/gi, '').toLowerCase();
  let start = 0, end = str.length -1;
  
  while(start < end) {
    if(str[start] !== str[end]) return "NO";
    start++;
    end--;
  }
  return "YES";
}

console.log(solution('abC_ cbA78')); //YES
console.log(solution('abC cba8')); //YES
console.log(solution('abb cba8')); //NO


//해설
//메서드로만 확인하심.
function solution2(s){
  let answer="YES";
  s=s.toLowerCase().replace(/[^a-z]/g, '');
  if(s.split('').reverse().join('')!==s) return "NO";
  return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
