//배열을 이용하면 구현이 간단하므로 코테에서 활용해보자.
// 단점은 front와 rear가 무한정 커질 수 있는 단점이 존재.
class Queue{
  constructor (){
    this.queue = []; //요소를 넣을 array 만들어주기
    this.front = 0; //front 인덱스
    this.rear = 0; //rear 인덱스
  }

  enqueue (value) {
    this.queue[this.rear++] = value; //rear의 값을 올려서 거기에 값 추가
  }
  
  dequeue(){
    const value = this.queue[this.front]; //임시로 변수에 값을 넣고
    delete this.queue[this.front]; //삭제하고
    this.front += 1; //프론트 인덱스 값을 올려주고
    return value //값 반환
  }

  peek(){ //큐의 가장 앞에 있는 값 반환하는 메서드
    return this.queue[this.front];
  }

  size(){ // 큐의 크기 반환하는 메서드
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.size()); // 3
console.log(queue.peek()) // 2
console.log(queue.dequeue()) // 2
console.log(queue.dequeue()) // 4