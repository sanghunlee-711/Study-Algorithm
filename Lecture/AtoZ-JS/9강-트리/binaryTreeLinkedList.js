class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor(){
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(newValue){
    this.queue[this.rear++] = newValue;
  }

  dequeue(){
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    //Level Order
    const queue = new Queue()
    queue.enqueue(this.root);
    while(queue.size){
      const currNode = queue.dequeue();
      if (!currNode) break;
      console.log(currNode.value); //각 레벨별로 트리를 보여줌.
      if(currNode.left) queue.enqueue(currNode.left); 
      if(currNode.right) queue.enqueue(currNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
tree.display();