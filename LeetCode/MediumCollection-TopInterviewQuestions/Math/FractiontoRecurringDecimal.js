/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
/*
일단 기본 두개를 나누긴하는데 ..
뒤의 자릿수가 반복이되면 소수점자릿수는 ()로 감싸서 나타내줘야함
겹치지 않으면 그냥 붙이면 됨
나누고 난 뒤 겹치는 부분을 어떻게 찾는지가 관건일 듯.
1. rest부분을 스택에 값을 막 넣어
2. 같은거 발견하면 stack에서 빼 (이걸 하려면 set에 기재를 해야함);
3. stack 길이가 0 이되면 그 idx까지가 반복이려나
-> 1/6 케이스를 처리하지 못하므로 정답이 될 수 없음.
*/
var fractionToDecimal = function(numerator, denominator) {
  let val = ""+(numerator/denominator);
  //나머지가 없는 경우 반환.
  if(val.indexOf(".") < 0) return val;

  const [quoient,rest] = val.split(".");

  let restResult = "";
  let stack = [];
  let set = new Set();

  for(let i = 0; i < rest.length; i++) {            
      //set에 기재는 되었지만 stack이 비어버린 상황이면 중복이 한번 돌아간 케이스임.
      if(set.size && !stack.length) {
          
          return quoient+"."+"("+ restResult + ")";
      }

      //set에 기재된건 앞에 이미 기재되었으므로 stack에서 제거해줌.
      if(set.has(rest[i])){
        stack.pop();  
      } 
      else {
          //기재 안된경우 아직 중복이 가능한 케이스이므로 stack과 set에 넣어줌.
          stack.push(rest[i]);
          set.add(rest[i]);
          restResult += rest[i];
      }
  }
  //나머지가 중복이 없는 경우 반환
  return quoient+"."+ restResult;
};

//Discussion에서 찾은 답
/*
나누기를 계속 한다고 단순한게 생각해보자
map에 나머지들 기재해놓을 것인데
값을 map의 key로 인덱스를 map의 value로 하자.
*/
var fractionToDecimal = function(numerator, denominator) {
  if(numerator === 0) return "0";
  if(denominator === 0) return numerator < 0 ? -Infinity : Infinity;

  let answer = "";
  //둘다 음수 혹은 양수인지 확인을 위해 sign 메서드 사용 음수이면 -1반환 양수이면 +1을 반환해줌.
  if(Math.sign(numerator) !== Math.sign(denominator)) answer += "-";
  
  let n = Math.abs(numerator);
  const d = Math.abs(denominator);
  
  //js비트연산자가 32비트기반이므로 /연산자 쓰지말라고 한다.
  //큰수가들어오면 숫자가 꼬여서 숫자가 안될 수도 있기 대문이라고 함.
  //그래서 몫을 먼저 답에 붙여줌
  answer += Math.floor(n/d)//몫만 먼저 넣어주자
  n = n%d;
  
  if(n === 0) return answer;
  //이제 소숫점 붙여줌.
  answer += ".";
  const map = new Map();
  
  while(n !== 0) {
      //map에 나머지를 계속 기재해줄 것임.
      map.set(n, answer.length);
      
      //나누기를 계속 진행하는 과정
      n*=10;
      answer += Math.floor(n/d);
      n%=d;
      
      if(map.has(n)) return `${answer.substring(0,map.get(n))}(${answer.substring(map.get(n))})`;
  }
  return answer;
};

/*
연산문제는 오히려 연산 메서드를 쓰는 것 보다 조금더 수학적으로 접근하는게 좋은접근으로 갈 확률이 높은 것 같음.
*/