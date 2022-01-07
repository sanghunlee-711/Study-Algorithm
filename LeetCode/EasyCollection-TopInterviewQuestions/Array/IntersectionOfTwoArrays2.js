// Given two integer arrays nums1 and nums2, 
//return an array of their intersection. 
//Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


//처음에 문제를 제대로 안 읽어 별생각 없이 이중포문으로 같은 것 있으면 배열에넣고 테스트 돌리니 당연히 실패
//그래서 hashMap을 이용해서 풀어보았다.

const intersect = (nums1, nums2) => {
  const hashMap ={};
  const answer = [];

  for(let num1 of nums1){ //배열 하나 선재 기재
    hashMap[num1] ? hashMap[num1]++ : hashMap[num1] = 1;
  }
  
  for(let num2 of nums2){
    if(hashMap[num2] > 0){ //이미 해당키가  기재 되어 있으면 답변 배열에 넣고
      // 하나 감소시켜줌 -> nums1에서 한번 존재하고 nums2에서도 한번 존재하게 되는 경우임
      // 다음에 같은 숫자가 나와도 0이되어 기재가 되지 않음 이러면 두배열에 중복되어 불린 수만큼 카운트가 됨.
      hashMap[num2]-- 
      answer.push(num2);
    }
  }
  return answer;
};

// 베스트 답변 -> 이러면 O(n^2) 아닌가 생각이 드는데 효율을 더 빠르다 허허
// js 고차 함수를 잘 활용한 사례
const intersect = (nums1, nums2) => {
  const ans = [];
  nums1.forEach(v => {
    if (nums2.includes(v)) {
      nums2.splice(nums2.indexOf(v), 1); //그냥 들어있으면 해당 인덱스 찾아서 splice로 제거
      ans.push(v); //답변에 추가
    }
  });
  return ans;
};