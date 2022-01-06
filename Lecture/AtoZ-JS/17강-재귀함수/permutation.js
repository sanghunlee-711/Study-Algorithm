// 순열 조합은 코테에 은근히 자주 사용되는 기능이다.
// js에서 빌트인이 별도로 없어 직접 구현해야하며 재귀함수를 이용하면 쉽게 만들 수 있다
// js의 콜스택이 별로 기능이 좋지 않아 재귀 구현을 피하는것이 좋지만 
// 순열과 조합 자체가 애초에 시간복잡도가 높기 때문에 코테에서 N이 크게나오는 일이 거의 없다.
// 따라서 앵간하면 재귀로 기억을 해놓고 있자
// 서로 다른 n 개에서 r개를 택하는 경우의 수를 생각해보자 -> nPr -> n!/ (n-r)!
//순열 O(n!)
const permutaion = (arr, n) =>{
  //1개만 뽑는다면 그대로 순열을 반환하며 탈출조건으로도 사용 된다.
  if(n === 1) return arr.map((v)=[v]);
  const result = [];
  //요소를 순환한다.
  arr.forEach((fixed, idx, arr) => {
      //현재 idx를 제외한 요소를 추출한다.
      // idx번째는 선택된 요소이다.
      const rest = arr.filter((_,index)=> index !== idx);
      // 선택한 요소가 제거 된 배열을 통해 재귀 호출
      const perms = permutations(rest, n - 1);
      // 선택된 요소(fixed)와 재귀호출을 통해 구한 순열을 합쳐준다
      const combine = perms.map((v)=> [fixed, ...v]);
      // 결과값을 추가한다.
      result.push(...combine);
  });

  return result;
}

//조합 O(2*n) 조합 -> 서로다른 n개에서 순서와 상관없이 r개 구하는 거 nCr -> nPr / r!
// => n!/ (r! (n-r)!)

const combination = (arr, n) =>{
  if(n === 1) return arr.map((v)=> [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    //현재 인덱스 이후 요소를 추출한다.
    // index번째는 선택된 요소이다
    const rest = arr.slice(idx+1);
    // 선택된 요소 이전요소들을 제외한 뒤 재귀호출한다(slice쓴 이유임);
    const combis = combination(rest, n - 1);
    // 선택된 요소와 재귀호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v)=> [fixed, ...v]);

    result.push(...combine);
  });

  return result;
}



// function solution(numbers) {
//   // 1. 조합을 구한다. n 개중 2개
//   // 2. 조합의 합을 구한다.
//   // 3. 중복을 제거한다.
//   // 4. 오름차순 정렬한다.
//   return [...new Set(combinations(numbers, 2).map(combi => combi[0] + combi[1]))].sort((a, b) => a - b);
// }