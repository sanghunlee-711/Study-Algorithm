
/*패턴의 기본적 형태 
재귀적이지 않은 outer함수가 
재귀적인 내부함수(helper)를 호출하는 패턴
*/
function outer (input) {
  const outerScopedVar = [];

  function helper(helperInput) {
    //Modify the outerScopedVar

    helper(helperInput--);
  }
  helper(input);
  return outerScopedVar;
}

//홀수를 뽑아내는 알고리즘
function collectOddValues(arr) {
  let result =[];

  function helper(helperInput) {
    if(helperInput.length === 0 ) return ;
    if(helperInput[0] % 2 !== 0)  result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);


function collectOddValuesWithourHelper (arr)  {
  let newArr = [];

  if(arr.length === 0) return newArr;

  if(arr[0] % 2 !== 0 )  newArr.push(arr[0]);

  //arr.slice(1)는 1번 인덱스부터 뒤에까지만 짤라내서 리턴함(원본배열 변경)
  //0번을 제거한다고 생각하면 편안
  newArr = newArr.concat(collectOddValuesWithourHelper(arr.slice(1)));
  return newArr;
}