
function factorial(n){
  //0! === 1임
  if(n === 1 || n === 0) return 1;
  return n * factorial(n-1);
}
