// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

//Iterator
function isPalindrome(str){
  for(let i = 0, j = str.length -1; i <= j; i++, j--){
      if(str.charAt(i) !== str.charAt(j)) return false;
  }
  return true;
// add whatever parameters you deem necessary - good luck!
}

//recursive
function isPalindrome(str) {
  let answer = true;
  const helper =(str, idx) => {
    if(idx > str.length  -1) return true;
    if(str[idx] !== str[str.length - idx - 1]) return false;
    return helper(str, idx+1);
  }
  return helper(str, 0);
}

//solution
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}