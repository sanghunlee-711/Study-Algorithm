//ref: https://leetcode.com/problems/remove-duplicates-from-sorted-array

//메모리상 저장되어 있는 배열 자체를 바꿔줘야함 ㅎㅅㅎ

// 1트
const nums1 =[1,1,2];

let nums2=[1,1,1,2,2,2,2,2,2,3,4,5,6,6,6,6,6,7,10,10];

const removeDuplicates =  (nums) =>{
  for(let i = 0; i < nums.length; i += 1){
    const now = nums[i];    
    
    for(let j = i+1; j < nums.length; j += 1){
      if(now === nums[j] && now !== "_"){
        nums[j]= "_";
      }else if(nums[j]!=="_"){
        nums[i+1] = nums[j];
        nums[j] = "_"
        break;       
      }
    }
  }
  console.log(nums)
  return nums.length;
}

removeDuplicates(nums1);

//메모리상 모든 걸 바꿔주라는 말을 보고 시간복잡도 생각 x 하고 일단 넣어줌 => 안됨

//2 트 -> 성공
// 1트에서 _ 자체를 NaN으로 보고 오답 내버림 (이럴거면 예시에 왜 _를 넣어준건지 ..)
// 여튼 그래서 간단하게 배열에서 값을 지워줄 수 있는 splice메서드를 사용 + 삭제 된 경우 i를 하나 줄여서 루핑을 한칸 전부터 만듬.
const removeDuplicates = (nums) =>{
  for(let i = 1; i < nums.length; i += 1){
    const ex = nums[i-1];
    if(ex === nums[i]){
      nums.splice(i,1);
      i -=1 ;
    }
  }
  console.log(nums)
  return nums.length;
}


//베스트답
// 댓글들 보니 원본배열에서는 실제 제대로 수정이 안되어있다고 아우성이 있음 (일부 동의..요구사항 자체가 원본배열을 제대로 수정하는거 아닌가 ?..)
const test =(nums)=>{
  if(nums.length < 1) return 0;
  
  let left =0;
  let count = 1;
  for(let i = 1; i < nums.length; i+=1){ //원본배열 수정 없이 count를 통해서 다른 값인 경우의 길이만 반환해줌.
    if(nums[i] !== nums[left]) {
      left +=1 ;
      nums[left] = nums[i];
      count += 1;
    }
  }
  console.log(nums);
  return count;
}




