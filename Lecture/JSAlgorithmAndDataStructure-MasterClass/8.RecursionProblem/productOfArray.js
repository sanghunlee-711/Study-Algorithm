/* write function called productOfArray
which takes in an array of numbers and returns the product of them all
*/

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray (arr) {
  let answer = 1;
  const end = arr.length-1;
  
  const helper = (arr, idx) => {
      if(idx > end) return;
      answer *= arr[idx];
      idx++;
      helper(arr,idx);
  }
  helper(arr, 0);
  return answer;
}