//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/762/
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

// Example 1:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Example 2:
// Input: x = 3, y = 1
// Output: 1

// Constraints:
// 0 <= x, y <= 231 - 1


//First Trial
//기존의 bits의 1개수 새는것과 같은로직으로 생각하고 0 부터 시작했을 때  겹치는 1 이 있으면 그 포지션 값을 따로 구해서
// 별도로 빼주려함
// 물론 실패함
const solution = (x,y) => { 
  let xPosition = 0;
  let yPosition = 0;
  let currNum = 1;
  
  for(let i = 0; i< 32; i++) {
    if(x & currNum !==0){
      xPosition = i;
    };
    currNum = currNum << 1;
  };
  
  currNum = 1;
  
  for(let i = 0; i< 32; i++) {
    if(y & currNum !==0){
      yPosition = i;
    };
    currNum = currNum << 1;
  };
  
  return Math.abs(xPosition - yPosition);
};

//Finding Solution
// 이처럼 비트 XOR 연산자는 대응되는 두 비트가 서로 다르면 1을 반환하고, 서로 같으면 0을 반환합니다.
var hammingDistance = function(x, y) {
  let xorResult = x ^ y; // 100(4) 1(1)
  let binaryFormat = xorResult.toString(2); //이진수로 다시 변경
  let hammingDistance = 0;
  
  for(let digit of binaryFormat.split('')) { //배열로 만들어서 회문 돌림
      if(digit === '1') hammingDistance++; //1이 보이면 거리를 늘리는 거임
  }
  
  return hammingDistance;
};

//Best sollution
//메모리를 좀더 줄인 동일한 방식의 답
var hammingDistance = function(x, y) {
  var res= (x^y).toString(2)
  var res1=res.split("");
   var res2=res1.filter(x => x == '1');
   return res2.length; 
};


//설명이 잘 되어있는 답변
//  n:          1110000
//  n - 1:      1101111
//  n & (n-1) = 1100000


//  n:          1100000
//  n - 1:      1001111
//  n & (n-1) = 1000000
var hammingDistance = function(x, y) {
  let n = x ^ y; // 101
  let count = 0;
  // bitCount implementation
  while(n) {
      count++;
      n = n & (n-1);
      // 101
      // 100
      // 0
  }
  return count;
};

var hammingDistance = function(x, y) {
  let n = x ^ y; // 101
  let count = 0;
  // Check if each bit equals 1 and return the sum:
  while(n != 0) {
      // 5 -> 101. 101 & 1 = 1
      // 2 -> 10. 10 & 1 = 0
      // 1 -> 1. 1 & 1 = 1
      // 0 -> 0. out of the loop
      count += n & 1;
      n >>= 1;
  }
  return count;
}