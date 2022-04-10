//값(value)과 포인터(next) 를 가지는 노드 클래스 선언
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//단방향 연결리스트 선언
class SinglyLinkedList {
  constructor(){
    //헤드와 테일을 null로 하여 초기화 해줌
    this.head = null;
    this.tail = null;
  }

  //탐색
  find(value){
    let currentNode = this.head; //헤드부터 탐색시작
    while(currentNode.value !== value){ //값 찾을때 까지 반복문 수행
      currentNode = currentNode.next; // 반복문 수행하며 계속 다음으로 이동
    }
    return currentNode;
  }

  //제일 마지막에 추가
  append(newValue){
    const newNode = new Node(newValue); //새로운 값을 노드로 할당
    if(this.head === null){ //빈 리스트인 경우
      this.head = newNode; //head와 tail이 하나 존재하는 노드가 됨.
      this.tail = newNode;
    }else{ //빈 리스트가 아닌 경우
      this.tail.next = newNode; //tail의 next에 새로운 노드를 추가하므로써 마지막에 하나 추가
      this.tail = newNode; //tail을 바꿔줌
    }
  }

  //삽입
  insert(node, newValue) { //집어 넣을 위치의 이전 노드(node)와 새롭게 넣을 값(newValue)을 인자로 받음
    const newNode = new Node(newValue);
    newNode.next = node.next; //새로운 노드의 next를 기존 node의 next로 할당
    node.next = newNode; //집어 넣을 위치의 이전노드(node)의 다음은 새롭게 넣을 노드를 가리키게 됨.
  }

  //제거(에러처리 추가로 필요하긴 함..)
  remove(value){  //값 찾으므로 선형시간 소요됨.
    let prevNode = this.head; //헤드부터 찾기 시작
    while(prevNode.next.value !== value) { //이전 노드를 찾을 것이므로 이전노드의 다음이 가리키는 것의 값(value)가 들어온 값과 동일하면 멈춤
      prevNode = prevNode.next; //계속 다음으로 이동
    }

    if(prevNode.next !== null) { //마지막이 아니라면
      prevNode.next = prevNode.next.next; //연결을 끊어줌(제거할 노드의 다음으로 포인터를 변경) 안쓰이면 자동 gc됨
    }
  }

  display(){
    let currNode = this.head;
    let displayString = '[';
    while(currNode !== null){
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }

    displayString = displayString.substr(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();

//코테에서 사실상 연결리스트를 실제 구현하여 문제를 풀문제는 많지 않다고 함 !