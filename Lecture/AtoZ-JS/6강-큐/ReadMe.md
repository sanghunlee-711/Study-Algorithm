# 큐
First In First Out이라는 개념을 가진 선형 자료구조이며(놀이공원 줄 생각하자)
Linear Queue(선형큐) 와 Circular Queue(환형큐)가 존재한다.
제일 앞을 Front, 제일 뒤를 Rear로 보통 칭함. 큐에 요소추가를 Enqueue 빼는 것을 Dequeu

## Linear Queue(선형 큐)
  선형 큐는 배열로 나타낼 수 있음. 넣고 빼는 작업에서 인덱싱작업이 필요해짐(빈 배열의 자리를 매꾸기위해 결국 선형시간 소요)
  해결책으로 링크드리스트를 활용하면 인덱싱에 대한 문제가 없음.


## Circular Queue(환형 큐)
Front 와 Rear가 이어져 있는 Queue로서 환형큐는 연결리스트로 구현하였을때 이점이 없게 된다.

### 유의
큐를 구현할때 shift함수를 쓰지말자.
```javascript
const queue = [1,2,3];
queue.push(4);
const value = queue.shift(); // O(n) 시간으로 선형시간 소요되므로 큐에서 기대하는 시간복잡도가 아니게 됨
console.log(value);
```
  

