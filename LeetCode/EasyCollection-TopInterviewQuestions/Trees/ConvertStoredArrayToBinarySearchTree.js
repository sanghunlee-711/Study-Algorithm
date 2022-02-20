//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/631/

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// 작은것부터 큰 순서대로 정렬되어있는(오름차순) 배열임 이걸 동일 높이의 이진트리로 바꾸면 됨
// height balanced는 한쪽 서브트리 레벨이 다른쪽보다 2이상 되면(1보다 커지면) 안되는 것을 말함.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.


// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

//First Trial
// 들어온 배열이 정렬되어있고 이진트리는 좌측이 작은값 우측이 큰값을 가지게 만들면 됨
// 그러면 루트를 들어온배열에서 중간값을 넣어주고  mid = Math.floor(nums.length); ??
// 포인터 두개로 양쪽으로 돌릴까 ?  근데 이것도 결국 재귀가 되야함
// 아니면 Queue를 만들어서 for문을 처음부터 돌면서  root 보다 작은 값이 있으면 root.left로 만들고 거기서 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//뭔가 논리는 맞는 것 같은데 TreeNode를 어떻게 확장해서 줘야할지 모르겠음 ;-; .. 
//그냥 TreeNode클래스에 메서드를 만들어주는게 더 빠를 것 같음
 var sortedArrayToBST = function(nums) {
  const mid = Math.floor(nums.length/2); //중간 인덱스
  nums = nums.map((el, idx)=> { //방문 처리를 위해 변경
      if(idx === mid){
          return [[el, true]]    
      }
      return [[el, false]]
  });
  
  const queue = [new TreeNode(nums[mid][0])];
let answer; 
  
while(queue.length !== 0) {
  const curr = queue.shift();
    
  for(let i = 0; i < nums.length; i++){
      if(nums[i][1]) continue;
      
    //현재 루트 값 보다 작으면 왼쪽 노드가 됨
    if(curr.val > nums[i][0]){
      curr.left = new TreeNode(nums[i][0]);
      nums[i][1] = true //처리된 nums에 대해 변경이 필요한데 흠..
      queue.push(nums[i][0])
      break;
    }
    //현재 루트값보다 크면 오른쪽 노드가 되어야함
    if(curr.val < nums[i][0]) {
      curr.right = new TreeNode(nums[i][0]);
      nums[i][1] = true
      queue.push(nums[i][0])
      break;
    }
  }
    console.log(curr)
  answer = curr
}

return answer;
};

//Finding Solution
//재귀적 방식으로 풀게 됨
// 엣지케이스 선빵처리하고 
// 중간을 넣고 포인터 두개를 이용해서 중간 기준으로 양쪽을 정해줌
// 정렬된 배열을 받으니 가능한 것임
// 나 뭐한거냐

const helper = (nums, first, last) =>{
  if(first > last) return null;
  const mid = Math.ceil((first+last)/2);
  const root = new TreeNode(nums[mid]);
  root.left = helper(nums, first, mid -1);
  root.right = helper(nums, last, mid+1);
  return root;
}

const solution = (nums) =>{
  return helper(nums, 0, nums.length -1);
}

//문제점
//그래도 투포인터까지 생각해내고 딴짓거리 한게 아쉽긴 하지만..
// 투포인터를 생각해낸것에 칭찬을 곁들여보자
// 트리문제를 해결할때는 진짜 앵간하면 재귀가 답임