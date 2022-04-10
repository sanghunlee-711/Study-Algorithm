// 키워드: 최소의 비용, 모든섬이 서로 통행 가능하도록


//최상위 원소를 찾기위한 find함수
function find(parent, x) {
  if(parent[x] === x) {
    return x;
  }

  //경로 압축최적화를 위한 재귀 처리
  return parent[x] = find(parent, parent[x]);
}

//두 원소를 합치기
function union(parent,a,b) {
  a = find(parent, a); //a의 최상위 원소
  b = find(parent, b); //b의 최상위 원소

  if(a < b) { //더 낮은 원소가 부모원소가 되도록 규칙을 만듦
    parent[b] = a;
  } else{
    parent[a] = b;
  }
}

function compare(parent, a, b) {
  a = find(parent,a); // a의 최상위 원소
  b = find(parent,b); // b의 최상위 원소
  return a === b;
}


function solution(n, costs) {
  let answer = 0;
  //1. 각 간선을 정렬하고 서로소 집합을 위한 자료구조 정의
  const sortedCosts = costs.sort((a,b)=> a[2]-b[2]);
  const parent = Array.from({length:n}, (_,i)=> i);

  //2. 정렬된 간선을 순회하며 두 정점을 Union-Find알고리즘을 통해 병합 및 Cycle체크를 진행
  for(const [a,b,cost] of sortedCosts) { //각 정점과 간선의 가중 치
    if(!compare(parent,a,b)) { //두 원소가 같은 집합인지 체크, 같다면 cycle이므로 패스
      answer += cost; //answer에 가중치를 더 함
      union(parent, a, b); //두 정점을 하나의 집합으로 만듦.
    }
  }

  return answer;
}