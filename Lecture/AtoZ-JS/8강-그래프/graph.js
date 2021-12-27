// 정점의 크기만큼 이차원 배열을 만들고 연결이 안된 상태로 초기화함
//  행렬의 렬부분을 시작지점 행부분을 도착지점으로 생각하고 true값을 넣으면 연결된 것으로 본다.
//  무방향 그래프를 구현하고 싶다면 모든 값을 대칭으로 넣어주면 된다.
const graphWithMatrix = Array.from(
  Array(5),
  ()=>Array(5).fill(false)
);

graphWithMatrix[0][1] = true // 0 -> 1
graphWithMatrix[0][3] = true // 0 -> 3
graphWithMatrix[1][2] = true // 1-> 2
graphWithMatrix[2][0] = true // 2-> 0
graphWithMatrix[2][4] = true // 2 -> 4
graphWithMatrix[3][2] = true // 3 -> 2
graphWithMatrix[4][0] = true // 4 -> 0

// 배열로 구현
const graphWithList = Array.from(Array(5),()=>[]);

graphWithList[0].push(1); // 0 -> 1
graphWithList[0].push(3); // 0 -> 3
graphWithList[1].push(2); // 1 -> 2
graphWithList[2].push(0); // 2 -> 0
graphWithList[2].push(4); // 2 -> 4
graphWithList[3].push(2); // 3 -> 2
graphWithList[4].push(0); // 4 -> 0 