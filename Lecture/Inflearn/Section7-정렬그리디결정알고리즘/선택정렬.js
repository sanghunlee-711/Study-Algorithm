//배열 선택정렬로 정렬하기
//T.C O(N**2);
const solution = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[lowest]) lowest = j;
    }
    if(lowest !== i) [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15])); //[5,7,11,13,15,23];