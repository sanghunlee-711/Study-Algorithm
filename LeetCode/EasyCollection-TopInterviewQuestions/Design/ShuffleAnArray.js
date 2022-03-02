//ref: https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/

// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:
// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example 1:
// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
//                        // Any permutation of [1,2,3] must be equally likely to be returned.
//                        // Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

// Constraints:
// 1 <= nums.length <= 200
// -106 <= nums[i] <= 106
// All the elements of nums are unique.
// At most 5 * 104 calls in total will be made to reset and shuffle.

// First Trial
//딱히 설명할게 없음.. 난수 만드는게 헷갈릴 수 있다
// Math.random() 등 Math함수를 잘 알아야할듯
class Solution {
  constructor(nums){
    this.nums = nums;
    this.origin = nums;
  }

  shuffle () {
    //복사를 위해 spread operator사용
    const randomArr = [...this.nums];
    for(let i = 0; i < randomArr.length; i +=1) {
      // i + 1을 통해 0~1의 수와 곱해주고 내림을 통해 범위안에 들게 해줌
      const temp = randomArr[i];
      const randomIdx = Math.floor(Math.random() * (i + 1));
      [randomArr[i], randomArr[randomIdx]] = [randomArr[randomIdx], temp];
    }
    return randomArr;
  }

  reset () {
    return this.origin;
  }
}

// Best Answer
// slice를 통해서 배열을 간단하게 복사시킴
// 변수명을 작게 준 것도 있고 reset에서는 받은 nums 어차피 그대로 줘도 되니 그대로 사용..

class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  reset() {
    return this.nums;
  }

  shuffle() {
    const rand = this.nums.slice(0);

    for (let i = 0; i < this.nums.length; i++) {
      const r = Math.floor(Math.random() * (i + 1));
      rand[i] = rand[r];
      rand[r] = this.nums[i];
    }

    return rand;
  }
}