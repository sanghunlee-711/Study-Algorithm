/*
 subarray of which the sum is greater than or equal to the integer passed to the function. 
  If there isn't one, return 0 instead.
 */

function minSubArrayLen (arr, target) {
  let start= 0, end = 0, total= 0, minLen = Infinity;
  
  while(start < arr.length) {
      //현재 윈도우가 타겟값보다 작은경우 윈도우를 오른쪽으로 확장
      
      if(total < target && end < arr.length){
          total += arr[end];
          end++;
      //현재 윈도우가 타겟값보다 크거나 같으면 윈도우를 줄임
      }else if(total >= target) {
          minLen = Math.min(minLen, end-start);
          total -= arr[start];
          start++
      //현재 토탈이 target보다 작고 end가 끝에 다다랐을때 멈춤
      }else{
          break;
      }
  }
  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2,3,1,2,4,3],7); //2 -> [4,3]
minSubArrayLen([2,1,6,5,4],9); //2 -> [5,4]