/**
 * @param {number} x
 * @return {boolean}
 */
//first trial
//메서드 갈김
 var isPalindrome = function(x) {
  return `${x}`.split("").reverse().join() === `${x}`.split("").join()
};

//secondTrial
/**
 * @param {number} x
 * @return {boolean}
 */
//투포인터로 양쪽에서 좁히면서 확인
 var isPalindrome = function(x) {
  let str = x.toString();
  let start = 0, end = str.length-1;
  while(start < end) {
      if(str[start] !== str[end]) return false;
      start++, end--;
  
  }
  return true;
};