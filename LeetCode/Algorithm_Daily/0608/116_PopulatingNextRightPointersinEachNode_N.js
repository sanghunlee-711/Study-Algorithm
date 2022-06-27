/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/*
pseudo
각 row마다 next를 체크해줘야함
열마다 방문을 위해 queue를 사용

*/
var connect = function(root) {
  if(!root) return root;
  
  const queue = [root];
  
  while(queue.length) {
      const row = [];
      //각 대기열 길이를 가지고 있어야 그 대기열만 처리함
      //queue.length해버리면 자동으로 업데이트 되서 안됨
      const pendingRowLen = queue.length;
      
      for(let i = 0; i < pendingRowLen; i++) {
          const current = queue.shift();    
          //해당 row 다 모으기 방문처리
          row.push(current);
          //각 좌 우 속성 있으면 대기열에 넣어주기
          if(current.left) queue.push(current.left);
          if(current.right) queue.push(current.right);
      }
      
      //모은 row에 next속성 체크 후 부여해주기
      for(j = 0; j < row.length; j++) {
          let next = row[j+1];
          if(next) row[j].next = row[j+1];
          if(!next) row[j].next = null;
      }
  }
  return root;
  
};