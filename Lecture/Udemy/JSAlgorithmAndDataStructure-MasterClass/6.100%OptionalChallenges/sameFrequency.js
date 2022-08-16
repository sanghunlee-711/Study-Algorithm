/*
  sameFrequency함수를 작성하는데 두개의 정수를 주고 두개의 숫자가 모두 같은 수 및 횟수를 쓰는지에 대한 여부를 판단해서
  true, false를 리턴하세요

  T.C: O(N)
  Sample:
   sameFrequency(182,281)  // true
    sameFrequency(34,14)  // false
    sameFrequency(3589578, 5879385)  // true
    sameFrequency(22, 222)  // false
*/

//My Solution
function sameFrequency(num1, num2){
    
  num1 = (num1+"").split("");
  num2 = (num2+"").split("");
  if(num1.length !== num2.length) return false;
  let hash1 = {};
  let hash2 = {};
  
  for(const num of num1){
      hash1[num] = (hash1[num] || 0) + 1;
  }
  
  for(const num of num2){
      hash2[num] = (hash2[num] || 0) + 1;
  }
  
  for(let key in hash1) {
      if(!(key in hash2)) return false;
      if(hash1[key] !== hash2[key]) return false;
  }
  return true;

// good luck. Add any arguments you deem necessary.
}


