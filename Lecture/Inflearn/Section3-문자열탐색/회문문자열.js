//Palindrome인지를 물어보는 문제
//너무 많이 풀어 익숙한 문제이다.
const solution = (str) => {
  str = str.toLowerCase();
  let start = 0, end = str.length -1;
  
  while(start < end) {
    if(str[start] !== str[end]) return "NO";
    start++;
    end--;
  }
  return "YES";
}

console.log(solution('gooG'));
console.log(solution('goo'));


//해설코드
//시간복잡도는 똑같다고 봐도 됨
//다만 하신 방식은 for문을 사용해서 중간까지 오되 양끝에서 줄여주는 방식으로 진행하심.
function solution2(s){
  let answer="YES";
  s=s.toLowerCase();
  let len=s.length;
  for(let i=0; i<Math.floor(len/2); i++){
      if(s[i]!=s[len-i-1]) return "NO";
  }
  return answer;
}

let str="goooG";
console.log(solution(str));