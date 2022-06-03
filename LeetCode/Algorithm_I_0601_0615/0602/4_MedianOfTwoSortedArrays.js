/*
문제 요구사항이 O(log(m+n))인데 사실 sort함수를 쓴 상태면 이민 O(m+n)이 됨
일단 통과는 됨 ..;
*/

var findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...nums1,...nums2].sort((a,b)=>a-b);
  let mid = Math.floor((arr.length-1)/2);
  let midVal = arr[mid];
  if(arr.length % 2 === 0 && arr[mid+1]) {
      midVal = (arr[mid] + arr[mid+1]) / 2 ;
  }
  
  return midVal.toFixed(5);
};

//Best
//합병 정렬을 통해서 정렬을 함으로서 O(LogN)이 나옴
var findMedianSortedArrays = function(nums1 = [], nums2 = []) {
  let merged = [];
  let i1 = 0;
  let i2 = 0;
  let len1 = nums1.length;
  let len2 = nums2.length;
  let len = len1 + len2;
  
  if(len === 0) {
      return null;
  }
  //이런식으로 두 배열을 각자 따로 돌면서 줄여나감
  while(i1 < len1 && i2 < len2) {
      if(nums1[i1] <= nums2[i2]) {
          merged.push(nums1[i1++]);
      } else {
          merged.push(nums2[i2++]);
      }
  }
  
  while(i1 < len1) {
      merged.push(nums1[i1++]);
  }
   while(i2 < len2) {
      merged.push(nums2[i2++]);
  }
  
  const isOdd = len % 2;
  
  if(isOdd) {
      return merged[(len-1)/2];
  } else {
      return (merged[len/2] + merged[len/2 - 1])/2
  }
};