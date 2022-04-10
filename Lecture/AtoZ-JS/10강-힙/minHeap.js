class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length-1;
    let parentIndex = Math.floor(currentIndex/2);

    //부모가 우선순위가 높거나 루트가 아닐 때 까지
    while(parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex/2);
    }
  }

  pop() {
    const returnValue = this.heap[1]; //루트요소 반환을 위한 임시 저장
    this.heap[1] = this.heap.pop(); // 루트 정점을 가장 마지막 정점으로 대체함.

    //루트부터 내려갈 변수를 미리 설정
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    //정렬
    while(
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ){
      if(this.heap[leftIndex] > this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      }else{
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex*2;
      rightIndex = currentIndex*2 + 1;
    }
    return returnValue;
  }
}

const heap = new MinHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); //[ null, 27, 36, 54, 45, 63 ]

console.log(heap.pop()); //63
console.log(heap.pop()); // 54
console.log(heap.pop()); // 45
console.log(heap.pop()); // 36
console.log(heap.pop()); // 27

