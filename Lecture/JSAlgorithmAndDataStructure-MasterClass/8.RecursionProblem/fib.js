// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
//점화식 이거임 a(n) = a(n-2) + a(n-1);
function fib(num){
  if(num <= 2) return 1;
  return fib(num - 2) + fib(num-1);
// add whatever parameters you deem necessary - good luck!  
}