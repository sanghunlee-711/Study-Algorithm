//Ref:  https://programmers.co.kr/learn/courses/30/lessons/43165
// 20220201


// Idea Sketch
//dfs, bfs는 모르겠고
// 로직 생각
// 키워드는 +,- 둘다 써야함
//1. 그럼 배열에 +,- 다 넣고 시작하자
// 2. 그래프 만들고 왼쪽은 무조건 - 오른쪽은 무조건 + 그리고 각 노드에 visited 로 불리안 넣어서 방문 하였는지 체크 -> 이진트리까지 가야하는건가
//2. 모든 경우의 수에서 고려하면서 타겟에 맞는경우 answer +=1;
// 하다가 30분지나도 구현력에 진척이 없어 걍 찾아봄

// Finding Trials
// 거의 모든 블로그가 동일한 재귀형식만 변수명만 바꿔서 똑같은 로직임
// 파이썬으로 접근하신 몇몇분들은 곱집합을 사용하기도 함
// 변수를 별도 할당하지 않고 인덱스를 통해 값을 구함

function solutionRecursive(numbers, target) {
  
  const finding = (idx, cnt) =>{
  if(idx === numbers.length){ // 다 탐색하면
    return cnt === target ? 1 : 0 //같으면 1 아니면 0
  }
  
  return (finding(idx + 1, cnt + numbers[idx]) + finding(idx + 1, cnt - numbers[idx])); //재귀 형태로 계속 카운트 체크하는 방법
  // 인덱스는 늘려주고 +, - 케이스가 계속 확장되어 나갈 것임
  }
  
  return finding(0,0); //idx:0, count:0부터 시작
}

solution(numbers, targets);

// Finding Solution 2

// 재귀적인데 직접 변수에 값을 할당해줌
function solution(numbers, target) {
  let answer = 0;
  getAnswer(0,0);
  function getAnswer(x,value) {
      if(x<numbers.length){ // 다 탐색안했으면 재귀 돌림
          getAnswer(x+1,value + numbers[x]);
          getAnswer(x+1,value - numbers[x]);
      } else{
          if(value === target){ // 같으면 answer 카운트 해줌
              answer++
          }
      }
  }
  return answer;
}



// Best Solution
// 아이디어 스케치와 거의 유사한데 이진트리를 직접만들어 traverse시켜 답을 구해내심
// 제일 정석적인 방법이라고 여겨져서 따라하고 싶은 구현력 ..
function solution(numbers, target) {
    var answer = 0;
    var answer = 0;

    let root = new BinarySearchTree();
    root.insert(0);
    numbers.forEach(function(val) {
       root.insert(val); 
    });

    answer = root.DFSPreOrder(target);
    return answer;
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }   
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            function traverse(node) {
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                if(node.left === null) {
                    let leftNode = new Node(-value);
                    let rightNode = new Node(value);
                    node.left = leftNode;
                    node.right = rightNode;
                }
            }
            traverse(current);
            return this;
        }
    }
    DFSPreOrder(target) {
        let count = 0;
        let data = 0;
        let current = this.root;
        function traverse(node) {
            data = data + node.value;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            if(node.left === null) {
                if(data === target) {
                    count++;
                }
            }
            data = data - node.value;
        }
        traverse(current);
        return count;
    }
}
