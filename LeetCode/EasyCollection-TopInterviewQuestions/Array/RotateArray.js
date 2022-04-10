const nums = [1,2], k = 3


//1st trial => 통과
const rotate = (nums, k) =>{
  const last = nums.length;
  
  //Edge Case
  if(k < 0 || k >= last) { //아래 케이스 사용못하는 경우
    for(let i = 0; i < k; i+=1){
     nums.unshift(nums.pop())  
    }
    return nums;
  }
  
  let sampleArr = [];
  
  for (let i = 0; i < k; i += 1){ //시간복잡도 줄이기 위해 sampleArr생성
    sampleArr[i] = nums[last - k + i]; //sample에 rotate할 것 넣기
  }
  
  for(let i = last - k - 1; i>= 0; i-=1){ //nums 밀기
    nums[i+k] = nums[i];
  }
  
  for(let i = 0; i < k; i += 1){ //nums에 sample값 넣기
    nums[i] = sampleArr[i];
  }
   
  return nums;
}
rotate(nums, k)


//best answer
const rotate = (nums, k) =>{
  function reverse(arr, start, end) { //순수하게 앞뒤 뒤집는 함수 생성 O(n)
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

k %= nums.length; //뒤에서 몇개인지 만듦

reverse(nums, 0, (nums.length - 1)); //일단 전체 한번 뒤집음
reverse(nums, 0, (k - 1)); //0 부터 k-1만큼 뒤집음
reverse(nums, k, (nums.length - 1)); //k부터 끝까지 다시 뒤집음
return nums;
}

//best Answer 2
var rotate = function(nums, k) {
  //splice메서드는 배열의 기존요소를 삭제 또는 교체하거나 새 요소를 추가하여 원본배열을 변경함

  const arr = nums.splice(nums.length - k % nums.length); //잘라낸거 arr변수에 저장
  nums.unshift(...arr) // 다시 잘라낸거 앞에서 넣음으로 뒤집어짐.
};

// 천재가 너무 많다