// 이미지만 봐도그래프문제고 노드랑 간선이라는 메시지만 봐도 그래프 문제이다..
// 최단경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n,edge) {
  //인접리스트로 그래프 생성
  const graph = Array.from(Array(n+1), ()=>[]);

  for (const [src, dest] of edge) {
    //출발지에서 (src) 도착지(edge)를 인접리스트에 추가해준다.
    graph[src].push(dest)
    graph[dest].push(src) //양방향이라고 문제에 기재됨.
  }

  //각 거리를 기재할 수 있도록 배열을 만듦
  const distance = Array(n+1).fill(0);
  distance[1] =1;

  //BFS(너비우선 탐색) -> 가까이있는 것 부터 하나씩 탐색해나가기
  const queue = [1];
  while( queue.length > 0) {
    const src = queue.shift(); //shift는 O(n)이지만 요소가 적을 경우에는 JS엔진에서 최적화를 해줌.
    for(const dest of graph[src]) { //출발지로부터 목적지의 요소를 뽑아 줌
      if(distance[dest] === 0) {//한번도 가지 않은 곳(가지 않은 경로)
        queue.push(dest); //추가를 해줌
        distance[dest] = distance[src] + 1; //도착지는 출발지의 +1 경로가 됨
      }
    }
  }

    const max = Math.max(...distance); //거리 중 제일 큰값;
  return distance.filter(item=> item === max).length;
}