//

//My Solution
function maxSubarraySum(arr, num){
   // add whatever parameters you deem necessary - good luck!
   let total = 0;
   //make initial Sum
   for(let i = 0; i < num; i ++) {
       total += arr[i];
   }
   let currentTotal = total;
 //   ([0,1,2,3,4],2);
   for(let j = num; j < arr.length; j++) {
       currentTotal += (arr[j] - arr[j-num]);
       total = Math.max(total, currentTotal);
   }
   return total ? total : null;
 }


function maxSubarraySum(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i=0; i<num; i++){
     total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }
  return total;
}