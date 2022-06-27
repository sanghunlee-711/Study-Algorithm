/*
리턴도 treeNode 클래스임
하나 기준으로 다 합하는게 맞을 듯 한데
*/
var mergeTrees = function(root1, root2) {
    
  const helper = (node1, node2) => {
      //하나 없으면 다른거 리턴해줌
      if(!node1) return node2;
      if(!node2) return node1;
      //현재 노드의 값을 node1에 기반해서 합쳐줌
      node1.val += node2.val;
      
      //재귀는 어차피 트리형태처럼 스택에 쌓임    
      node1.left = helper(node1.left, node2.left);
      node1.right = helper(node1.right, node2.right);
      return node1;
  }
  
  return helper(root1, root2);
};