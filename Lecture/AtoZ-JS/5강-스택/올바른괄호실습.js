function solution(s){
  let stack = [];
  
  for (let i = 0; i < s.length; i +=1){
      if(s[i] === '('){
        //열린괄호는 stack에 넣기
          stack.push(s[i]);
      }else{
          if(!stack.length){
            //pop 시도시 스택이 비어있으면 애초에 false
              return false
          }else{
            //pop해서 있으면 짝이 맞아지는 것임.
              stack.pop();
          }
      }
  }
  
  //stack이 비어있지 않으면 false
  return stack.length === 0;
}