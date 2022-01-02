class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
      return;
    }

    let currNode = this.root;
    while(currNode !== null) {
      if(currNode.value < value) { //더 큰 경우 삽입을 위해 이동
        if(currNode.right === null){ //null인경우 삽입
          currNode.right = newNode;
          break;
        }
        currNode = currNode.right; //null이 아닌경우 계속 이동
      }else{
        if(currNode.left === null) {
          currNode.left = newNode;
          break;
        }
        currNode = currNode.left;
      }
    }

  }

  has(value) {
    let currNode = this.root;
    while(currNode !== null) {
      if(currNode.value === value) {
        return true;
      }

      if(currNode.value < value) {
        currNode = currNode.right;
      }else{
        currNode = currNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);

console.log(tree.has(8)); //true
console.log(tree.has(1)); //false