function solution(s){
  // Stack
  // ['(','('] //pop pop...
  // (())()
  //닫는 괄호가 나오면 pop, 여는괄호면 stack에 push
  //최종적으로 stack이 비어야함..
  const stack = [];
  for(const c of s){
    if (c === '(') {
      stack.push(c);
    }else{
      if(stack.length === 0){
        return false;
      }
      stack.pop()
    }
  }

  return stack.length === 0;
}

function solution2(s){

//  굳이 값을 꺼내 쓰지 않으므로 stack의 방식을 사용하지만 배열을 사용하지 않아도 되므로 아래와 같이도 가능
// 이러면 이제 스택보다는 메모리를 조금 더 사용할 수 있게 되겠다!
  let count = 0;
  for(const c of s){
    if (c === '(') {
      count += 1;
    }else{
      if(count === 0){
        return false;
      }
      count -= 1;
    }
  }

  return count === 0;
}