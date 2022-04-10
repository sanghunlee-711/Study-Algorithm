class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

//연결리스트를 활용한 큐
class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    // this.size = 0; 안쓸것 같으므로 제외
  }

  enqueue(newValue){
    const newNode = new Node(newValue);
    if(this.head === null){
      this.head = this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek(){
    return this.head.value;
  }

}

function solution (priorities, location) {
  const queue = new Queue();
  for(let i = 0; i < priorities.length; i +=1){
    queue.enqueue([priorities[i], i]); //큐에  값,인덱스랑 넣음
  }

  priorities.sort((a,b)=> b-a); //내림차순 정렬

  let count = 0;
  while(true){
    const currentValue = queue.peek();
    if(currentValue[0] < priorities[count]){ //우선순위가 지금 수행한 우선순위보다 작은경우
      queue.enqueue(queue.dequeue());
    } else{
      const val = queue.dequeue();
      count += 1;
      if(location === val[1]){
        return count
      }
    }
  }

  
}