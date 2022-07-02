/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

/*
dfs문제임
전위순회
nary-tree는 이진트리라고 보면될 것 같음.
'모든 노드가 n개를 초과하는 자식 노드를 가지지 않는 트리'라고함
이진트리는 n이 2인 경우인 듯.
그래서 left,right가 아니라 자식에 대한 배열을 모두 순회하며 탐색시키면 될 것 같음
전위순회는 해당노드 방문 왼쪽자식 전체 탐색 오른쪽 자식 전체탐색으로 좌에서 우로 가므로 0부터 끝까지 회문 돌리면 될 듯.
*/
var preorder = function(root) {
  const data = [];
  if(!root) return data;
  const traverse = (node) => {
      data.push(node.val);
      
      if(node.children.length){
          for(let i = 0; i < node.children.length; i++) {
              traverse(node.children[i]);
          }    
      }
  };
  traverse(root);
  return data;
}