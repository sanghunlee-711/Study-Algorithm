class Queue{
  constructor(maxSize) {
    this.maxSize = maxSize; //환형이므로 맥스가 있어줘야함.
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if(this.isFull()){
      console.log("Queue is Full");
      return;
    }

    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize; //환형큐에서는 인덱스를 잘 조절해주는 것이 핵심.
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize; 
    this.size -= 1;
    return value;
  }

  isFull(){
    return this.size === this.maxSize;
  }

  peek(){
    return this.queue[this.front];
  }
}


const queue = new Queue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(16); // Queue is Full
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.size); // 2
console.log(queue.peek()) // 4
queue.enqueue(16);
queue.enqueue(32);
console.log(queue.isFull()); // true