/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
투포인터 문제 같음 
앞 뒤에서 조여가며 찾으면 될듯
*/
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  
  while(start < end) {
      let sum = numbers[start] + numbers[end];
      console.log(sum);
      if(sum < target) {
          start++;
      }else if(sum > target) {
          end--;
      }else {
          return [start+1,end+1];
      }
  }
  return [start+1,end+1];
};