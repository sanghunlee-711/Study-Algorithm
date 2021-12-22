class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }

  //끝에서 밀어넣기
  push(value) {
    const node = new Node(value);
    node.next = this.top; //헤드가 top임 그래서 들어가는 노드가 top이 됨
    this.top = node;
    this.size += 1;
  }

  //마지막 원소 제거
  pop() {
    const value = this.top.value;
    this.top = this.top.next; //헤드가 top임 그래서 포인터를 그 다음것으로 조절
    this.size -= 1; // 그리고 사이즈 조정
    return value;
  }

  size(){
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); //3
stack.push(4);
console.log(stack.pop()); //4
console.log(stack.pop()); //2
