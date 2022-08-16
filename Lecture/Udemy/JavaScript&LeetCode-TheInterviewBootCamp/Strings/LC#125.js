//팰린드롬 문제의 경우 앞 뒤를 미러링해서 봐보라고 함
/*
투포인터를 통해 앞과 뒤에서 매치해보라함

pseudo 
1. input에서 알파벳을 다 추출해냄(대문자도 소문자로 필요없는건 다 빼고)
2. 앞과 뒤에 투포인터를 통해 돌리면서 equal이 되지 않는 순간 false반환 
3. 다 순회 되었으면 true반환

PS
  \w	word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미한다.
  \W 	non word를 표현하며 알파벳 + 숫자 + _ 가 아닌 문자를 의미한다.

  //이렇게 해도 됨
  // s = s.replace(/[^a-zA-Z0-9_]/gi,'').toLowerCase();

T.C : O(N)
S.C: O(1), 변수가 포인터밖에 없으므로 상수
*/

const solution = (s) => {
  //underscore랑 문자가 아닌 모든걸 ''로 바꿔줌.
  s = s.replace(/[\W_]/gi,'').toLowerCase();
  
  let start = 0, end = s.length -1;
  while(start < end) {
    if(s[start] !== s[end]) return false;
    start++; 
    end--;
  }
  return true;
}