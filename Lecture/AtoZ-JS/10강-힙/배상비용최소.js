//힙 실습이니 힙을 쓸것 같긴 한데
// 우선순위 자체를 크기로 두고 가장 큰것부터 값을 하나씩 줄여주면 될 듯.
// 완전이진트리 구조를 계속 유지하고 있으면 값이 큰놈이 계속 위에 있게 되니?

function solution(no, works) {
  let sortedArr = works.sort((a,b)=> b-a);
  //이렇게도 할 수 있을 것 같은데 ??.
  for (let i = 0; i < no; i += 1){
      const maxVal = sortedArr[0];
      sortedArr.shift(); //제일 앞에(제일큰값) 빼고
      sortedArr.push(maxVal-1);
      sortedArr = sortedArr.sort((a,b) => b-a);
  }
  
  return sortedArr.map((el)=> el*el).reduce((a,b)=> a+b) 
  //이제 이렇게하면 시간복잡도 똥인것임.
}

function solution2(no, works) {
  
}