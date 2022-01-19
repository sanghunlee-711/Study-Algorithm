class MaxHeap {
  constructor() {
    this.heap = [null]; //0번 인덱스는 편의를 위해 null로 처리
  }

  push(value) {
    this.heap.push(value); //규칙에 따라 가장 마지막에 넣어준다.
    let currentIndex = this.heap.length - 1;  //정점
    let parentIndex = Math.floor(currentIndex / 2) // 이진트리의 부모 노드 위치

    //부모가 우선순위가 낮거나 루트가 아닐 때 까지
    while(
      parentIndex !== 0 && this.heap[parentIndex] < value
      ){ 
      const temptation = this.heap[parentIndex];
      //부모와 자식의 순서를 바꿔준다.
      this.heap[parentIndex] = value; 
      this.heap[currentIndex] = temptation;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1]; //루트 요소 반환을 위해 임시로 상수에 저장
    this.heap[1] = this.heap.pop(); // 루트 정점을 가장 마지막 정점으로 대체

    //루트에서 부터 아래로 내려갈 변수를 미리 설정해놓는다.
    let currentIndex = 1; 
    let leftIndex = 2;
    let rightIndex = 3;

    while( //하위 정점들이 현재 정점보다 우선순위가 낮을 경우 종료 조건
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap [rightIndex]
    ) {
      //왼쪽 정점이 오른쪽 보다 우선순위가 낮을 경우 current를 오른쪽 정점과 바꿔준다.
      if(this.heap[leftIndex] < this.heap[rightIndex]) { 
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
        //오른쪽정점이 왼쪽 보다 우선순위가 낮을 경우 current를 왼쪽 정점과 바꿔준다.
      } else{
        const temp = this.heap[currentIndex];
        this.heap[currentIndex]  = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      //바꾼 정점에서 왼쪽 정점의 위치와 오른쪽 정점의 위치를 다시 할당 해준다.
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}


const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); //[null, 63,54,45,27,36]

console.log(heap.pop()); //63
console.log(heap.pop()); // 54
console.log(heap.pop()); // 45
console.log(heap.pop()); // 36
console.log(heap.pop()); // 27




