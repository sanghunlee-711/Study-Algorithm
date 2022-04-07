//ref: 


//First Trial


// 질문리스트
//1. 정렬되어 들어오는배열인가? -> x
//2. k번째 자주 나오는 것 까지면 중복 없애고 걍 n인덱스까지만 줘도 되는가? -> x
//3. 자주 나오는 것 순서대로 정렬인지 크기 대로 정렬인지 ;-;.. -> x
//아래 테스트케이스로 봐서 아님
// [3,0,1,0] 
// 1
//[3]

// sketch
// 1. hash로 다 카운트함
// 2. 카운트 된 개수 순서별로 배열에 넣어줌
// 3. k 개만큼만 반환해줌

var topKFrequent = function(nums, k) {
  const hash = {};
  
  nums.forEach((el)=> {
      hash[el] ? hash[el]++ : hash[el] = 1;
  })
  
  return Object.entries(hash).map((el)=> el).sort((a,b)=> b[1]-a[1]).map((el)=> +el[0]).slice(0,k);
};

//Best Answer
//Entries를 쓰지 않아도 hash로 접근해서 sort를 할 수 있는걸 활용함
//나는 거기까지 생각못하고 entries로 다시 배열을 다 만들어서 거기서 비교하게 함
// 성능적 차이가 많이 나 버림 ㅎㅅㅎ;;
var topKFrequent = function(nums, k) {
  const mp = {};
  
  for(let i=0;i<nums.length;i++) {
      const num = nums[i];
      mp[num] = mp[num]? mp[num]+1:1; 
  }
  
  return Object.keys(mp).sort((x,y)=>mp[y]-mp[x]).slice(0,k);
};