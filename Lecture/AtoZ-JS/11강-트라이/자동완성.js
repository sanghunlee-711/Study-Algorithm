// 1. Trie구조에 문자열 전부넣고
// 2. 각 문자가 있는 배열을 다시 반복문 돌면서  has true가 나올때 까지의 문자열을 카운트
// 3. 총합구하기

class Node {
  constructor(value = ""){
      this.value = value;
      this.children = new Map();
  }
}

class Trie {
  constructor(){
      this.root = {};
  }
  
  insert(string) {
    let currNode = this.root;
    for(const char of string) {
      if(!currNode[char]) currNode[char] = [0, {}]; 
      currNode[char][0] = 1 + (currNode[char][0] || 0);
      currNode = currNode[char][1];
    }
    return currNode;
  }
}


function solution(words) {
  var answer = 0;
  const trie = new Trie();
  words.forEach((el)=>trie.insert(el));
  console.log(trie.has2(words[1]));
  return answer;
}

//못품