//ref:


//Frist trial
//흠.. 방법자체가 보이질 않네
//1. 가장 긴
//2. palindrome만 됨
//3. 투포인터해서 양쪽부터 주욱 둘러오게 만들면 되긴 함.
//4. previous computation을 도대체 어케쓰란거임..
//걍 dp를 만들어서 계속 돌려보는건 어떨까..
//사실상 모든 케이스 다 찾는 수준
//answer가 업데이트가 안됨
// dp조건문 내부에는 찍히는데 .. 
// 마지막은 ""으로 나와서 당황
const isPal = (s) => {
  for(let i = 0, j = s.length-1; i<=j; i++, j--) {
      if(s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

const dp = (s, start, end , answer) => {
  if(answer.length >= s.substr(start,end)) return;
  if(isPal(s.substr(start,end))){
      answer = s.substr(start,end);
      return;
  };
  
  dp(s, start, end-1, answer);
  dp(s, start+1, end, answer);
}

var longestPalindrome = function(s) {
  let answer = '';
  dp(s,0, s.length, answer);
  return answer;
};


//Finding solution && BestAnswer
// 1. 하나나 두개 캐릭터를 늘려서 palindrome인지 판단해봄
// 양쪽으로 늘렸는데 그래도 palindrome이면 계속 늘려봄
// 조금(1,2)늘려봤는데 palindrome이 아니면  현재 str(답)이랑 비교해서 더 긴걸로 업데이트
var longestPalindrome = function(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < 2; j++) {
          let left = i;
          let right = left + j;
          while (s[left] && s[left] === s[right]) {
              left--;
              right++;
          }
          if (right - left - 1 > str.length) {
              str = s.slice(left + 1, right);
          }
      }
  }
  return str;
};

//Best Answer 
//위 찾은 답변에서 하나나 두개를 늘리는 이유는 Odd, even케이스를 모두 대응하기 위함이었음
//아래는 그걸 대응하기위해 두번의 checkfunction을 호출함.
var longestPalindrome = function(s) {
  let res = "";
  let resLength = 0;
  for (let i = 0; i < s.length; i++) {
      [res, resLength] = check(i, i, res, resLength, s);
      [res, resLength] = check(i, i + 1, res, resLength, s);
  }
  return res;
};
//여기서부터는 대응되게 계속 확장한 뒤 길이값 보고 업데이트 해주는 로직으로 동일.
const check = (l, r, res, resLength, s) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
  }
  l++;
  r--;
  let curLength = r - l + 1;
  if (curLength > resLength) {
      resLength = curLength;
      res = s.slice(l, r + 1);
  }
  return [res, resLength];
}

//문제점(결론)
// 이번문제는 중복을 체크하는 것도 아니었음
//그냥 반복문을 어떻게 효율적으로 만들고 원하는 값을 가져오는가의 문제였음
//결국 정답도 거의 모든케이스를 다 찾는 방식이지만 확장하는 과정에서 이미 판단을 하기에 연산을 줄임
//내가 시도한것은 O(n^3)이 됨ㅇ..
//while문을 잘쓰면 장인이 된다. 끗