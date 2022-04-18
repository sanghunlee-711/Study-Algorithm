//ref:

//First Trial
//연산자 쓰지말라길래 곧바로 이진연산이 생각났지만
//전혀 익숙하지 않은 이진연산자이므로 걍 찾아봄

//Finding solution
//EasyCollection에서도 풀어봤듯이 한칸씩 밀어주는 형태임

var getSum = function(a, b) {
  while(b) {
    const carry = a & b;
    a = a ^ b;
    b = carry << 1;
}
return a;
};
/*
a = 8 = 1000
b = 9 = 1001

8 ^ 9 = 0001 = 1
8 & 9 = 1000 = 8
1000 << 1 = 10000 = 16

a = 00001
b = 10000

1 ^ 16 = 10001 = 17
1 & 16 = 00000 = 0
*/