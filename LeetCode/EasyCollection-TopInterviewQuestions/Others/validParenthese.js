//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/


// FirstTrial
//프로그래머스 강의에서  한번  풀어본 기억이 있어 곧바로 풀었다.
// Hash Map과 stack구조를 이용하면 풀 수 있게 된다!

//만약 ()[] 들어가면
//오픈일떄( ( , [ , { ) 는 스택에 넣고
// close를 맞이했을때 pop을해서 매치가 되면 넣으면 true아니면 false겠네

var isValid = function(s) {
  const stack = [];
  const openHash = {
      "(":")",
      "[":"]",
      "{":"}",
  };
  
  for(let i = 0; i < s.length; i++) {
      if(Object.keys(openHash).includes(s[i])){
          stack.push(s[i]);
      }else{
          const open = stack.pop();
          if(openHash[open] !== s[i]) return false;
      }
  }
  
  if(stack.length) return false;
  return true;
};

//Best solution
// 성능이 매우 좋은 다른 풀이들이 있는데 if문 덩어리라 가독성이 떨어진다 판단되어
// 조금 성능이 떨어져도 메모리를 내가 작성한 답보다 덜먹는걸 선택했다.
const closedToOpen = {
  ")": "(",
  "]": "[",
  "}": "{",
}
// in메서드를 사용해서 Object.keys()를 통해 
// 배열을 만들고 includes 메서드로 판단하는 것을 건너뛰게 했다.
//다른 논리구조는 똑같음
const isClosingParen = (el) => el in closedToOpen;

var isValid = function(s) {
  var stack = [];
  for(let i = 0; i < s.length; i++){
      const el = s[i]
      if(isClosingParen(el)){
          const topOfStack = stack.pop();
          if(closedToOpen[el] !== topOfStack){
              return false
          }
      } else {
          stack.push(el)
      }
  }
  return stack.length === 0
};

//결론
// 역시 문제를 많이 풀어봐야한다.
// 언젠가 유사한 형식의 문제를 한번이라도 보면 접근법이 굉장히 빨리 떠오르게 되는 것 같다.