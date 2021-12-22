//이미 js에 모두 구현되어있어 이런식으로 편하게 배열을 활용 가능
const stack = [];

//push
stack.push(1);
stack.push(2);
stack.push(3); // [1,2,3]

//pop
stack.pop();
console.log(stack); //[1,2]

//Get top
console.log(stack[stack.length - 1]) // 2