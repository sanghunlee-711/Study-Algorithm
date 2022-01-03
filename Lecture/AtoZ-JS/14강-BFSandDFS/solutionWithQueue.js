class Queue {
  constructor(){
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  size(){
    return this.rear - this.front;
  }

  isEmpty(){
    return this.rear === this.front;
  }
}

const solution = (n, edge) =>{
  const graph = Array.from((Array(n+1)), ()=>[]);

  for(const[src, dest] of edge) {
    graph[src].push(dest); //출발지에 도착지 연결
    graph[dest].push(src) //도착지와출발지 양방향
  }

  //거리 계산
  const distance =  Array(n+1).fill(0);
  distance[1] = 1; //첫 정점 (1번[f레벨 1]) 의 경우 길이를 1이라고 지점해줌

  //BFS
  const queue = new Queue();
  queue.enqueue(1); //첫 정점 (1번[f레벨 1]) 의 경우 길이를 1이라고 지점해줌
  while(!queue.isEmpty()) {
    const src = queue.dequeue();

    for(const dest of graph[src]) {
      if(distance[dest] === 0){
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1; 
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((el)=> el === max).length;
}