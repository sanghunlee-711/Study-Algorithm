//ref: 

// First Trial
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