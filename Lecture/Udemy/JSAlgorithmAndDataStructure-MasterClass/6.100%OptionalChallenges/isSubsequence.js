function isSubsequence(str1, str2) {
  let i = 0; //짧은거
  let j = 0; //긴거
  while(j < str2.length) {
      if(str1[i] === str2[j]) i++;
      if(i === str1.length) return true;
      j++;
  }
  return false;
// good luck. Add any arguments you deem necessary.
}

//solution
//재귀로도 할 수 있네 ..
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}