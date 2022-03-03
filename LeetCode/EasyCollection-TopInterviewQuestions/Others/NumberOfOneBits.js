//ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/565/

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

// Example 1:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

// Constraints:
// The input must be a binary string of length 32.
// Follow up: If this function is called many times, how would you optimize it?

//First Trial
//이거 사실.. 메서드가 있는데 toString('32)인가? 없이 풀라는게 의도 같으니 해보려한다

const solution = (n) =>{
  //2진법으로 변경하고 0을 다 자른 다음 전체 길이를 1의 길이가 되므로 답
  return n.toString(2).split('0').join("").length;
}


//Finding Solution
const solution = (n) =>{
  // 정규표현식으로 1만 솎아내서 길이 보고 없으면 0 ㅋㅋㅋㅋㅋ.. 잘하네...
  return n.toString(2).match(/1/g)?.length ?? 0;
}

//비트연산자를 활용한 방법
const solution = (n) =>{
  let answer = 0;
  let currentNumber = 1;
  for (let i = 0; i < 32; i++) {
    //And(&)비트 연산자는 두개 다가 1이면 1을 반환함
    //그러므로 둘다 1인 경우 0이 아니므로 플러스를 해줌
    if ((n & currentNumber) !== 0) {
      answer++;
    }
    //비트를 좌로 밀어주는 연산자임 쉽게 십진법 적으로 생각하면 * 2와 같음
    //아래와 같이 하나씩만 left shift해주면 1만 계속 좌로 움직이기에 매칭이 되는것만 계속 잡아서 답의수를 늘려갈 수 있는 것
    // 1 => 1
    // 2 => 10
    // 4 =>  100
    // 8 => 1000
    currentNumber = currentNumber << 1;
  }
  return answer;
}

//Best solution 
  //111101이렇게 되어있는 수를 계속해서 1을 빼주고
  // & 연산자는 AND비트 연산자로 대응 되는 비트가 모두 1이면 1을 반환하게 된다.
  //그니까 다 대응 했을때 0 나올때 까지 계속 1씩만 빼주면서 카운트를 올려주면 답이 나오게 됨
var hammingWeight = function(n) {
  let counter =0;
  while (n!=0){
      n=n&n-1
      counter++;
  }
  return counter;
};