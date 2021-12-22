// 배열로 구현하는 것보다는 조금 더 복잡하기에 코테에서는 그냥 배열로 만들어서 쓰는 것을 추천! 하지만 구현법을 알고는 있어야한다!
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) { //연결리스트의 enqueue와 유사함
    const newNode = new Node(newValue);
    if(this.head === null) { //비어있는 경우
      this.head = this.tail = newNode; //head와 tail모두 newNode가 됨
    }else{
      this.tail.next = newNode; //??...
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek(){
    return this.head.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.size); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4