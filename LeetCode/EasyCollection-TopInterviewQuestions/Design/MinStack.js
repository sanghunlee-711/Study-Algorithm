//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]c

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:
// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

//First Trial
//예~~~ 전에 강의 들으면서 한번 유사한 경험을 한 것 같아서
// 노드말고 배열 적용해서 풀어냈다
// this.min을 설정해서 매번 push,pop에서 업데이트를 할 까도 했지만
// 생각대로 잘 되지 않아서 걍 getMin은 반복문 한번 돌리는걸로 상수시간 만족하기로 했다.
var MinStack = function() {
  this.data = [];
  this.last = -1;
};

MinStack.prototype.push = function(val) {
  this.data[++this.last] = val;
};

MinStack.prototype.pop = function() {
  delete this.data[this.last];
  --this.last;
  //원래 팝은 원소 반환 아닌가 흠..
};

MinStack.prototype.top = function() {
  const value = this.data[this.last];
  return value;
};


MinStack.prototype.getMin = function() {
  let min = 2**31 - 1;
  for(let i = 0; i <= this.last; i +=1) {
      if(this.data[i] < min) min = this.data[i];
  }
  
  return min
};

//Best solution
// 그냥 minStack과 데이터를 실제로관리할 stack두개를 만들어
//메모리에 저장해놓는 방식을 사용하였다
const MinStack = function() {
  this.stack = [];
  this.minStack = []; //최소값 저장용
};


MinStack.prototype.push = function(val) {
  
  this.stack.push(val); //데이터 저장을 위한 stack에는 그냥 push
  
  //최솟값 저장을 위한 스택이 비어있거나 , 값이 더 작으면
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length-1] ) {
    //minStack에 넣어줌.
    this.minStack.push(val);  
  };
};


MinStack.prototype.pop = function() {
  
  //만약 최소값 스택과 데이터 스택에 똑같이 모두 저장되어있으면
  //pop할때 같이 빼줘야함.
  if (this.minStack[this.minStack.length-1] === this.stack[this.stack.length-1]) this.minStack.pop();
  
  this.stack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

MinStack.prototype.getMin = function() {
  //minStack중 제일 마지막에 들어간 것이 제일 작은 수 이므로
  return this.minStack[this.minStack.length-1]
};