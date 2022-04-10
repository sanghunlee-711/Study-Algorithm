//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/648/

// Reverse bits of a given 32 bits unsigned integer.
//32비트 넘버 주니까 뒤집으삼
// Note:
// Note that in some languages, such as Java, 
//there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// 자바는 좀 다르게 작동할 수도 있음
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.


// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Example 2:
// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

// Constraints:
// The input must be a binary string of length 32

// Follow up: If this function is called many times, how would you optimize it?

const solution = (n) =>{
  //이진수 string으로 바꾸고 쪼개서 배열로 만든뒤 뒤집고 다시 조인시켜서 스트링만들고 숫자로 만들면
  //될줄 알았음
  //아 비트연산자 못해먹겠다~~~
  return +n.toString(2).split().reverse().join('');
}

//Finding Solution
//공부하기 싫어서 걍 빨리 찾아봄
// 미래의 나에게 미루기로
var reverseBits = function(n) {
  var result = 0;
  var count = 32;

  while (count--) {//32bit니까 돌림
    result = result << 1; //한개씩 왼쪽으로 쉬프트 함.
    result += n & 1; //n이 1이면 result에 1더하고 아니면0 더함
    n = n >> 1; //n을 오른쪽으로 밀어줌
  };

  return result;
};


//Best Solution
var reverseBits = function(n) {
  //The steps to this process is
  //First chech if the bit I'm on is a 1 or a 0
  //I can achieve this with &, where I'm comparing n&1
  
  //The next step is to save that number and move it down to the left at the corresponding placement
  //To achieve this, I take that bit value, and push it to that place
  //If I'm starting at i = 0 and I want it at 32
  //Then I would move that using << 31 places
  //savedBit <<= (31- i)
  
  //Now that have our temporary bit at the correct placement, we'll contiuously add it to a result that we're returning
  //To achieve this bit addition, I can "add" with a ^ 0000 + 1000 = 1000
  
  //Before we repeat, we want to shift n because we have already taken care of that bit
  //So with each iteration, we're knocking off n by one bit
  //n >>= 1
  
  let result;
  let bit;
  
  for(let i = 0; i < 32; i++) {
      bit = n&1;
      bit <<= (31 - i);
      result ^= bit;
      n >>= 1;
  }
  
  return result >>> 0;
};