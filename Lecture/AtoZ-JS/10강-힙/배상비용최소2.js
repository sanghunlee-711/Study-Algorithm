// 우선순위 자체를 크기로 두고 가장 큰것부터 값을 하나씩 줄여주면 될 듯.
// 완전이진트리 구조를 계속 유지하고 있으면 값이 큰놈이 계속 위에 있게 되니?

class MaxHeap {
  constructor(){
      this.heap = [null];
  }
  
  push(value) {
      this.heap.push(value);
      let currIdx = this.heap.length - 1;
      let parentIdx = Math.floor(currIdx/2);
      
      while(parentIdx !== 0 && this.heap[parentIdx] < value) {
          const temp = this.heap[parentIdx];
          this.heap[parentIdx] = value;
          this.heap[currIdx] = temp;
          
          currIdx = parentIdx;
          parentIdx = Math.floor(currIdx/2);
      }
  }
  
  pop() {
      const returnVal = this.heap[1];
      this.heap[1] = this.heap.pop();
      
      let currIdx = 1;
      let leftIdx = 2;
      let rightIdx = 3;
      
      
      while(
          this.heap[currIdx] < this.heap[leftIdx] ||
          this.heap[currIdx] < this.heap[rightIdx]
      ){
          if(this.heap[leftIdx] < this.heap[rightIdx]) {
              const temp = this.heap[currIdx];
              this.heap[currIdx] = this.heap[rightIdx];
              this.heap[rightIdx] = temp;
              currIdx = rightIdx;
          }else{
              const temp = this.heap[currIdx];
              this.heap[currIdx] = this.heap[leftIdx];
              this.heap[leftIdx] = temp;
              currIdx = leftIdx;
          }
          leftIdx = currIdx * 2;
          rightIdx = currIdx * 2 + 1;
      }
      return returnVal;
  }
}


function solution(no, works) {
  const heap = new MaxHeap();
  
  works.forEach((el)=> heap.push(el));
  for(let i = 0; i < no; i +=1){
      heap.push(heap.pop()-1)
  }
  
  // return heap.heap.map((el)=> el*el).reduce((a,b)=> a+b);
  return heap.heap.reduce((a,b)=> a+b*b) //reduce의 첫번째 인자가 prevVal, 두번째 인자가 currVal이므로 가능.
}