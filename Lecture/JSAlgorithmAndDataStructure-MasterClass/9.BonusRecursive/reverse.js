function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  let answer = '';
  const helper = (strings, idx) => {
      if(idx < 0) return;
      answer += strings[idx];
      idx--;
      return helper(strings, idx);
  };
  
  helper(str, str.length-1);
  return answer;
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'