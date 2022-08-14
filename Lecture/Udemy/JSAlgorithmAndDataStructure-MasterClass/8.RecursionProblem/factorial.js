
function factorial(n){
  //0! === 1임
  if(n === 1 || n === 0) return 1;
  return n * factorial(n-1);
}

//Solution
//0보다 작은경우의 엣지케이스 생각안함
function factorial(x){
  if (x < 0 ) return 0;
  if (x <= 1 ) return 1;
  return x * factorial(x-1);
}
