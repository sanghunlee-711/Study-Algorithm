/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/



// 66: Wrong
/*
map, set, hash등으로 전체 인자들 기록하면서 마지막에 false인것만 리턴하면 되나
다 짝있다고 했으니 뭐.. 예외는 없어도 되겠지?..
1. false로 기록
2. 같은것 만나면 true로 기록
3. hash회문 다 돌면서 false인거 리턴
*/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let hash = {};
  for(let i = 0; i < A.length; i++) {
      const odd = A[i];
      hash[odd] = (hash[odd] !== undefined ? true : false);
  }
  for(const key in hash) {
      if(!hash[key]) return Number(key);
  }
  
  return 0;
}


// 100: Pass
//hash로 뭔가 안되서 걍 map으로 돌림
// 대신 여러가지의 unpair가 있을때도 대응이 될 것.
function solution(A) {
  const map = new Map();
  for(let i = 0; i < A.length;i++) {
      const odd = A[i];
      if(map.has(odd)) map.delete(odd)
      else map.set(odd, null);
  }
  const arr = [...map.keys()];
  
  return arr.length === 1 ? arr[0] : arr.join(", ");
  // write your code in JavaScript (Node.js 8.9.4)
}