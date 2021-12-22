class Queue{
  constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
  }
  
  enqueue(value) {
      this.queue[this.rear++] = value;
  }
  
  dequeue() {
      const value = this.queue[this.front] ;
      delete this.queue[this.front];
      this.front += 1;
      return value;
  }
  
  peek(){
      return this.queue[this.front]
  }
  
  size(){
      return this.rear - this.front;
  }
}


//[1, 1, 9, 1, 1, 1]	=> (인덱스)[0,1,2,3,4,5] =>(정렬된 인덱스) [2,3,4,5,0,1]
//우선순위에 따라 큐를 통해 인덱스를 이용한 정렬이 한번 필요함
// 정렬 기준은 peek한 값이 그 다음 값보다 큰 경우 정렬이 멈추면 될 듯.
//정렬 후에 location의 인덱스 위치를 반환하면 됨.

function solution(priorities, location) {
  const queue = new Queue(priorities);
  for(let i = 0; i < priorities.length; i +=1){
      queue.enqueue([priorities[i], i]); //값과 인덱스 같이 넣어서 쉽게 판단해보자
  }
  
  //값에따라 내림차순 정렬을 하자 //우선순위 파악을 위함
  priorities.sort((a,b)=>b-a);
  
  
  let count = 0;
  while(true){
      const val = queue.peek();
      if(val[0] < priorities[count]){ //한개라도 우선순위가 높은것이 존재하면 뒤로 가야하므로 
          queue.enqueue(queue.dequeue())
      }else{ //우선순위가 높지 않다면 일단 dequeue를하고 count를 올려서 우선순위 판단 배열의 순서를 올려줌.
          const dequeueVal = queue.dequeue();
          count += 1;
          if(location === dequeueVal[1]){ //만약 찾는 위치의 값이라면 count 리턴
              return count
          }
      }
  }
  
}