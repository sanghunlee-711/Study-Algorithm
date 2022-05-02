/*
반복문으로 구현하기
*/

const factorial = (num) => {
  let total = 1;
  for (let i = num ; i > 1; i--){
    total *= i;
  }
  return total;
}
factorial(6);

/*
재귀로 구현하기
*/
function factorial2 (num) {
  //base case or end point;
  if(num === 1) return 1;
  
  return num * factorial2(num-1);
}