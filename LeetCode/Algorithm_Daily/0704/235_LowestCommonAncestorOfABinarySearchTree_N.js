/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//이진탐색트리의 특성을 사용한 답안임
var lowestCommonAncestor = function(root, p, q) {
  //p,q모두 root보다 작다면 p,q는 모두 root의 left에 있다고 생각하면 됨
  if(root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  //p,q모두 root보다 크다면 p,q는 모두 root의 right에 있다고 생각하면 됨
  }else if(root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  //그게 아닌 경우 루트의 좌 우측 자식인 경우 이므로 반환
  return root;
};