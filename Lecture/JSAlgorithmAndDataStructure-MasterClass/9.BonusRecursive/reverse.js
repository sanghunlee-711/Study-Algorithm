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

//solution
//여기서도 slice를 활용해서 하나씩 자르고 남은걸 넣어주는 방식으로 재귀를 진행

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
