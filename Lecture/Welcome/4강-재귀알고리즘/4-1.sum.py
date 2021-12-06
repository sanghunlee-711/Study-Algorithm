# -*-coding:utf-8-*-


#재귀 알고리즘이 사람이 생각하는 방식을 표현하기에 효율적일 수도 있으나 
# 함수를 선언하고 다시 호출하고의 방식의 반복이기에  굳이 따지자면 효율성이 Iterative버전에서 떨어질 수 있음.
#recursive version -> O(n)
def sum(n):
  if n <= 1:
    return  n # 재귀함수인 경우 종결조건이 매우 중요해서 이러한 종결조건을 항상 생각해야함.
  else:
    return n + sum(n-1); #재귀적 활용

a = int(input("Number: "))
print(sum(a))


b = int(input("NoRecursive Number: "))
#Iterative version -> O(n)
def sumNoRecursive(n):
  s = 0
  while n >= 0:
    s+=n
    n-=1
  return s
  
print(sumNoRecursive(b))
