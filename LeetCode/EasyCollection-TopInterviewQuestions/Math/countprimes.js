
// first trail
// 평소에 하던 방식으로 소수 찾는 함수 만들고 제곱근까지만 카운트해서 logN으로 만들기
// 시간초과 뜸
// 힌트보니 아리스토테네스 체 뭐시기 써야하나봄 ..
const isPrime = (num) =>{
  if(num <= 1) return false;
  
  for(let i = 2; i*i<=num; i+=1){
    if(num % i === 0) return false;
  } 
  return true
}

const solution = (n) =>{
  let count = 0;
  for(let i = 1; i < n; i+=1) {
    if(isPrime(i))  count ++;
  }
  return count;
}

// Hint Trial
const isPrime = (num) =>{
  if(num <= 1) return false;
  
  for(let i = 2; i*i<=num; i+=1){
    if(num % i === 0) return false;
  } 
  return true
}

const solution = (n) =>{
  let isPrime = [];
  for(let i = 2; i < n; i+=1){
    isPrime[i] = true;
  }
  
  for(let i = 2; i*i<n; i+=1){
    if(!isPrime[i]) continue;
    
    for(let j = i*i; j < n; j +=i) {
      isPrime[j] = false;
    }
  }
  
  let count = 0;
  for(let i = 2; i < n; i +=1) {
    if(isPrime[i]) count ++;
  }
  
  return count;
}

// best Answer

const countPrimes = (n) => {
  let count = 0;
  const isPrime = Array(n).fill(true); // 테니스채 만들어놓음

  for (let i = 2; i < n; i++) { //2부터 반복문 시작
    if (isPrime[i]) { // true인 경우 count 올리고 아리스토테네스체 이론처럼 i부터 n까지 해당하는 i의 배수들  다 false로 만들어줌
      count++;
      for (let j = i; j < n; j += i) isPrime[j] = false; // 다시 체크해야하는 필요성 없애줌.
    }
  }
  return count;
};