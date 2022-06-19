/**
 * @param {number[]} height
 * @return {number}
 */
/*
pseudo
1. start = 0, end = length-1;
2. start의 height가 end보다 더 크면  end -- 
3. start < end 가 회문끝나는 조건
4. Math.max로 계속 최대값 업데이트
*/

var maxArea = function(height) {
  let start = 0,
      end = height.length -1,
      maxVal = -Infinity;
      
  
  while(start < end) {
      const minHeight = Math.min(height[start], height[end]);
      const square = (end - start) * minHeight;
      
      if(height[start] > height[end]) {
          end --;
      }else{
          start++;
      }

      maxVal = Math.max(square, maxVal);
      
  }
  return maxVal
};

//Best Answer
/*
기본적인 로직은 똑같음
높이가 더 작은 쪽을 줄여주며 최대 넓이를 찾아보는 것이 제일 중요함
삼항연산자를 사용하고 변수 선언을 훨씬 줄임 ㅇㅇ..
*/
var maxArea = function(H) {
  let ans = 0, i = 0, j = H.length-1
  while (i < j) {
      ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
      H[i] <= H[j] ? i++ : j--
  }
  return ans
};