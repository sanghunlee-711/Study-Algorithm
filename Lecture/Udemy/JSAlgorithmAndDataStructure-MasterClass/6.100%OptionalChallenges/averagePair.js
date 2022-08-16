/* 
averagePair 함수를 짜는데 target값이 평균값으로 구해지는 두가지 인자가 정렬된 배열안에 있으면True반환
그렇지 않으면 false반환

averagePair([1,2,3], 2.5); //true
averagePair([-1,0,3,4,5,6], 2.5); // true

*/

function averagePair(arr, target){
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
      let avg = (arr[left]+arr[right])/2;
      if(target === avg){
          return true;
      }else if(target > avg) {
          left ++;
      }else{
          right --;
      }
  }
  return false;
}