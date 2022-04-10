// N개 마을 중 K시간 이하로 배달이 가능한 마을을 찾아야 함
// 그래프 간선에 가중치가 있고 양수임
// K시간 이하인 마을을 알아내기 위해 1번 마을에서 특정마을까지의 최단거리를 알아야함.
// BFS, DFS도 가능하나 간선에 가중치가 있으므로 다익스트라가 유용함

//다익스트라를 위해서는 힙을 구현해야하고 정점을 낮은 순서대로 찾기 위해
// 최소힙을 구현함.

class MinHeap {
  constructor(){
    this.heap = [null];
  }

  push(value){
    this.heap.push(value);
    let currentIndx = this.heap.length-1;
    let parentIndex = Math.floor(currentIndx/2);

    //간선의 값을 비교하도록 수정함 {node: "num" // 정점의 번호, const:"num" // 간선의 값}
    while(parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndx] = temp;

      currentIndx = parentIndex;
      parentIndex = Math.floor(currentIndx/2);
    }
  }


  isEmpty() {
    return this.heap.length === 1;
  }

  pop(){
    if(this.isEmpty()) return null;
    if(this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    //// 실제로 왼쪽, 오른쪽에 값이 있는지 체크하는 조건을 추가
    while((this.heap[leftIndex] && this.heap[currentIndex].cost > this.heap[leftIndex].cost) || 
              (this.heap[rightIndex] && this.heap[currentIndex].cost > this.heap[rightIndex].cost)) {
                if(this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
                  const temp = this.heap[currentIndex];
                  this.heap[currentIndex] = value;
                  this.heap[rightIndex] = temp;
                  currentIndex = rightIndex;
                }else{
                  const temp = this.heap[currentIndex];
                  this.heap[currentIndex] = value;
                  this.heap[leftIndex] = temp;
                  currentIndex = leftIndex;
                }
                leftIndex = currentIndex*2;
                rightIndex = currentIndex * 2 + 1;
              }
              return returnValue;
  }
}

//몇번 만들다보면 손에 익어서 익숙해진다고 한다.. 과연 ㅎㅎㅎㅎ...

// 먼저 힙을 생성합니다.
// 각 정점에 대한 최단 거리를 저장할 배열을 무한대로 초기화합니다.
// 힙에 시작점을 추가합니다.
// 힙이 비어있지 않을 때 까지 루프를 돕니다.
// 선택된 정점에서 갈 수 있는 정점을 찾습니다.
// 더 짧은 경로라면 값을 갱신합니다.
// 루프가 종료되면 최단 거리 배열을 반환합니다.

//다익스트라 생성
function dijkstra(road, N) {
  const heap = new MinHeap(); //우선순위 큐 (힙)
  heap.push({node:1, cost:0}); //1번 마을 부터 시작

  const dist = [...Array(N+1)].map(()=> Infinity) // 계산편의성을 위해 N+1길이 만큼 리스트를 생성
  dist[1] = 0; //1번마을의 거리는 무조건 0으로 세팅

  while(!heap.isEmpty()) { //힙이 비어있지 않은 경우라면
    //cost가 가장 낮은 정점을 뽑을 것.
    const {node:current, cost: currentCost} = heap.pop();

    for(const[src, dest, cost] of road) { //루프를 돌며 시작점, 도착점, 비용을 꺼내본다.
      const nextCost = cost + currentCost;

      //양방향 고려하여 작성
      if(src === current && nextCost < dist[dest]) {
        //src가 현재 선택된 정점이며 목적지까지 더 저렴한 경우
        dist[dest] = nextCost; //거리를 갱신한다.
        heap.push({node: dest, cost: nextCost});
      } else if(dest == current && nextCost < dist[src]) {
        //dest가 현재 선택된 정점이면서 목적지 까지 더 저렴할 경우
        dist[src] = nextCost; //거리갱신
        heap.push({node:src, cost: nextCost});
      }

    }
  }
  return dist; //1번 마을부터 각 마을까지의 최단 거리
}

function solution(N,road, K) {
  const dist = dijkstra(road,N);
  return dist.filter(x=> x <= K).length;
}


