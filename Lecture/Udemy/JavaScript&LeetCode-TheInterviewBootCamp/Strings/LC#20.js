/**
 * @param {string} s
 * @return {boolean}
 */
//만약 ()[] 들어가면
//오픈일떄( ( , [ , { ) 는 스택에 넣고
// close를 맞이했을때 pop을해서 매치가 되면 넣으면 true아니면 false겠네

var isValid = function(s) {
  const stack = [];
  const openHash = {
      "(":")",
      "[":"]",
      "{":"}",
  };
  
  for(let i = 0; i < s.length; i++) {
      if(Object.keys(openHash).includes(s[i])){
          stack.push(s[i]);
      }else{
          const open = stack.pop();
          if(openHash[open] !== s[i]) return false;
      }
  }
  
  if(stack.length) return false;
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const stack = [];
  const openHash = {
    "(":")",
    "[":"]",
    "{":"}",
  };
  
  for(let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if(openHash[char]) {
          stack.push(char);
      }else if(openHash[stack.pop()] !== char) return false;
  }
  
  return stack.length === 0;
};