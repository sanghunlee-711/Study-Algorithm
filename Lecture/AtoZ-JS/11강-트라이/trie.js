class Node {
  constructor(value = ""){ //트리구조인만큼 그래프처럼 노드 필요 
      this.value = value;  //인접리스트 유사하게 사용
      this.children = new Map();
  }
}

class Trie {
  constructor(){
    this.root = new Node();
  }

  insert(string) {
    let currNode = this.root;
    
    for(const char of string){ //문자열을 앞에서부터 짜르면서 순회
      if(!currNode.children.has(char)) { //만약 현재노드에 자른 문자를 간선으로 가지고 있지 않다면
        currNode.children.set( //새로운 노드를 추가
          char,
          new Node(currNode.value + char)
        );
      }
      currNode = currNode.children.get(char); // 다음 정점으로 이동하기
    }
  }

  has(string) { //문자열 존재 체크
    let currNode = this.root;

    for(const char of string) {
      if(!currNode.children.has(char)) {
        return false;
      }
      currNode = currNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert('cat');
trie.insert('can');

console.log(trie.has('cat'));
console.log(trie.has('can'));
console.log(trie.has('cap'));