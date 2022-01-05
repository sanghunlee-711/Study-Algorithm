// Ref:https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [4,1,2,1,2]
// Output: 4


//1st trail -> try to use hash map -> solved
// 뭔가 더럽네 ..
const singleNumber = (nums) => {
  const hash = {}; // do count in here;
  nums.forEach((el)=>{
      hash[el] = (hash[el] ? hash[el] : 0) +1;
  })
  return +Object.entries(hash).filter((el)=> el[1] === 1).flat()[0]
}

const nums = [4,1,2,1,2];
console.log(singleNumber(nums));


//best solution..1
// Since all elements are occurring twice except one element, 
//the XOR of these element will be 0 and as we know 0 xor N = N, we get our desired output.
//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/discuss/1664143/Linear-Runtime-Complexity-and-Constant-Space-Solution-and-Explanation
const best = (nums) => {
  let num = nums[0];
  for(let i = 1; i < nums.length; i+=1){
    num ^= nums[i]; //XOR연산자로서 a = b ^ c 인경우 a^b를 하면 c가 나오고 b^c를 하면 a가 나옴
    //근데 이게 왜되는겨 ..;; -> XOR 연산자는 동일한 값 4^4 => 0, 가 됨, 0^4 = 0이 됨
    //트리플로 묶이게 되니 같은 값이 또 나와서 다시 연산을 하면 값이 이전의 nums[i]값으로 돌아가게 되고
    // 결국 한번 실행된 값만 num에 남게 되는 것.
  }
  return num;
}
//best solution 2
// set 자료형을 이용해 쉽게 삭제 추가를 함 -> 중복이라는 키워드가 있으면 set부터 고려해보는것도 나쁘지 않은듯
const best2 = (nums) => {
  const set = new Set();
  for (let num of nums){
    if(set.has(num)) set.delete(num);
    else set.add(num);
  }
  return [...set][0]
}

