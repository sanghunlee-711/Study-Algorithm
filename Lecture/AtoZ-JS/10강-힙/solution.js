//크게 3가지 방법 존재
// 1. 매 루프마다 Math.max 함수를 호출한다
// 2. 매 루프마다 정렬한다.
// 3. Heap을 이용한다
// 1번은 매 루프마다 O(n)의 복잡도 소요
// 2는 O(nlogn)
// 3 은 O(logn)임
// 사실 매번 큰 값 혹은 작은 값을 알면서 루프를 돌아야한다면 Heap을 무조건 사용하는 것이 대부분 좋음.

class MaxHeap {
  constructor(){
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currIdx = this.heap.length-1;
    let parentIdx = Math.floor(currIdx /2 );

    //부모가 더 커야하고 parentIdx가 영이면 루트이므로종결 되어야함. => 이진트리 조건을 기억하자.
    while(parentIdx !== 0 && this.heap[parentIdx] < value) { //종결 조건을 계속 상기해야겠음..
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = value;
      this.heap[currIdx] = temp;

      currIdx = parentIdx;
      parentIdx = Math.floor(currIdx/2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop(); //제일 로우레벨의 리프를 빼서 제일 위의 레벨로 올려줌(루트)

    let currentIndex  = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    //좌우 값 정렬
    while (
      this.heap[currentIndex] < this.heap[leftIndex] || 
      this.heap[currentIndex] < this.heap[rightIndex]) {
        if (this.heap[leftIndex] < this.heap[rightIndex]) {
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[rightIndex];
            this.heap[rightIndex] = temp;
            currentIndex = rightIndex;
        } else {
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[leftIndex];
            this.heap[leftIndex] = temp;
            currentIndex = leftIndex;
        }
        //계속 순회할 것이므로 인덱스 업데이트 필요
        leftIndex = currentIndex * 2;
        rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
}
}

function solution(no, works) {
  if(works.reduce((a,b)=> a + b) <= no){
    return 0;
  }

  //MaxHeap만들기
  const heap = new MaxHeap();
  for (const work of works) {
    heap.push(work);
  }
  
  //no 만큼 루프돌며 가장 큰값빼서 처리 후 다시 넣기
  for(let i = 0; i < no; i += 1){
    heap.push(heap.pop()-1);
  }

  return heap.heap.reduce((a,b)=> a+b*b);
}